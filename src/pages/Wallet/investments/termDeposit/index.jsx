import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Button, FluentSelectTwo, SavingsInput } from "../../../../atoms";
import { AmountInput } from "../../../../atoms/AmountInput";
import {
  getInterestRateAsync,
  getTermDepositTenureAsync,
  resetInterestRates,
} from "../../../../slices/investments";

const TermDeposit = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {
    getInterestRateLoading,
    interestRates,
    termDepositTenure,
    getTermDepositTenureLoading,
  } = useSelector((state) => state.investments);
  const {
    register,
    handleSubmit,
    formState,
    control,
    getValues,
    setValue,
    watch,
  } = useForm({
    defaultValues: {
      rate: interestRates && `${interestRates?.rate}% per annum`,
    },
  });
  const { errors } = formState;

  const termDepositTenureData =
    Array.isArray(termDepositTenure) &&
    termDepositTenure &&
    termDepositTenure?.map((day) => {
      return {
        value: day?.display_value,
        label: day?.display_name,
      };
    });

  const getInterestRateData = () => {
    console.log(getValues("tenor"));

    let formattedAmount = getValues("amount").slice(1);
    const variables = {
      amount: formattedAmount,
      tenor: getValues("tenor"),
    };
    dispatch(getInterestRateAsync(variables))
      .unwrap()
      .then((res) => {
        if (res?.status) {
          toast(res?.message);
        }
      })
      .catch((err) => {
        toast.error(err?.message);
      });
  };

  const getInterestRateDataForAmount = () => {
    console.log(getValues("tenor"));
    if (getValues("tenor") !== undefined) {
      let formattedAmount = getValues("amount").slice(1);
      const variables = {
        amount: formattedAmount,
        tenor: getValues("tenor"),
      };
      dispatch(getInterestRateAsync(variables))
        .unwrap()
        .then((res) => {
          if (res?.status) {
            toast(res?.message);
          }
        })
        .catch((err) => {
          toast.error(err?.message);
        });
    }
  };

  const submitForm = (values) => {
    navigate("/dashboard/wallet/investments/saving-type/term-deposit/preview", {
      state: values,
    });
  };

  useEffect(() => {
    setValue("rate", interestRates && `${interestRates?.rate}% per annum`);
  }, [interestRates]);

  useEffect(() => {
    dispatch(getTermDepositTenureAsync());
    dispatch(resetInterestRates());
  }, []);

  return (
    <div className="mt-4 lg:mt-10 m-auto w-[90%] md:w-[80%] lg:w-[60%]">
      <form onSubmit={handleSubmit(submitForm)}>
        <AmountInput
          control={control}
          name="amount"
          label="How much would you like to save?"
          placeholder="N 10,000.00"
          min={"100,000"}
          error={errors?.amount?.message}
          rules={{ required: "Amount is required" }}
          customOnChange={getInterestRateDataForAmount}
          // customOnBlur={
          //   watch("amount") !== undefined &&
          //   watch("tenor") !== undefined &&
          //   getInterestRateData
          // }
        />

        <FluentSelectTwo
          control={control}
          name="tenor"
          options={termDepositTenureData}
          label="For how long?"
          isLoading={getTermDepositTenureLoading}
          placeholder="Tenure"
          error={errors?.tenor?.message}
          rules={{ required: "Tenure is required" }}
          onBlur={getInterestRateData}
          // onBlur={
          //   watch("amount") !== undefined &&
          //   watch("tenor") !== undefined &&
          //   getInterestRateData
          // }
          // onBlur={watch(
          //   (value) => {
          //     value?.amount !== undefined &&
          //       value?.tenor !== undefined &&
          //       getInterestRateData();
          //   },
          //   [watch]
          // )}
        />

        <SavingsInput
          readOnly
          placeholder=""
          className="mt-4"
          label="Interest Rate"
          register={register("rate", {
            required: "Interest Rate is required",
          })}
          error={errors?.rate?.message}
        />
        <span className="text-xs text-red-400">
          {getInterestRateLoading ? "Calculating Rate" : ""}
        </span>

        <div className="w-full mt-14 md:w-[40%] m-auto">
          <Button
            buttonText="Continue"
            className="rounded-xl mb-10"
            size="lg"
          />
        </div>
      </form>
    </div>
  );
};

export { TermDeposit };
