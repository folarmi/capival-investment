import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { Button, FluentSelect } from "../../../../atoms";
import { AmountInput } from "../../../../atoms/AmountInput";
import { quickTopUpAsync } from "../../../../slices/investments";
import { getFundingSourceAsync } from "../../../../slices/utils";

const QuickTopUp = ({ toggleQuickTopUpModal, savingsId }) => {
  const dispatch = useDispatch();
  const { getFundingSourceLoading, fundingSource } = useSelector(
    (state) => state.utils
  );
  const { quickTopUpLoading } = useSelector((state) => state.investments);

  const { handleSubmit, formState, control } = useForm();
  const { errors } = formState;

  const sourceOfFundData =
    fundingSource &&
    fundingSource?.map((source) => {
      return {
        value: source.value,
        label: source.displayName,
      };
    });

  useEffect(() => {
    dispatch(getFundingSourceAsync());
  }, []);

  const submitForm = (values) => {
    let formattedAmount = values?.amount.slice(1);

    const formVariables = {
      amount: formattedAmount,
      source: values?.source,
    };

    const variables = {
      savingsId,
      values: formVariables,
    };

    dispatch(quickTopUpAsync(variables))
      .unwrap()
      .then((res) => {
        if (res?.status) {
          toast(res?.message);
          toggleQuickTopUpModal();
          window.location.reload();
        }
      })
      .catch((err) => {
        toast.error(err?.message);
      });
  };

  return (
    <div className="px-10">
      <div className="flex justify-end mt-4" onClick={toggleQuickTopUpModal}>
        <img src="/assets/icons/closeTwo.svg" alt="closeButton" />
      </div>
      <p className="text-2xl py-2 text-blueTwo font-semibold uppercase">
        Top up
      </p>
      <p className="text-sm text-blueTwo fon-normal">
        Instantly top up this savings target
      </p>
      <form onSubmit={handleSubmit(submitForm)}>
        <AmountInput
          control={control}
          name="amount"
          label="Amount"
          placeholder="N 10,000.00"
          error={errors?.amount?.message}
          rules={{ required: "Amount is required" }}
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

        <div className="w-full md:w-[100%] m-auto">
          <Button
            buttonText="Top up"
            className="rounded-xl mb-10"
            size="lg"
            isLoading={quickTopUpLoading}
          />
        </div>
      </form>
    </div>
  );
};

export { QuickTopUp };
