import React from "react";
import { useForm } from "react-hook-form";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from "react-toastify";

import { Button, SavingsInput } from "../../atoms";
import { useDispatch, useSelector } from "react-redux";
import { resetTransactionPinAsync } from "../../slices/auth";

const ChangePin = () => {
  const dispatch = useDispatch();
  const { isresetTransactionPinLoading } = useSelector((state) => state.auth);

  const validationSchema = Yup.object().shape({
    old_pin: Yup.string()
      .required()
      .matches(/^[0-9]+$/, "Must be only digits")
      .min(4, "Must be exactly 4 digits")
      .max(4, "Must be exactly 4 digits"),
    new_pin: Yup.string()
      .required()
      .matches(/^[0-9]+$/, "Must be only digits")
      .min(4, "Must be exactly 4 digits")
      .max(4, "Must be exactly 4 digits"),
    confirm_new_pin: Yup.string()
      .typeError("This field is required")
      .oneOf([Yup.ref("new_pin"), null], "Transaction Pin must match"),
  });

  const { register, handleSubmit, formState, reset } = useForm({
    resolver: yupResolver(validationSchema),
  });
  const { errors } = formState;

  //   console.log(errors);

  const submitForm = (values) => {
    dispatch(
      resetTransactionPinAsync({
        old_pin: values?.old_pin,
        new_pin: values?.new_pin,
      })
    )
      .unwrap()
      .then((res) => {
        if (res?.status === true) {
          console.log(res);
          toast(res?.message);
          reset();
        }
      })
      .catch((err) => {
        toast.error(err?.message);
        reset();
      });
  };

  return (
    <div className="mt-8">
      <p className="text-blueTwo text-center font-medium text-lg uppercase">
        Change Transaction Pin
      </p>
      {/* icon="/assets/icons/savingEye.svg" */}
      <form
        onSubmit={handleSubmit(submitForm)}
        className="mt-10 m-auto w-[90%] md:w-[80%] lg:w-[40%]"
      >
        <SavingsInput
          placeholder="Enter Current Pin"
          label="Enter Current Pin"
          //   ifIcon
          //   icon="/assets/icons/hide.svg"
          register={register("old_pin")}
          error={errors?.old_pin?.message}
        />

        <SavingsInput
          placeholder="Enter New Pin"
          label="Enter New Pin"
          className="mt-6"
          //   ifIcon
          //   icon="/assets/icons/hide.svg"
          register={register("new_pin")}
          error={errors?.new_pin?.message}
        />

        <SavingsInput
          placeholder="Confirm New Pin"
          label="Confirm New Pin"
          className="mt-6"
          //   ifIcon
          //   icon="/assets/icons/hide.svg"
          register={register("confirm_new_pin")}
          error={errors?.confirm_new_pin?.message}
        />

        <Button
          buttonText="Change Pin"
          className="my-10 rounded-[20px]"
          isLoading={isresetTransactionPinLoading}
        />
      </form>
    </div>
  );
};

export { ChangePin };
