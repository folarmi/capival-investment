import React from "react";
import { useForm } from "react-hook-form";
import { useLocation } from "react-router-dom";
import { Button, FluentSelect, SavingsInput } from "../../../../atoms";
import { AmountInput } from "../../../../atoms/AmountInput";

const LockedSavingsForm = () => {
  const { state } = useLocation();

  console.log(state);

  const { register, handleSubmit, formState, control } = useForm();

  const errors = formState;

  const submitForm = (values) => {
    console.log(values);
  };

  return (
    <div className="mt-4 lg:mt-10 m-auto w-[90%] md:w-[80%] lg:w-[60%]">
      <form className="mt-4 px-2 lg:px-10" onSubmit={handleSubmit(submitForm)}>
        <SavingsInput
          placeholder="Savings Title"
          label="Savings Title"
          register={register("title", {
            required: "Savings Title is required",
          })}
          error={errors?.title?.message}
        />

        <AmountInput
          control={control}
          name="frequency_amount"
          label="Amount to lock"
          placeholder="N 10,000.00"
          error={errors?.frequency_amount?.message}
          rules={{ required: "Amount is required" }}
        />

        <FluentSelect
          control={control}
          name="savings_frequency"
          //   options={savingsFrequency}
          label="Payback Date"
          placeholder="31st Dec 2022"
          //   customOnChange={getSelectedFrequency}
          error={errors?.savings_frequency?.message}
          rules={{
            required: "Savings Frequency is required",
          }}
        />

        <FluentSelect
          control={control}
          name="primary_source"
          //   options={allBanksData}
          label="Select Primary Source"
          //   isLoading={getAllBanksLoading}
          placeholder="Wallet"
          className="mb-6"
          error={errors?.primary_source?.message}
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
