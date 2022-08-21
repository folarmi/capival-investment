import React from "react";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { Button, SavingsInput } from "../../atoms";

const ChangePassword = () => {
  const validationSchema = Yup.object().shape({
    password: Yup.string()
      .required("Please enter a password")
      .min(8, "Password too short")
      .matches(
        /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{6,}$/,
        "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
      ),
    confirm_password: Yup.string().oneOf(
      [Yup.ref("password"), null],
      "Passwords must match"
    ),
  });

  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(validationSchema),
  });
  const { errors } = formState;

  const submitForm = (values) => {
    // dispatch(loginUserAsync(values))
    //   .unwrap()
    //   .then((res) => {
    //     if (res?.status === true) {
    //       toast("Login successful");
    //       tokenService.setUser(res?.authorisation[0]?.original?.token);
    //       navigate("/dashboard");
    //     }
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //     toast.error(err?.message);
    //   });
  };

  return (
    <div className="mt-8">
      <p className="text-blueTwo text-center font-medium text-lg uppercase">
        Change Password
      </p>
      {/* icon="/assets/icons/savingEye.svg" */}
      <form className="m-auto w-[90%] md:w-[80%] lg:w-[40%]">
        <SavingsInput
          placeholder="Enter Current Password"
          label="Enter Current Password"
          ifIcon
          icon="/assets/icons/hide.svg"
        />

        <SavingsInput
          placeholder="Enter New Password"
          label="Enter New Password"
          className="mt-6"
          ifIcon
          icon="/assets/icons/hide.svg"
        />

        <SavingsInput
          placeholder="Confirm New Password"
          label="Confirm New Password"
          className="mt-6"
          ifIcon
          icon="/assets/icons/hide.svg"
        />

        <Button
          buttonText="Confirm"
          className="my-10 rounded-[20px]"
          //   isLoading={changePasswordLoading}
        />
      </form>
    </div>
  );
};

export { ChangePassword };
