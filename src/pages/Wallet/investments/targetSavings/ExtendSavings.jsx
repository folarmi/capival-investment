import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { Button, FluentSelect, SavingsInput } from "../../../../atoms";
import { AmountInput } from "../../../../atoms/AmountInput";
import { daysOfTheMonth, daysOfTheWeek } from "../../../../utils/data";
import { getSavingsFrequencyAsync } from "../../../../slices/utils";
import { toast } from "react-toastify";
import { extendTargetSavingsAsync } from "../../../../slices/investments";

const ExtendSavings = ({ toggleExtendModal, savingsId }) => {
  const dispatch = useDispatch();
  const { getSavingsFrequencyLoading, savingsFrequencyData } = useSelector(
    (state) => state.utils
  );
  const { extendTargetSavingsLoading } = useSelector(
    (state) => state.investments
  );
  const { handleSubmit, formState, control, register, reset } = useForm();
  const { errors } = formState;

  const [selectedSavingsFrequency, setSelectedSavingsFrequency] =
    useState("Daily");

  const savingsFrequency =
    savingsFrequencyData &&
    savingsFrequencyData?.map((freq) => {
      return {
        value: freq,
        label: freq,
      };
    });

  const getSelectedFrequency = (item) => {
    setSelectedSavingsFrequency(item?.value);
  };

  useEffect(() => {
    dispatch(getSavingsFrequencyAsync());
  }, []);

  const submitForm = (values) => {
    let formattedTargetAmount = values?.target_amount.slice(1);
    let formattedFrequencyAmount = values?.frequency_amount.slice(1);

    const variables = {
      target_amount: formattedTargetAmount,
      savings_frequency: values?.savings_frequency,
      day_of_the_month: values?.day_of_the_month || "",
      day_of_the_week: values?.day_of_the_week || "",
      frequency_amount: formattedFrequencyAmount,
      password: values?.password,
    };
    // console.log(variables);
    dispatch(extendTargetSavingsAsync(savingsId, variables))
      .unwrap()
      .then((res) => {
        if (res?.status) {
          toast(res?.message);
        }
      })
      .catch((err) => {
        toast.error(err?.message);
        // reset();
      });
  };

  return (
    <div className="px-10">
      <div className="flex justify-end mt-4" onClick={toggleExtendModal}>
        <img src="/assets/icons/closeTwo.svg" alt="closeButton" />
      </div>
      <p className="text-2xl py-2 text-blueTwo font-semibold uppercase">
        Increase Target Amount
      </p>

      <form onSubmit={handleSubmit(submitForm)}>
        <AmountInput
          control={control}
          name="target_amount"
          label="New Target Amount"
          placeholder="N 10,000.00"
          error={errors?.target_amount?.message}
          rules={{ required: "Amount is required" }}
        />

        <FluentSelect
          control={control}
          name="savings_frequency"
          options={savingsFrequency}
          label="Change Savings Frequency"
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
          label="Frequency Amount"
          placeholder="N 10,000.00"
          error={errors?.frequency_amount?.message}
          rules={{ required: "Frequency amount is required" }}
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

        <SavingsInput
          label="For Security Reasons, Please Enter Your Password"
          register={register("password", {
            required: "Password is required",
          })}
          className="mt-4"
          //   type="password"
          error={errors?.password?.message}
        />

        <div className="w-full md:w-[100%] mt-6 m-auto">
          <Button
            buttonText="Update"
            className="rounded-xl mb-10"
            size="lg"
            isLoading={extendTargetSavingsLoading}
          />
        </div>
      </form>
    </div>
  );
};

export { ExtendSavings };
