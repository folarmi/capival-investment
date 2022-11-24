import React, { useState } from "react";
import * as Yup from "yup";
import { toast } from "react-toastify";

import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { capivalTransferAsync } from "../../slices/transactionHistory";

import { Button } from "../../atoms";
import { OTPInput } from "../../components/OTPInput";
import { saveInternalBeneficiaryAsync } from "../../slices/transactions";

const PinModal = ({ formValues, toggleTransactionPinModal }) => {
  const dispatch = useDispatch();
  const nagivate = useNavigate();
  const { capivalTransferLoading } = useSelector(
    (state) => state.transactionHistory
  );

  const [otpValues, setOtpValues] = useState("");

  const submitForm = (e) => {
    e.preventDefault();
    if (otpValues.length < 4) {
      toast.error("Transaction Pin Must be 4 digits");
    }

    formValues.pin = otpValues;
    dispatch(capivalTransferAsync(formValues))
      .unwrap()
      .then((res) => {
        if (res?.status === true) {
          console.log(formValues?.saveBeneficiary);
          if (formValues?.saveBeneficiary === true) {
            dispatch(
              saveInternalBeneficiaryAsync({
                beneficiary_account: formValues?.destination_account,
                account_name: formValues?.account_name,
              })
            )
              .unwrap()
              .then((res) => {
                if (res?.status === true) {
                  toast("Beneficiary Saved Succesfully");
                }
              })
              .catch((err) => {
                toast.error(err?.message);
              });
          }
          toast(res.message);
          nagivate("/dashboard/capival-transfers/receipt", {
            state: {
              transferDetails: res?.data,
            },
          });
        }
      })
      .catch((err) => {
        setOtpValues("");
        toast.error(err?.message);
      });
  };

  return (
    <form className="px-6 py-3">
      <div className="flex justify-end" onClick={toggleTransactionPinModal}>
        <img src="/assets/icons/closeTwo.svg" alt="closeButton" />
      </div>
      <p className="text-blueTwo font-medium text-sm pb-6 text-center uppercase">
        Enter your Transaction Pin
      </p>
      <OTPInput
        otpValues={otpValues}
        setOtpValues={setOtpValues}
        isInputSecure
        height="20px"
        width="20px"
        className="mr-4"
      />

      <Button
        buttonText="Continue"
        className="rounded-lg mt-3"
        size="lg"
        isLoading={capivalTransferLoading}
        onClick={submitForm}
        disabled={capivalTransferLoading}
      />
    </form>
  );
};

export { PinModal };
