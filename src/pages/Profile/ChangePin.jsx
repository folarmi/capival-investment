import React, { useState } from "react";
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

  const [pinShown, setPinShown] = useState(false);
  const [newPinShown, setNewPinShown] = useState(false);
  const [confirmPinShown, setConfirmPinShown] = useState(false);

  const togglePinShown = () => {
    setPinShown(!pinShown);
  };

  const toggleNewPinShown = () => {
    setNewPinShown(!newPinShown);
  };

  const toggleConfirmPinShown = () => {
    setConfirmPinShown(!confirmPinShown);
  };

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
        <div className="w-full relative">
          <i onClick={togglePinShown} className="">
            <img
              src={
                pinShown ? "/assets/icons/hide.svg" : "/assets/icons/hide.svg"
              }
              onClick={togglePinShown}
              alt="visible"
              className="w-5 absolute z-30 cursor-pointer mt-[12%] md:mt-[8%] ml-[89%]"
            />
          </i>
          <SavingsInput
            placeholder="Enter Current Pin"
            label="Enter Current Pin"
            type={pinShown ? "text" : "password"}
            register={register("old_pin")}
            error={errors?.old_pin?.message}
          />
        </div>

        <div className="w-full relative">
          <i onClick={toggleNewPinShown} className="">
            <img
              src={
                newPinShown
                  ? "/assets/icons/hide.svg"
                  : "/assets/icons/hide.svg"
              }
              onClick={toggleNewPinShown}
              alt="visible"
              className="w-5 absolute z-30 cursor-pointer mt-[12%] md:mt-[8%] ml-[89%]"
            />
          </i>
          <SavingsInput
            placeholder="Enter New Pin"
            label="Enter New Pin"
            className="mt-6"
            type={newPinShown ? "text" : "password"}
            register={register("new_pin")}
            error={errors?.new_pin?.message}
          />
        </div>

        <div className="w-full relative">
          <i onClick={toggleConfirmPinShown} className="">
            <img
              src={
                confirmPinShown
                  ? "/assets/icons/hide.svg"
                  : "/assets/icons/hide.svg"
              }
              onClick={toggleConfirmPinShown}
              alt="visible"
              className="w-5 absolute z-30 cursor-pointer mt-[12%] md:mt-[8%] ml-[89%]"
            />
          </i>
          <SavingsInput
            placeholder="Confirm New Pin"
            label="Confirm New Pin"
            className="mt-6"
            type={confirmPinShown ? "text" : "password"}
            register={register("confirm_new_pin")}
            error={errors?.confirm_new_pin?.message}
          />
        </div>

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
