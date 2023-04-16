import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Button } from "../../atoms";
import { OTPInput } from "../../components/OTPInput";
import {
  purchaseAirtimeAsync,
  purchaseDataAsync,
} from "../../slices/mobileTopup";

const TransactionPin = ({ formValues, togglePinModal }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [otpValues, setOtpValues] = useState("");

  const { airtimeLoading, buyDataLoading } = useSelector(
    (state) => state?.mobileTopUp
  );

  const submitForm = (e) => {
    e.preventDefault();

    if (otpValues === "") {
      toast.error("Please enter your transaction pin");
      return;
    }

    if (formValues?.topup === "Airtime") {
      const variables = {
        phone: formValues?.phone,
        amount: Number(formValues?.amount),
        billerId: formValues?.billerId,
        pin: otpValues,
      };

      dispatch(purchaseAirtimeAsync(variables))
        .unwrap()
        .then((res) => {
          if (res?.status === true) {
            toast(res?.message);
            togglePinModal();
            navigate(`/dashboard/Airtime__Data`);
          }
        })
        .catch((err) => {
          toast.error(err?.message);
        });
    } else {
      const variables = {
        phone: formValues?.phone,
        amount: Number(formValues?.amount),
        billerId: formValues?.billerId,
        bundle: formValues?.bundle,
        pin: otpValues,
      };

      dispatch(purchaseDataAsync(variables))
        .unwrap()
        .then((res) => {
          if (res?.status === true) {
            toast(res?.message);
            togglePinModal();
            navigate(`/dashboard/Airtime__Data`);
          }
        })
        .catch((err) => {
          toast.error(err?.message);
        });
    }
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
        buttonText="Top up"
        isLoading={airtimeLoading || buyDataLoading}
        disabled={airtimeLoading || buyDataLoading}
      />
    </div>
  );
};

export { TransactionPin };
