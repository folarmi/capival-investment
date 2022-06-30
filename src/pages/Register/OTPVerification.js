import React from "react";
import { useDispatch } from "react-redux";

import { Button } from "../../atoms/Button";
import { RegisterInput } from "../../atoms/RegisterInput";
import { handleNextButton } from "../../slices/multistep";

const OTPVerification = () => {
  const dispatch = useDispatch();

  const goToNext = () => {
    dispatch(handleNextButton());
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

      <div className="m-auto mt-8 md:w-[80%] lg:w-[70%] xl:w-[54%]">
        <RegisterInput placeholder="Enter OTP" />

        <p className="text-blueTwo font-normal text-sm pt-2">
          Didn’t get a code? <span className="text-secondary">Resend</span>
        </p>

        <div className="mt-24 w-1/2">
          <Button
            buttonText="Continue"
            className="rounded-2xl"
            onClick={goToNext}
          />
        </div>
      </div>
    </div>
  );
};

export { OTPVerification };
