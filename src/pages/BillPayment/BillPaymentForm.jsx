import React, { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { toast } from "react-toastify";
import CurrencyFormat from "react-currency-format";

import { Button, FluentSelect, SavingsInput } from "../../atoms";
import {
  initiateTransactionAsync,
  validateBillerProductAsync,
} from "../../slices/billPayment";
import ModalPopup from "../../components/ModalPopup";
import { BillPaymentModal } from "./BillPaymentModal";
import ReactDatePicker from "react-datepicker";
import { DatePicker } from "../../atoms/Datepicker";

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

  const [selectedBillerProduct, setSelectedBillerProduct] = useState();
  const [billPaymentProductId, setBillPaymentProductId] = useState("");
  const [paymentModal, setPaymentModal] = useState(false);
  const [response, setResponse] = useState();

  const { control, handleSubmit, register, reset, formState, getValues } =
    useForm({});
  const { errors } = formState;

  const toggleBillModal = () => {
    setPaymentModal(!paymentModal);
  };

  const randomNumber = () => {
    const todayDate = new Date();

    var newDateOptions = {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    };
    const formattedDate = todayDate.toLocaleString("en-US", newDateOptions);
    const removeInstancesOfSlash = formattedDate.replace(/[/]/g, "");
    const randomSixDigits = Math.floor(100000 + Math.random() * 900000);
    return removeInstancesOfSlash + randomSixDigits;
  };

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
        billPaymentProductId: selectedBillerProduct?.value,
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
    // deep copy the values object
    let copiedValues = JSON.parse(JSON.stringify(values));

    delete copiedValues.amount;
    // delete copiedValues.billPaymentProductId;

    const valuesObject = () => {
      let valuesArray = [];
      let customValues;

      Object.keys(copiedValues).forEach(function (key) {
        customValues = {
          variable_name: key,
          value: copiedValues[key],
        };
        valuesArray.push(customValues);
      });
      return valuesArray;
    };

    const variables = {
      billPaymentProductId: billPaymentProductId,
      amount: selectedBillerProduct?.isAmountFixed
        ? selectedBillerProduct?.amount
        : Number(values?.amount.slice(1)),
      transactionRef: randomNumber(),
      name: userObject?.Firstname + " " + userObject?.Surname,
      email: userObject?.Email,
      phoneNumber: userObject?.Mobile,
      customerId: userObject?.Email,
      metadata: {
        customFields: valuesObject(),
      },
    };

    console.log(variables);

    // dispatch(initiateTransactionAsync(variables))
    //   .unwrap()
    //   .then((res) => {
    //     if (res?.status) {
    //       toggleBillModal();
    //       setResponse(res?.data);
    //     }
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
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
        {/* {selectedBillerProduct?.customFields.length === 0 ? ( */}
        {/* <div className="mt-4">
            <SavingsInput
              label="Amount"
              placeholder="Amount"
              readOnly={selectedBillerProduct?.isAmountFixed}
              value={selectedBillerProduct?.amount}
              register={register("amount", {
                required: "THis Field is required",
              })}
            />
          </div> */}
        {/* // ) : ( */}
        <>
          {selectedBillerProduct?.customFields &&
            selectedBillerProduct?.customFields.map((product) => {
              return (
                <div className="mt-4" key={product?.variable_name}>
                  {product?.selectOptions?.length === 0 ? (
                    <div>
                      {product?.type !== "date" ? (
                        <>
                          {selectedBillerProduct?.isAmountFixed && (
                            <SavingsInput
                              label="Amount"
                              className="mb-4"
                              placeholder="Amount"
                              readOnly={true}
                              value={selectedBillerProduct?.amount}
                              register={register("amount", {
                                required: "THis Field is required",
                              })}
                            />
                          )}

                          <SavingsInput
                            label={product?.display_name}
                            placeholder={product?.display_name}
                            // readOnly={selectedBillerProduct?.isAmountFixed}
                            // value={
                            //   selectedBillerProduct?.isAmountFixed === true
                            //     ? selectedBillerProduct?.amount
                            //     : ""
                            // }
                            register={register(product?.variable_name, {
                              onBlur: (e) => handleValidation(e, product),
                              required: product?.required
                                ? "This field is required"
                                : false,

                              validate: (value) => {
                                if (product?.type === "text") {
                                  return (
                                    (product?.type === "text" &&
                                      /^[a-zA-Z\s]*$/.test(value)) ||
                                    "This field accepts text only"
                                  );
                                } else if (product?.type === "numeric") {
                                  return (
                                    (product?.type === "numeric" &&
                                      /^[0-9]+$/.test(value)) ||
                                    "This field accepts number only"
                                  );
                                } else if (product?.type === "alphanumeric") {
                                  return (
                                    (product?.type === "alphanumeric" &&
                                      /^[a-z0-9]+$/i.test(value)) ||
                                    "This field accepts alphanumeric values only"
                                  );
                                } else if (product?.type === "alphabetic") {
                                  return (
                                    (product?.type === "alphabetic" &&
                                      /^[a-zA-Z]+$/g.test(value)) ||
                                    "This field accepts text only"
                                  );
                                }
                              },
                            })}
                            error={errors?.[product?.variable_name]?.message}
                          />
                          {product?.validation &&
                            validateBillerProductLoading && (
                              <span className="text-sm text-red-500 font-medium">
                                Validating...
                              </span>
                            )}
                        </>
                      ) : (
                        <DatePicker
                          label={product?.display_name}
                          name={product?.variable_name}
                          control={control}
                          error={errors?.[product?.variable_name]?.message}
                          rules={{
                            required: product?.required
                              ? "This field is required"
                              : false,
                          }}
                        />
                      )}
                    </div>
                  ) : (
                    <FluentSelect
                      name={product?.variable_name}
                      control={control}
                      label={product?.display_name}
                      isMulti={product?.type === "multiselect"}
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
        {/* // )} */}

        {selectedBillerProduct?.customFields &&
        selectedBillerProduct?.customFields
          .map((product) => product?.display_name)
          .includes("AMOUNT") ? (
          ""
        ) : (
          <div className="mt-4">
            {selectedBillerProduct && !selectedBillerProduct?.isAmountFixed && (
              <>
                <label
                  htmlFor="amount"
                  className={`text-sm font-normal text-blueTwo`}
                >
                  Amount
                </label>
                <div className="border border-blueTwo/50 rounded-[20px] w-full py-3.5 placeholder-blueThree text-sm pl-[10px] text-blueTwo bg-blueTwo/20">
                  <Controller
                    control={control}
                    name="amount"
                    defaultValue=""
                    placeholder="Amount"
                    rules={{ required: "Amount is Required" }}
                    render={({ field: { onChange, ref, name, value } }) => (
                      <div className="placeholder:text-blueTwo">
                        <CurrencyFormat
                          style={{
                            backgroundColor: "3B58A8",
                          }}
                          displayType={"input"}
                          thousandSeparator={true}
                          placeholder="₦0.0"
                          name={name}
                          value={value}
                          prefix={"₦"}
                          onChange={onChange}
                        />
                      </div>
                    )}
                  />
                </div>
              </>
            )}
            {errors.amount && (
              <span className="text-red-500 text-xs">
                {errors?.amount?.message}
              </span>
            )}
          </div>
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

      <ModalPopup
        modalWidth="400px"
        modalHeight="450px"
        children={
          <BillPaymentModal
            response={response}
            toggleBillModal={toggleBillModal}
          />
        }
        isOpen={paymentModal}
      />
    </div>
  );
};

export { BillPaymentForm };
