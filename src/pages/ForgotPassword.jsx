import React from "react";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { Button, Header, Input } from "../atoms";
import { forgotPasswordAsync } from "../slices/auth";
import { toast } from "react-toastify";

const ForgotPassword = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { forgotPasswordLoading } = useSelector((state) => state.auth);

  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email("Invalid email format")
      .required("Email is Required"),
  });

  const { register, handleSubmit, formState, reset } = useForm({
    resolver: yupResolver(validationSchema),
  });
  const { errors } = formState;

  const submitForm = (values) => {
    dispatch(forgotPasswordAsync(values))
      .unwrap()
      .then((res) => {
        if (res?.status === true) {
          toast(res?.message);
          reset();
          navigate("/forgot-password-otp", {
            state: { email: values.email },
          });
        }
      })
      .catch((err) => {
        toast.error(err?.message);
        reset();
      });
  };

  return (
    <div className="w-full h-screen login-bg">
      <Header />
      <div className="bg-blueOne m-auto md:w-[50%] lg:w-[40%] xl:w-[34%] mt-16 rounded-3xl">
        <p className="text-2xl text-redOne py-4 text-center">Forgot Password</p>
        <p className="text-sm text-blueTwo text-center pb-4">
          Enter Email Address
        </p>
        <form onSubmit={handleSubmit(submitForm)} className="px-10">
          <Input
            placeholder="Email"
            ifIcon={false}
            register={register("email")}
            error={errors?.email?.message}
          />

          <Button
            buttonText="Continue"
            className="mb-10 mt-4 rounded-[30px]"
            isLoading={forgotPasswordLoading}
          />
        </form>
      </div>
    </div>
  );
};

export { ForgotPassword };
