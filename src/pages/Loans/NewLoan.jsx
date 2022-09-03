import React, { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import CurrencyFormat from "react-currency-format";

// import * as Yup from "yup";
import Select from "react-select";
// import { yupResolver } from "@hookform/resolvers/yup";

import { Button, SavingsInput } from "../../atoms";
import {
  getAllBanksAsync,
  getBankStatementAsync,
  getLoanTenureAsync,
  getLoanTypesAsync,
  getRepaymentChannelsAsync,
} from "../../slices/utils";
import { createLoanAsync } from "../../slices/loan";
import { toast } from "react-toastify";
import { colourStyles } from "../../utils/HelperFunctions";
import { validateInterAccountAsync } from "../../slices/transactionHistory";

const NewLoan = () => {
  const dispatch = useDispatch();
  const {
    loanTypes,
    loanTenure,
    repaymentChannels,
    bankStatementType,
    allBanks,
    getLoanTypesLoading,
  } = useSelector((state) => state?.utils);
  const { createLoanIsLoading } = useSelector((state) => state?.loans);
  const { isInterAccountValidated, validateInterAccountLoading } = useSelector(
    (state) => state?.transactionHistory
  );

  const [showDisbursement, setShowDisbursement] = useState(false);
  const [showMbs, setShowMbs] = useState(false);

  // const validationSchema = Yup.object().shape({
  //   loan_type_id: Yup.string().required("Loan enter a password"),
  // });

  const { register, handleSubmit, formState, reset, control, getValues } =
    useForm({
      defaultValues: {
        disbursement_account_name: isInterAccountValidated?.AccountName,
      },
      // resolver: yupResolver(validationSchema),
    });
  const { errors } = formState;

  const submitForm = (values) => {
    let formattedAmount = values?.amount.slice(1);
    const variables = {
      loan_type_id: values.loan_type_id,
      loan_amount: formattedAmount,
      tenor: values?.tenor,
      repayment_channel: values?.repayment_channel,
      statement_type: values?.statement_type,
      mbs_ticket_no: values?.mbs_ticket_no,
      mbs_ticket_password: values?.mbs_ticket_password,
      disbursement_account_no: values?.disbursement_account_no || "",
      disbursement_account_name: values?.disbursement_account_name || "",
      disbursement_bank_code: values?.disbursement_bank_code || "",
    };

    console.log(values);

    // dispatch(createLoanAsync(variables))
    //   .unwrap()
    //   .then((res) => {
    //     if (res?.status === true) {
    //       console.log(res?.status);
    //       toast(res?.message);
    //       reset();
    //     }
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //     toast.error(err?.message);
    //     reset();
    //   });
  };

  useEffect(() => {
    dispatch(getLoanTypesAsync());
    dispatch(getLoanTenureAsync());
    dispatch(getRepaymentChannelsAsync());
    dispatch(getBankStatementAsync());
    dispatch(getAllBanksAsync());
  }, []);

  const loanTypesData =
    loanTypes &&
    loanTypes?.map((loanType) => {
      return {
        value: loanType?.id,
        label: loanType?.name,
        disburse: loanType?.flex_disbursement,
      };
    });

  const loanTenureData =
    loanTenure &&
    loanTenure?.map((month) => {
      return {
        value: month,
        label: month,
      };
    });

  const repaymentChannelData =
    repaymentChannels &&
    repaymentChannels?.map((channel) => {
      return {
        value: channel,
        label: channel,
      };
    });

  const bankStatementData =
    bankStatementType &&
    bankStatementType?.map((item) => {
      return {
        value: item?.code,
        label: item?.name,
      };
    });

  const allBanksData =
    allBanks &&
    allBanks?.map((bank) => {
      return {
        value: bank?.sortcode,
        label: bank?.bank,
      };
    });

  const handleValidateAccount = async (e) => {
    if (e.target.value.length === 10) {
      const variables = {
        account_no: e.target.value,
        bank_code: getValues("disbursement_bank_code"),
      };
      await dispatch(validateInterAccountAsync(variables))
        .unwrap()
        .then((res) => {
          if (res?.status) {
            toast(res?.message);
            // reset();
          }
        })
        .catch((err) => {
          toast.error(err?.message);
          reset();
        });
    }
  };

  useEffect(() => {
    const defaultValues = {
      disbursement_account_name: isInterAccountValidated?.AccountName,
    };
    reset(defaultValues);
  }, [isInterAccountValidated, reset]);

  return (
    <div className="mt-4 lg:mt-8">
      <p className="font-normal text-xl text-blueTwo text-center pb-2 uppercase">
        Loan Details
      </p>

      <form
        onSubmit={handleSubmit(submitForm)}
        className="rounded-xl m-auto w-[90%] md:w-[80%] lg:w-[50%]"
      >
        <div>
          <Controller
            control={control}
            name="loan_type_id"
            defaultValue=""
            render={({ field: { onChange, onBlur, value, ref } }) => (
              <div>
                <label className="text-sm font-normal text-blueTwo">
                  Loan Type
                </label>
                <Select
                  onBlur={onBlur}
                  checked={value}
                  inputRef={ref}
                  options={loanTypesData}
                  value={loanTypesData.find((c) => c.value === value)}
                  onChange={(val) => {
                    onChange(val.value);
                    if (val.disburse === 0) {
                      setShowDisbursement(true);
                    } else {
                      setShowDisbursement(false);
                    }
                  }}
                  isLoading={getLoanTypesLoading}
                  placeholder="Select Loan Type"
                  styles={colourStyles}
                />
              </div>
            )}
          />
        </div>

        <div className="mt-4">
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
          {errors.amount && (
            <span className="text-red-500 text-xs">
              {errors?.amount?.message}
            </span>
          )}
        </div>

        <div className="mt-4">
          <Controller
            control={control}
            name="tenor"
            render={({ field: { onChange, onBlur, value, ref } }) => (
              <div>
                <label className="text-sm font-normal text-blueTwo">
                  Tenure
                </label>
                <Select
                  onBlur={onBlur}
                  onChange={(val) => onChange(val.value)}
                  value={loanTenureData.find((c) => c.value === value)}
                  checked={value}
                  inputRef={ref}
                  options={loanTenureData}
                  placeholder="O month(s)"
                  styles={colourStyles}
                />
              </div>
            )}
          />
        </div>

        <div className="mt-4">
          <Controller
            control={control}
            name="repayment_channel"
            render={({ field: { onChange, onBlur, value, ref } }) => (
              <div>
                <label className="text-sm font-normal text-blueTwo">
                  Select Repayment Method
                </label>
                <Select
                  onBlur={onBlur}
                  onChange={(val) => onChange(val.value)}
                  value={repaymentChannelData.find((c) => c.value === value)}
                  checked={value}
                  inputRef={ref}
                  options={repaymentChannelData}
                  placeholder="Standard repayment"
                  styles={colourStyles}
                />
              </div>
            )}
          />
        </div>

        <div className="mt-4">
          <Controller
            control={control}
            name="statement_type"
            render={({ field: { onChange, onBlur, value, ref } }) => (
              <div>
                <label className="text-sm font-normal text-blueTwo">
                  Bank Statement type
                </label>
                <Select
                  onBlur={onBlur}
                  onChange={(val) => {
                    onChange(val.value);
                    if (val.value === "mbs") {
                      setShowMbs(true);
                    } else {
                      setShowMbs(false);
                    }
                  }}
                  value={bankStatementData.find((c) => c.value === value)}
                  checked={value}
                  inputRef={ref}
                  options={bankStatementData}
                  placeholder="My bank statement"
                  styles={colourStyles}
                />
              </div>
            )}
          />
        </div>

        {showMbs && (
          <>
            <div className="mt-4">
              <SavingsInput
                placeholder="01234-56"
                label="Ticket Id"
                register={register("mbs_ticket_no")}
                error={errors?.mbs_ticket_no?.message}
              />
            </div>

            <div className="mt-4">
              <SavingsInput
                placeholder="111111"
                label="Ticket Password"
                register={register("mbs_ticket_password")}
                error={errors?.mbs_ticket_password?.message}
              />
            </div>
          </>
        )}

        {showDisbursement && (
          <div className="mt-10">
            <p className="font-normal text-xl text-blueTwo text-center pb-6 uppercase">
              Disbursement Details
            </p>

            <div className="">
              <Controller
                control={control}
                name="disbursement_bank_code"
                render={({ field: { onChange, onBlur, value, ref } }) => (
                  <div>
                    <label className="text-sm font-normal text-blueTwo">
                      Select Bank
                    </label>
                    <Select
                      onBlur={onBlur}
                      onChange={(val) => onChange(val.value)}
                      value={allBanksData.find((c) => c.value === value)}
                      checked={value}
                      inputRef={ref}
                      options={allBanksData}
                      placeholder="Access Bank"
                      styles={colourStyles}
                    />
                  </div>
                )}
              />
            </div>

            <div className="mt-4">
              <SavingsInput
                placeholder="0123456789"
                label="Account Number"
                register={register("disbursement_account_no", {
                  onChange: (e) => handleValidateAccount(e),
                })}
                error={errors?.disbursement_account_no?.message}
              />
            </div>

            <div className="mt-4">
              <SavingsInput
                placeholder="Ayobami olagoke"
                label="Account Name"
                readOnly
                register={register("disbursement_account_name")}
                error={errors?.disbursement_account_name?.message}
              />
              {validateInterAccountLoading && (
                <span className="text-sm text-red-500 font-medium">
                  Validating...
                </span>
              )}
            </div>
          </div>
        )}

        <div className="w-full mt-10 md:w-[40%] m-auto">
          <Button
            buttonText="Apply Now"
            className="rounded-xl mb-10"
            size="lg"
            isLoading={createLoanIsLoading}
          />
        </div>
      </form>
    </div>
  );
};

export { NewLoan };
