import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { toast } from "react-toastify";
import { Button, SavingsInput } from "../../atoms";
import ModalPopup from "../../components/ModalPopup";
import { validateBettingAccountAsync } from "../../slices/mobileTopup";
import { TransactionPin } from "./TransactionPin";

const BettingForm = () => {
  const { state } = useLocation();
  const dispatch = useDispatch();
  const { validateBettingAccountLoading } = useSelector(
    (state) => state.mobileTopUp
  );

  const { register, handleSubmit, formState, reset, control, getValues } =
    useForm({});
  const { errors } = formState;

  const [pinModal, setPinModal] = useState(false);
  const [formValues, setFormValues] = useState();

  const togglePinModal = () => {
    setPinModal(!pinModal);
  };

  const handleValidation = () => {
    const variables = {
      billerId: state?.billerId,
      account_number: getValues("account_number"),
    };

    dispatch(validateBettingAccountAsync(variables))
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

  const submitForm = (values) => {
    const variables = {
      billerId: state?.billerId,
      account_number: values?.account_number,
      account_name: values?.account_name,
      amount: values?.amount,
    };
    setFormValues(variables);
    togglePinModal();
  };

  return (
    <form
      onSubmit={handleSubmit(submitForm)}
      className="grid grid-cols-2 gap-10 mt-12 m-auto w-[70%]"
    >
      <div>
        <SavingsInput
          placeholder="34382"
          label="Account Number"
          register={register("account_number", {
            onBlur: (e) => handleValidation(),
            required: "Account Number is required",
          })}
          error={errors?.account_number?.message}
        />
        {validateBettingAccountLoading && (
          <span className="text-sm text-red-500 font-medium">
            Validating...
          </span>
        )}
      </div>

      <div>
        <SavingsInput
          placeholder="Name"
          label="Account Name"
          register={register("account_name", {
            required: "Account Name is required",
          })}
          error={errors?.account_name?.message}
        />
      </div>

      <div>
        <SavingsInput
          placeholder="Amount"
          label="Amount"
          register={register("amount", {
            required: "Account Name is required",
          })}
          error={errors?.amount?.message}
        />
      </div>

      <div className="w-[80%] m-auto grid-cols-2 mt-12">
        <Button buttonText="Continue" className="rounded-xl" size="lg" />
      </div>

      <ModalPopup
        modalHeight="300px"
        modalWidth="400px"
        children={
          <TransactionPin
            formValues={formValues}
            togglePinModal={togglePinModal}
          />
        }
        isOpen={pinModal}
      />
    </form>
  );
};

export default BettingForm;
