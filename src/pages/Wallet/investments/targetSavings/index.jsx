import React, { useEffect, useState } from "react";
import { Button, FluentSelect, SavingsInput } from "../../../../atoms";
import { useForm } from "react-hook-form";
import { AmountInput } from "../../../../atoms/AmountInput";
import { DatePicker } from "../../../../atoms/Datepicker";
import { ToggleButton } from "../../../../atoms/ToggleButton";
import { daysOfTheMonth, daysOfTheWeek } from "../../../../utils/data";
import { useDispatch, useSelector } from "react-redux";
import {
  getFundingSourceAsync,
  getSavingsFrequencyAsync,
  getTargetCategoriesAsync,
  preferredTimeAsync,
} from "../../../../slices/utils";

const TargetSavings = () => {
  const dispatch = useDispatch();
  const {
    getTargetCategoriesLoading,
    targetCategories,
    getSavingsFrequencyLoading,
    savingsFrequencyData,
    getFundingSourceLoading,
    fundingSource,
    preferredTimeLoading,
    preferredTime,
  } = useSelector((state) => state.utils);

  const [selectedSavingsFrequency, setSelectedSavingsFrequency] =
    useState("Daily");
  const { register, handleSubmit, formState, control } = useForm();

  const { errors } = formState;

  const getSelectedFrequency = (item) => {
    setSelectedSavingsFrequency(item?.value);
  };

  const targetCategoriesData =
    targetCategories &&
    targetCategories?.map((category) => {
      return {
        value: category,
        label: category,
      };
    });

  const savingsFrequency =
    savingsFrequencyData &&
    savingsFrequencyData?.map((freq) => {
      return {
        value: freq,
        label: freq,
      };
    });

  const sourceOfFundData =
    fundingSource &&
    fundingSource?.map((source) => {
      return {
        value: source.value,
        label: source.displayName,
      };
    });

  const preferredTimeData =
    preferredTime &&
    preferredTime?.map((time) => {
      return {
        value: time.value,
        label: time.displayName,
      };
    });

  const submitForm = (values) => {
    console.log(values);
  };

  // console.log(preferredTime);

  useEffect(() => {
    dispatch(getTargetCategoriesAsync());
    dispatch(getSavingsFrequencyAsync());
    dispatch(getFundingSourceAsync());
    dispatch(preferredTimeAsync());
  }, []);

  return (
    <div className="mt-4 lg:mt-10 m-auto w-[90%] md:w-[80%] lg:w-[60%]">
      <p className="font-bold text-lg text-blueTwo text-center pb-2">
        Target Savings
      </p>

      <div className="bg-blueEight rounded-2xl text-center">
        <p className="text-sm text-blueTwo font-medium py-6">
          Setup a new savings target and get paid everyday (@9% p.a) to reach
          your goals faster.
        </p>
      </div>

      <form className="mt-4 px-2 lg:px-10" onSubmit={handleSubmit(submitForm)}>
        <SavingsInput
          placeholder="House Rent"
          label="Savings Title"
          register={register("title", {
            required: "Savings Title is required",
          })}
          error={errors?.title?.message}
        />

        <FluentSelect
          control={control}
          name="category"
          options={targetCategoriesData}
          label="Select Category"
          isLoading={getTargetCategoriesLoading}
          placeholder="Rent"
          error={errors?.category?.message}
          rules={{ required: "Category is required" }}
        />

        <AmountInput
          control={control}
          name="target_amount"
          label="Target Amount"
          placeholder="N 10,000.00"
          error={errors?.target_amount?.message}
          rules={{ required: "Target Amount is required" }}
        />

        <FluentSelect
          control={control}
          name="savings_frequency"
          options={savingsFrequency}
          label="Savings Frequency"
          isLoading={getSavingsFrequencyLoading}
          placeholder="Daily"
          customOnChange={getSelectedFrequency}
          error={errors?.savings_frequency?.message}
          rules={{
            required: "Savings Frequency is required",
          }}
        />

        <AmountInput
          control={control}
          name="frequency_amount"
          label="Amount to be saved frequently"
          placeholder="N 10,000.00"
          error={errors?.frequency_amount?.message}
          rules={{ required: "This field is required" }}
        />

        {selectedSavingsFrequency !== "Daily" && (
          <FluentSelect
            control={control}
            name={
              selectedSavingsFrequency === "Weekly"
                ? "day_of_the_week"
                : "day_of_the_month"
            }
            options={
              selectedSavingsFrequency === "Weekly"
                ? daysOfTheWeek
                : daysOfTheMonth
            }
            label={
              selectedSavingsFrequency === "Weekly"
                ? "Day of the week"
                : "Day of the Month"
            }
            placeholder="Monday"
            error={
              errors?.[
                selectedSavingsFrequency === "Weekly"
                  ? "day_of_the_week"
                  : "day_of_the_month"
              ]?.message
            }
            rules={{
              required: `Day of the ${
                selectedSavingsFrequency === "Weekly" ? "week" : "month"
              } is required`,
            }}
          />
        )}

        <FluentSelect
          control={control}
          name="preferred_time"
          options={preferredTimeData}
          label="Preferred Time"
          isLoading={preferredTimeLoading}
          placeholder="Monday"
          error={errors?.preferred_time?.message}
          rules={{
            required: "Preferred Time is required",
          }}
        />

        <DatePicker
          label="Set Start Date"
          name="start_date"
          control={control}
          className="mt-4"
          error={errors?.start_date?.message}
          rules={{ required: "Start Date  is required" }}
        />

        <DatePicker
          label="Withdrawal Date"
          name="withdrawal_date"
          control={control}
          className="mt-4"
          error={errors?.withdrawal_date?.message}
          rules={{ required: "Withdrawal Date  is required" }}
        />

        <FluentSelect
          control={control}
          name="primary_source"
          options={sourceOfFundData}
          label="Select Primary Source"
          isLoading={getFundingSourceLoading}
          placeholder="Wallet"
          className="mb-6"
          error={errors?.primary_source?.message}
          rules={{
            required: "Primary Source is required",
          }}
        />

        <ToggleButton
          toggleText="I hereby agree that if i will forfeit the interest accrued to
this savings if I fail to meet this target Amount (N 1000,000.00) 
by the set withdrawal data"
        />

        <ToggleButton
          toggleText="I hereby agree that if i will forfeit the interest accrued to
this savings if I fail to meet this target Amount (N 1000,000.00) 
by the set withdrawal data"
        />

        <div className="w-full mt-14 md:w-[40%] m-auto">
          <Button
            buttonText="Create Target"
            className="rounded-xl mb-10"
            size="lg"
            // isLoading={createLoanIsLoading}
          />
        </div>
      </form>
    </div>
  );
};

export { TargetSavings };
