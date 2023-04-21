import React from "react";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { Button, Header, Input } from "../atoms";
import { changePasswordAsync } from "../slices/auth";
import { toast } from "react-toastify";

const CreateNewPassword = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { state } = useLocation();

  const { changePasswordLoading } = useSelector((state) => state.auth);
  const { email } = state;

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
    const variables = {
      email,
      password: values?.password,
    };

    dispatch(changePasswordAsync(variables))
      .unwrap()
      .then((res) => {
        if (res?.status === true) {
          toast(res?.message);
          navigate("/");
        }
      })
      .catch((err) => {
        toast.error(err?.error);
      });
  };

  return (
    <div className="w-full h-screen login-bg">
      <Header />
      <div className="bg-blueOne m-auto md:w-[50%] lg:w-[40%] xl:w-[34%] mt-16 rounded-3xl">
        <p className="text-2xl text-redOne py-4 text-center">
          Create New Password
        </p>
        <p className="text-sm text-blueTwo text-center pb-4">
          Password should contain: An uppercase (A) A lowercase (a) Special
          character (@#$) At least 8 characters
        </p>
        <form onSubmit={handleSubmit(submitForm)} className="px-10">
          <Input
            placeholder="Enter New Password"
            ifIcon={false}
            register={register("password")}
            error={errors?.password?.message}
            type="password"
          />

          <Input
            placeholder="Confirm Password"
            ifIcon={false}
            register={register("confirm_password")}
            error={errors?.confirm_password?.message}
            type="password"
          />

          <Button
            buttonText="Continue"
            className="mb-10 mt-4 rounded-[30px]"
            isLoading={changePasswordLoading}
            disabled={changePasswordLoading}
          />
        </form>
      </div>
    </div>
  );
};

export { CreateNewPassword };
