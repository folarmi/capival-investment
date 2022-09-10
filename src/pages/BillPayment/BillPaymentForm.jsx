import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { toast } from "react-toastify";
import { ErrorMessage } from "@hookform/error-message";
import { v4 as uuidv4 } from "uuid";

import { Button, FluentSelect, SavingsInput } from "../../atoms";
import {
  initiateTransactionAsync,
  validateBillerProductAsync,
} from "../../slices/billPayment";

const BillPaymentForm = () => {
  const { state } = useLocation();
  const dispatch = useDispatch();
  const {
    validateBillerProductLoading,
    getBillerProductsLoading,
    initiateTransactionLoading,
  } = useSelector((state) => state?.billPayment);
  const userObject = useSelector(
    (state) => state.auth.login?.user?.user?.customer_data
  );

  //   console.log(userObject);

  const [selectedBillerProduct, setSelectedBillerProduct] = useState();
  const [billPaymentProductId, setBillPaymentProductId] = useState("");

  const { control, handleSubmit, register, reset, formState, getValues } =
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
    setBillPaymentProductId(item?.value);
    setSelectedBillerProduct(item);
    reset();
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
    if (selectedBillerProduct?.isAmountFixed) {
      values.amount = selectedBillerProduct?.amount;
    }
    if (values?.amount === undefined) {
      toast.error("Amount not specified");
      return;
    }

    // deep copy the values object
    let copiedValues = JSON.parse(JSON.stringify(values));
    delete copiedValues.billPaymentProductId;
    // parseInt(copiedValues?.amount);
    Number(copiedValues.amount);

    const variables = {
      billPaymentProductId: billPaymentProductId,
      amount: parseInt(values?.amount),
      transactionRef: uuidv4(),
      name: userObject?.Firstname + " " + userObject?.Surname,
      email: userObject?.Email,
      phoneNumber: userObject?.Mobile,
      customerId: userObject?.CustomerID,
      metadata: {
        customFields: [copiedValues],
      },
    };

    dispatch(initiateTransactionAsync(variables))
      .unwrap()
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
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
              readOnly={selectedBillerProduct?.isAmountFixed}
              value={selectedBillerProduct?.amount}
              register={register("amount", {
                required: "THis Field is required",
              })}
            />
          </div>
        ) : (
          <>
            {selectedBillerProduct?.customFields &&
              selectedBillerProduct?.customFields.map((product) => {
                // {
                //   console.log(product.type);
                // }
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

                            // pattern:
                            //   product?.type === "alphanumeric"
                            //     ? /^[0-9]+$/
                            //     : /[^A-Za-z0-9]+/,
                            min: 3,
                          })}
                          error={errors?.[product?.variable_name]?.message}
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
                        error={errors?.[product?.variable_name]?.message}
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
            isLoading={initiateTransactionLoading}
          />
        </div>
      </form>
    </div>
  );
};

export { BillPaymentForm };
