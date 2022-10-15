import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { Button, FluentSelect, SavingsInput } from "../../../../atoms";
import { AmountInput } from "../../../../atoms/AmountInput";
import {
  getFundingSourceAsync,
  payBackDateAsync,
} from "../../../../slices/utils";
// import { testPaybackDate } from "../../../../utils/data";

const LockedSavingsForm = () => {
  const { state } = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {
    payBackDateLoading,
    payBackDate,
    getFundingSourceLoading,
    fundingSource,
  } = useSelector((state) => state.utils);

  // {
  //   "maturity_date": "20-10-2022",
  //   "interest": 0.136986301369863,
  //   "days": "10",
  //   "display_name": "[10] 20\/Oct\/2022 - 0.14%"
  // },

  const { register, handleSubmit, formState, control } = useForm();
  const { errors } = formState;

  const [selectedPayBackDate, setSelectedPayBackDate] = useState("");

  const getSelected = (item) => {
    setSelectedPayBackDate(item);
  };

  const paybackDateData =
    Array.isArray(payBackDate?.data) &&
    payBackDate?.data &&
    payBackDate?.data?.map((date) => {
      return {
        value: date?.maturity_date,
        interest: date?.interest,
        days: date?.days,
        label: date?.display_name,
      };
    });

  console.log(payBackDate);
  const sourceOfFundData =
    Array.isArray(fundingSource) &&
    fundingSource &&
    fundingSource?.map((source) => {
      return {
        value: source.value,
        label: source.displayName,
      };
    });

  const submitForm = (values) => {
    navigate(
      "/dashboard/wallet/investments/saving-type/locked-savings/form/preview",
      {
        state: {
          formValues: values,
          selectedCat: selectedPayBackDate,
        },
      }
    );
  };

  useEffect(() => {
    dispatch(payBackDateAsync(state?.id));
    dispatch(getFundingSourceAsync());
  }, []);

  return (
    <div className="mt-4 lg:mt-10 m-auto w-[90%] md:w-[80%] lg:w-[60%]">
      <form className="mt-4 px-2 lg:px-10" onSubmit={handleSubmit(submitForm)}>
        <SavingsInput
          placeholder="Savings Title"
          label="Savings Title"
          register={register("savings_title", {
            required: "Savings Title is required",
          })}
          error={errors?.savings_title?.message}
        />

        <AmountInput
          control={control}
          name="amount"
          label="Amount to lock"
          placeholder="N 10,000.00"
          error={errors?.amount?.message}
          rules={{ required: "Amount is required" }}
        />

        <FluentSelect
          control={control}
          name="maturity_date"
          options={paybackDateData}
          label="Payback Date"
          isLoading={payBackDateLoading}
          customOnChange={getSelected}
          placeholder="31st Dec 2022"
          error={errors?.maturity_date?.message}
          rules={{
            required: "Payback Date is required",
          }}
        />

        <FluentSelect
          control={control}
          name="source"
          options={sourceOfFundData}
          label="Select Primary Source"
          isLoading={getFundingSourceLoading}
          placeholder="Wallet"
          className="mb-6"
          error={errors?.source?.message}
          rules={{
            required: "Primary Source is required",
          }}
        />

        <div className="w-full mt-14 md:w-[40%] m-auto">
          <Button
            buttonText="Lock Savings"
            className="rounded-xl mb-10"
            size="lg"
            // isLoading={createLoanIsLoading}
          />
        </div>
      </form>
    </div>
  );
};

export { LockedSavingsForm };
