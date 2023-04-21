import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Button } from "../../atoms";
import { OTPInput } from "../../components/OTPInput";
import { fundBettingWalletAsync } from "../../slices/mobileTopup";

const TransactionPin = ({ formValues, togglePinModal }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [otpValues, setOtpValues] = useState("");

  const { fundBettingWalletLoading } = useSelector(
    (state) => state?.mobileTopUp
  );

  const submitForm = (e) => {
    e.preventDefault();

    if (otpValues === "") {
      toast.error("Please enter your transaction pin");
      return;
    }
    formValues.pin = otpValues;
    // console.log(formValues);

    dispatch(fundBettingWalletAsync(formValues))
      .unwrap()
      .then((res) => {
        if (res?.status === true) {
          toast(res?.message);
          togglePinModal();
          navigate(`/dashboard/bets-and-lotteries`);
        }
      })
      .catch((err) => {
        toast.error(err?.message);
      });
  };

  return (
    <div className="px-6 h-full w-full mt-10">
      <div className="flex justify-end" onClick={togglePinModal}>
        <img src="/assets/icons/closeTwo.svg" alt="closeButton" />
      </div>
      <p className="text-blueTwo font-medium text-base pb-6 text-center uppercase">
        Set a Transaction Pin
      </p>
      <OTPInput
        otpValues={otpValues}
        setOtpValues={setOtpValues}
        isInputSecure
      />
      <Button
        onClick={submitForm}
        className="rounded-xl mt-6"
        buttonText="Fund Wallet"
        isLoading={fundBettingWalletLoading}
        disabled={fundBettingWalletLoading}
      />
    </div>
  );
};

export { TransactionPin };
