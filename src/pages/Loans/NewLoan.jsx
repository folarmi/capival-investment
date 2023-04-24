import React, { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import CurrencyFormat from "react-currency-format";

import { Button, FluentSelectTwo, SavingsInput } from "../../atoms";
import {
  getAllBanksAsync,
  getBankStatementAsync,
  getLoanTenureAsync,
  getLoanTypesAsync,
  getRepaymentChannelsAsync,
} from "../../slices/utils";
import { createLoanAsync } from "../../slices/loan";
import { toast } from "react-toastify";
import { validateInterAccountAsync } from "../../slices/transactionHistory";

const NewLoan = () => {
  const dispatch = useDispatch();
  const {
    loanTypes,
    loanTenure,
    repaymentChannels,
    bankStatementType,
    allBanks,
    getBankStatementLoading,
    getLoanTypesLoading,
    getRepaymentChannelsLoading,
    getLoanTenureLoading,
    getAllBanksLoading,
  } = useSelector((state) => state?.utils);
  const { createLoanIsLoading } = useSelector((state) => state?.loans);
  const { isInterAccountValidated, validateInterAccountLoading } = useSelector(
    (state) => state?.transactionHistory
  );

  const [showDisbursement, setShowDisbursement] = useState(false);
  const [showMbs, setShowMbs] = useState(false);

  const {
    register,
    handleSubmit,
    formState,
    reset,
    control,
    getValues,
    setValue,
  } = useForm({
    defaultValues: {
      disbursement_account_name: isInterAccountValidated?.AccountName,
    },
  });
  const { errors } = formState;

  // console.log("errors", errors);

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

    dispatch(createLoanAsync(variables))
      .unwrap()
      .then((res) => {
        if (res?.status === true) {
          console.log(res?.status);
          toast(res?.message);
          reset();
        }
      })
      .catch((err) => {
        toast.error(err?.message);
        reset();
      });
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

  const getLoanType = (item) => {
    if (item.disburse === 0) {
      setShowDisbursement(true);
    } else {
      setShowDisbursement(false);
    }
  };

  const getStatementType = (item) => {
    if (item.value === "mbs") {
      setShowMbs(true);
    } else {
      setShowMbs(false);
    }
  };

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
    setValue("disbursement_account_name", isInterAccountValidated?.AccountName);
  }, [isInterAccountValidated]);

  return (
    <div className="mt-4 lg:mt-8">
      <p className="font-normal text-xl text-blueTwo text-center pb-2 uppercase">
        Loan Details
      </p>

      <form
        onSubmit={handleSubmit(submitForm)}
        className="rounded-xl m-auto w-[90%] md:w-[80%] lg:w-[50%]"
      >
        <FluentSelectTwo
          control={control}
          name="loan_type_id"
          options={loanTypesData}
          label="Loan type"
          isLoading={getLoanTypesLoading}
          placeholder="Select Loan Type"
          error={errors?.loan_type_id?.message}
          customOnChange={getLoanType}
          rules={{ required: "Loan Type is required" }}
        />

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
          {errors.amount && (
            <span className="text-red-500 text-xs">
              {errors?.amount?.message}
            </span>
          )}
        </div>

        <FluentSelectTwo
          control={control}
          name="tenor"
          options={loanTenureData}
          isLoading={getLoanTenureLoading}
          label="Tenure"
          placeholder="O month(s)"
          error={errors?.tenor?.message}
          rules={{ required: "Tenure  is required" }}
        />

        <FluentSelectTwo
          control={control}
          name="repayment_channel"
          options={repaymentChannelData}
          label="Select Repayment Method"
          isLoading={getRepaymentChannelsLoading}
          placeholder="Standard repayment"
          error={errors?.repayment_channel?.message}
          rules={{ required: "Repayment Method is required" }}
        />

        <FluentSelectTwo
          control={control}
          name="statement_type"
          isLoading={getBankStatementLoading}
          options={bankStatementData}
          label="Bank Statement type"
          placeholder="My bank statement"
          error={errors?.statement_type?.message}
          rules={{ required: "Statement Type is required" }}
          customOnChange={getStatementType}
        />

        {showMbs && (
          <>
            <div className="mt-4">
              <SavingsInput
                placeholder="01234-56"
                label="Ticket Id"
                register={register("mbs_ticket_no", {
                  required: "Ticket ID is required",
                })}
                error={errors?.mbs_ticket_no?.message}
              />
            </div>

            <div className="mt-4">
              <SavingsInput
                placeholder="111111"
                label="Ticket Password"
                register={register("mbs_ticket_password", {
                  required: "Ticket Password is required",
                })}
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
            <FluentSelectTwo
              control={control}
              name="disbursement_bank_code"
              options={allBanksData}
              label="Select Bank"
              isLoading={getAllBanksLoading}
              placeholder="Access bank"
              error={errors?.disbursement_bank_code?.message}
              rules={{
                required: "Bank Name is required",
              }}
            />

            <div className="mt-4">
              <SavingsInput
                placeholder="0123456789"
                label="Account Number"
                register={register("disbursement_account_no", {
                  onChange: (e) => handleValidateAccount(e),
                  required: "Account Number is Required",
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
