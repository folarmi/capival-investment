import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { Button, FluentSelect } from "../../../../atoms";
import { changeFundingSourceAsync } from "../../../../slices/investments";
import { getFundingSourceAsync } from "../../../../slices/utils";

const ChangeFundingSource = ({ toggleChangeSourceModal, savingsId }) => {
  const dispatch = useDispatch();
  const { getFundingSourceLoading, fundingSource } = useSelector(
    (state) => state.utils
  );
  const { changeFundingSourceLoading } = useSelector(
    (state) => state.investments
  );

  const { handleSubmit, formState, control, reset } = useForm();

  const { errors } = formState;

  useEffect(() => {
    dispatch(getFundingSourceAsync());
  }, []);

  const sourceOfFundData =
    fundingSource &&
    fundingSource?.map((source) => {
      return {
        value: source.value,
        label: source.displayName,
      };
    });

  const submitForm = (values) => {
    dispatch(changeFundingSourceAsync(savingsId, values))
      .unwrap()
      .then((res) => {
        if (res?.status) {
          toast(res?.message);
          toggleChangeSourceModal();
          // window.location.reload();
        }
      })
      .catch((err) => {
        toast.error(err?.message);
      });
  };
  return (
    <div className="px-10">
      <div className="flex justify-end mt-4" onClick={toggleChangeSourceModal}>
        <img src="/assets/icons/closeTwo.svg" alt="closeButton" />
      </div>
      <p className="text-2xl py-2 text-blueTwo font-semibold uppercase">
        Change Source
      </p>

      <form onSubmit={handleSubmit(submitForm)}>
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
            required: "Source is required",
          }}
        />

        <div className="w-full md:w-[100%] mt-6 m-auto">
          <Button
            buttonText="Change"
            className="rounded-xl mb-10"
            size="lg"
            isLoading={changeFundingSourceLoading}
          />
        </div>
      </form>
    </div>
  );
};

export { ChangeFundingSource };
