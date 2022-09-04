import React from "react";
import { useSelector } from "react-redux";
import { ContactDetails } from "./ContactDetails";
import { CreateProfile } from "./CreateProfile";
import { OTPVerification } from "./OTPVerification";
import { PersonalDetails } from "./PersonalDetails";
import { ProfileInformation } from "./ProfileInformation";
import { Selfie } from "./Selfie";
import { Signature } from "./Signature";

const Register = () => {
  const step = useSelector((state) => state.multiStep.value);
  // let step = 6;
  return (
    <>
      {step === 1 && <CreateProfile />}
      {step === 2 && <OTPVerification />}
      {step === 3 && <PersonalDetails />}
      {step === 4 && <ContactDetails />}
      {step === 5 && <ProfileInformation />}
      {step === 6 && <Selfie />}
      {step === 7 && <Signature />}
    </>
  );
};

export { Register };
