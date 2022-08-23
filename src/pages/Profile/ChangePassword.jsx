import React from "react";
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
        <SavingsInput
          placeholder="Enter Current Password"
          label="Enter Current Password"
          // ifIcon
          // icon="/assets/icons/hide.svg"
          type="password"
          register={register("old_password")}
          error={errors?.old_password?.message}
        />

        <SavingsInput
          placeholder="Enter New Password"
          label="Enter New Password"
          className="mt-6"
          // ifIcon
          icon="/assets/icons/hide.svg"
          type="password"
          register={register("new_password")}
          error={errors?.new_password?.message}
        />

        <SavingsInput
          placeholder="Confirm New Password"
          label="Confirm New Password"
          className="mt-6"
          // ifIcon
          icon="/assets/icons/hide.svg"
          register={register("confirm_new_password")}
          type="password"
          error={errors?.confirm_new_password?.message}
        />

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
