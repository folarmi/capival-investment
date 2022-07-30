import React from "react";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { Button } from "../../atoms/Button";
import { RegisterInput } from "../../atoms/RegisterInput";
import { handleNextButton } from "../../slices/multistep";
import { toast } from "react-toastify";
import { bvnOtpVerificationAsync } from "../../slices/auth";

const OTPVerification = () => {
  const dispatch = useDispatch();

  const { bvn } = useSelector((state) => state.multiStep.userInfo);
  const isBvnOtpLoading = useSelector((state) => state.auth.isBvnOtpLoading);

  const { value } = useSelector((state) => state.multiStep);
  console.log(isBvnOtpLoading, value);

  const validationSchema = Yup.object().shape({
    otp: Yup.string()
      .required("OTP is required")
      .min(6, "Minimum value is 6")
      .max(6, "Maximum value is 6."),
  });

  const { register, handleSubmit, formState, reset } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const { errors } = formState;

  const submitForm = (values) => {
    const variables = {
      bvn: bvn,
      otp: values?.otp,
    };
    dispatch(bvnOtpVerificationAsync(variables))
      .unwrap()
      .then((res) => {
        if (res?.status === true) {
          toast(res?.message);
          dispatch(handleNextButton());
        }
      })
      .catch((err) => {
        toast.error(err?.message);
        reset();
      });
  };

  const handleBackButton = () => {
    dispatch(handleBackButton());
  };

  return (
    <div className="w-full h-screen register-bg">
      <div className="m-auto md:w-[80%] lg:w-[70%] xl:w-[54%] mt-16">
        <p className="text-redOne font-semibold md:text-4xl lg:text-5xl xl:text-[50px] pb-10">
          Create your Profile
        </p>
      </div>

      <section className="bg-blueOne">
        <div className="m-auto md:w-[80%] lg:w-[70%] xl:w-[54%]">
          <p className="font-semibold text-lg text-blueTwo py-6">
            OTP Verification
          </p>
          <p className="text-blueTwo font-normal text-sm pb-6">
            Please enter the 6-digit OTP we sent to your BVN linked phone number
            090******13
          </p>
        </div>
      </section>

      <form className="m-auto mt-8 md:w-[80%] lg:w-[70%] xl:w-[54%]">
        <RegisterInput
          placeholder="Enter OTP"
          register={register("otp")}
          error={errors?.otp?.message}
        />

        <p className="text-blueTwo font-normal text-sm pt-2">
          Didn’t get a code? <span className="text-secondary">Resend</span>
        </p>

        <div className="flex justify-between mt-20">
          <div className="w-1/2 mr-6">
            <Button
              size="md"
              buttonText="Back"
              className="rounded-2xl"
              type="secondary"
              onClick={handleBackButton}
            />
          </div>

          <div className="w-1/2">
            <Button
              size="md"
              buttonText="Continue"
              className="rounded-2xl"
              isLoading={isBvnOtpLoading}
              onClick={handleSubmit(submitForm)}
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export { OTPVerification };
