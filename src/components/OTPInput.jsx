import React from "react";
import OtpInput from "react-otp-input";

const OTPInput = ({
  otpValues,
  setOtpValues,
  isInputSecure,
  height = "64px",
  width = "64px",
  hasErrored,
  className,
}) => {
  return (
    <div className={`${className}`}>
      <OtpInput
        containerStyle="flex justify-between"
        value={otpValues}
        name="OTP"
        onChange={(e) => setOtpValues(e)}
        numInputs={4}
        focusStyle={false}
        isInputNum={true}
        isInputSecure={isInputSecure}
        hasErrored={hasErrored}
        // errorStyle="border border-red-800"
        className={`border-2 mb-2 p-3 rounded-full h-[${height}] w-[${width}] mr-8`}
      />
    </div>
  );
};

export { OTPInput };
