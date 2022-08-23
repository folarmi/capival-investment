import React from "react";
import OtpInput from "react-otp-input";

const OTPInput = ({ otpValues, setOtpValues }) => {
  return (
    <div>
      <OtpInput
        containerStyle="flex justify-between"
        value={otpValues}
        name="OTP"
        onChange={(e) => setOtpValues(e)}
        numInputs={4}
        focusStyle={false}
        isInputNum={true}
        className="border-2 mb-2 p-3 rounded-full h-16 w-16 mr-8"
      />
    </div>
  );
};

export { OTPInput };
