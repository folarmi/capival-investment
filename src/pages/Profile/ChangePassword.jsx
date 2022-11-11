import React, { useState } from "react";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from "react-toastify";

import { Button, SavingsInput } from "../../atoms";
import { changePasswordAsync } from "../../slices/auth";

const ChangePassword = () => {
  const dispatch = useDispatch();
  const { changePasswordLoading } = useSelector((state) => state.auth);

  const [passwordShown, setPasswordShown] = useState(false);
  const [newPasswordShown, setNewPasswordShown] = useState(false);
  const [confirmPasswordShown, setConfirmPasswordShown] = useState(false);

  const togglePasswordShown = () => {
    setPasswordShown(!passwordShown);
  };

  const toggleNewPasswordShown = () => {
    setNewPasswordShown(!newPasswordShown);
  };

  const toggleConfirmPasswordShown = () => {
    setConfirmPasswordShown(!confirmPasswordShown);
  };

  const validationSchema = Yup.object().shape({
    old_password: Yup.string()
      .required("Old password is required")
      .min(8, "Password too short")
      .matches(
        /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{6,}$/,
        "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
      ),
    new_password: Yup.string()
      .required("New password is required")
      .min(8, "Password too short")
      .matches(
        /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{6,}$/,
        "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
      ),
    confirm_new_password: Yup.string().oneOf(
      [Yup.ref("new_password"), null],
      "Passwords must match"
    ),
  });

  const { register, handleSubmit, formState, reset } = useForm({
    resolver: yupResolver(validationSchema),
  });
  const { errors } = formState;

  const submitForm = (values) => {
    dispatch(
      changePasswordAsync({
        old_password: values?.old_password,
        new_password: values?.new_password,
      })
    )
      .unwrap()
      .then((res) => {
        if (res?.status === true) {
          toast(res?.message);
          reset();
        }
      })
      .catch((err) => {
        console.log(err);
        toast.error(err?.message);
        reset();
      });
  };

  return (
    <div className="mt-8">
      <p className="text-blueTwo text-center font-medium text-lg uppercase">
        Change Password
      </p>
      {/* icon="/assets/icons/savingEye.svg" */}
      <form
        className="m-auto w-[90%] md:w-[80%] lg:w-[40%]"
        onSubmit={handleSubmit(submitForm)}
      >
        <div className="w-full relative">
          <i onClick={togglePasswordShown} className="">
            <img
              src={
                passwordShown
                  ? "/assets/icons/hide.svg"
                  : "/assets/icons/hide.svg"
              }
              onClick={togglePasswordShown}
              alt="visible"
              className="w-5 absolute z-30 cursor-pointer mt-[12%] md:mt-[8%] ml-[89%]"
            />
          </i>
          <SavingsInput
            placeholder="Enter Current Password"
            label="Enter Current Password"
            type={passwordShown ? "text" : "password"}
            register={register("old_password")}
            error={errors?.old_password?.message}
          />
        </div>

        <div className="w-full relative">
          <i onClick={toggleNewPasswordShown} className="">
            <img
              src={
                newPasswordShown
                  ? "/assets/icons/hide.svg"
                  : "/assets/icons/hide.svg"
              }
              onClick={toggleNewPasswordShown}
              alt="visible"
              className="w-5 absolute z-30 cursor-pointer mt-[12%] md:mt-[8%] ml-[89%]"
            />
          </i>
          <SavingsInput
            placeholder="Enter New Password"
            label="Enter New Password"
            className="mt-6"
            // ifIcon
            icon="/assets/icons/hide.svg"
            type={newPasswordShown ? "text" : "password"}
            register={register("new_password")}
            error={errors?.new_password?.message}
          />
        </div>

        <div className="w-full relative">
          <i onClick={toggleConfirmPasswordShown} className="">
            <img
              src={
                confirmPasswordShown
                  ? "/assets/icons/hide.svg"
                  : "/assets/icons/hide.svg"
              }
              onClick={toggleConfirmPasswordShown}
              alt="visible"
              className="w-5 absolute z-30 cursor-pointer mt-[12%] md:mt-[8%] ml-[89%]"
            />
          </i>
          <SavingsInput
            placeholder="Confirm New Password"
            label="Confirm New Password"
            className="mt-6"
            icon="/assets/icons/hide.svg"
            register={register("confirm_new_password")}
            type={confirmPasswordShown ? "text" : "password"}
            error={errors?.confirm_new_password?.message}
          />
        </div>

        <Button
          buttonText="Confirm"
          className="my-10 rounded-[20px]"
          isLoading={changePasswordLoading}
        />
      </form>
    </div>
  );
};

export { ChangePassword };
