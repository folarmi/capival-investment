import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { toast } from "react-toastify";
import { ErrorMessage } from "@hookform/error-message";
import { v4 as uuidv4 } from "uuid";

import { Button, FluentSelect, SavingsInput } from "../../atoms";
import { validateBillerProductAsync } from "../../slices/billPayment";

const BillPaymentForm = () => {
  const { state } = useLocation();
  const dispatch = useDispatch();
  const { validateBillerProductLoading, getBillerProductsLoading } =
    useSelector((state) => state?.billPayment);
  const userObject = useSelector(
    (state) => state.auth.login?.user?.user?.customer_data
  );

  //   console.log(userObject);

  const [selectedBillerProduct, setSelectedBillerProduct] = useState();

  const { control, handleSubmit, register, formState, getValues, setValue } =
    useForm({});
  const { errors } = formState;
  console.log("the errors", errors);

  const productsData =
    state?.products &&
    state?.products?.map((product) => {
      return {
        value: product?.billPaymentProductId,
        label: product?.billPaymentProductName,
        customFields: product?.metadata?.customFields,
        isAmountFixed: product?.isAmountFixed,
        amount: product?.amount,
        currency: product?.currency,
      };
    });

  const getSelectedBillerProduct = (item) => {
    // console.log(item);
    setSelectedBillerProduct(item);
  };

  const handleValidation = (e, product) => {
    if (!product?.validation) {
      return;
    } else {
      const variables = {
        billPaymentProductId: getValues("billPaymentProductId"),
        customerId: getValues(product?.variable_name),
      };

      dispatch(validateBillerProductAsync(variables))
        .unwrap()
        .then((res) => {
          if (res?.status === true) {
            toast.error(res?.message);
          }
        })
        .catch((err) => {
          toast.error(err?.message);
        });
    }
  };

  const submitForm = (values) => {
    console.log("form values", values);
    const variables = {
      billPaymentProductId: values?.billPaymentProductId,
      amount: 2000.0,
      transactionRef: uuidv4(),
      name: userObject?.Firstname + " " + userObject?.Surname,
      email: userObject?.Email,
      phoneNumber: userObject?.Mobile,
      customerId: userObject?.CustomerID,
      metadata: {
        customFields: [
          {
            variable_name: "size",
            value: "40abc",
          },
        ],
      },
    };

    // console.log(variables);
  };

  return (
    <div className="m-auto w-[92%] md:w-[50%] lg:w-[40%] xl:w-[34%] mt-16">
      <FluentSelect
        control={control}
        name="billPaymentProductId"
        options={productsData}
        customOnChange={getSelectedBillerProduct}
        label="Biller Products"
        isLoading={getBillerProductsLoading}
        placeholder="Biller Products"
        // error={errors?.repayment_channel?.message}
        // rules={{ required: "Repayment Method is required" }}
      />

      <form onSubmit={handleSubmit(submitForm)}>
        {selectedBillerProduct?.customFields.length === 0 ? (
          <div className="mt-4">
            <SavingsInput
              label="Amount"
              placeholder="Amount"
              readOnly={
                selectedBillerProduct?.isAmountFixed === true ? true : false
              }
              value={selectedBillerProduct?.amount}
            />
          </div>
        ) : (
          <>
            {selectedBillerProduct?.customFields &&
              selectedBillerProduct?.customFields.map((product) => {
                // const variableName = product?.variable_name;
                console.log("logging", selectedBillerProduct?.isAmountFixed);
                return (
                  <div className="mt-4" key={product?.variable_name}>
                    {product?.selectOptions?.length === 0 ? (
                      <div>
                        <SavingsInput
                          label={product?.display_name}
                          placeholder={product?.display_name}
                          readOnly={selectedBillerProduct?.isAmountFixed}
                          value={
                            selectedBillerProduct?.isAmountFixed === true
                              ? selectedBillerProduct?.amount
                              : ""
                          }
                          register={register(product?.variable_name, {
                            onBlur: (e) => handleValidation(e, product),
                            // onChange: (e) => setValue(e.target.value),
                            required: product?.required
                              ? "This field is required"
                              : false,
                          })}
                          error={errors?.[product?.variable_name]?.message}
                          //   error={
                          //     errors && (
                          //       <ErrorMessage
                          //         errors={errors}
                          //         name={product?.variable_name}
                          //       />
                          //     )
                          //   }
                        />
                        {product?.validation &&
                          validateBillerProductLoading && (
                            <span className="text-sm text-red-500 font-medium">
                              Validating...
                            </span>
                          )}
                      </div>
                    ) : (
                      <FluentSelect
                        name={product?.variable_name}
                        control={control}
                        label={product?.display_name}
                        options={
                          product?.selectOptions &&
                          product?.selectOptions?.map((item) => {
                            return {
                              value: item?.VALUE,
                              label: item?.DISPLAY_NAME,
                            };
                          })
                        }
                        rules={{
                          required: product?.required
                            ? "This field is required"
                            : false,
                        }}
                        error={
                          <ErrorMessage
                            errors={errors}
                            name={product?.variable_name}
                          />
                        }
                      />
                    )}
                  </div>
                );
              })}
          </>
        )}

        <div className="w-full mt-10 md:w-[40%] m-auto">
          <Button
            buttonText="Submit"
            className="rounded-xl mb-10"
            size="lg"
            // isLoading={createLoanIsLoading}
          />
        </div>
      </form>
    </div>
  );
};

export { BillPaymentForm };
