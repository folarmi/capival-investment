import React from "react";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { Button, Header, Input } from "../atoms";
import { forgotPasswordAsyncOTP } from "../slices/auth";
import { toast } from "react-toastify";

const ForgotPasswordOTP = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { state } = useLocation();

  const { forgotPasswordLoadingOTP } = useSelector((state) => state.auth);
  const { email } = state;

  const validationSchema = Yup.object().shape({
    otp: Yup.string()
      .required("OTP is required")
      .min(6, "Minimum value is 6")
      .max(6, "Maximum value is 6."),
  });

  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(validationSchema),
  });
  const { errors } = formState;

  const submitForm = (values) => {
    const variables = {
      email,
      otp: values?.otp,
    };

    dispatch(forgotPasswordAsyncOTP(variables))
      .unwrap()
      .then((res) => {
        if (res?.status === true) {
          toast(res?.message);
          navigate("/create-new-password", {
            state: { email: email },
          });
        }
      })
      .catch((err) => {
        toast.error(err?.message);
      });
  };

  return (
    <div className="w-full h-screen login-bg">
      <Header />
      <div className="bg-blueOne m-auto md:w-[50%] lg:w-[40%] xl:w-[34%] mt-16 rounded-3xl">
        <p className="text-2xl text-redOne py-4 text-center">Forgot Password</p>
        <p className="text-sm text-blueTwo text-center pb-4">
          Input passcode sent to your registered email to continue.
        </p>
        <form onSubmit={handleSubmit(submitForm)} className="px-10">
          <Input
            placeholder="Enter Passcode"
            ifIcon={false}
            register={register("otp")}
            error={errors?.otp?.message}
          />

          <Button
            buttonText="Continue"
            className="mb-10 mt-4 rounded-[30px]"
            isLoading={forgotPasswordLoadingOTP}
            disabled={forgotPasswordLoadingOTP}
          />
        </form>
      </div>
    </div>
  );
};

export { ForgotPasswordOTP };
