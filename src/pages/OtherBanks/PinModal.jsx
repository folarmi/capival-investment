import React, { useState } from "react";
import * as Yup from "yup";
import { toast } from "react-toastify";

import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { otherBankTransferAsync } from "../../slices/transactionHistory";

import { Button } from "../../atoms";
import { OTPInput } from "../../components/OTPInput";
import { saveExternalBeneficiaryAsync } from "../../slices/transactions";

const PinModal = ({ formValues, toggleTransactionPinModal }) => {
  const dispatch = useDispatch();
  const nagivate = useNavigate();
  const { otherBankTransferLoading } = useSelector(
    (state) => state.transactionHistory
  );

  const [otpValues, setOtpValues] = useState("");

  const submitForm = (e) => {
    e.preventDefault();
    if (otpValues.length < 4) {
      toast.error("Transaction Pin Must be 4 digits");
    }

    formValues.pin = otpValues;
    console.log(formValues);

    dispatch(otherBankTransferAsync(formValues))
      .unwrap()
      .then((res) => {
        if (res?.status === true) {
          if (formValues?.saveBeneficiary === true) {
            dispatch(
              saveExternalBeneficiaryAsync({
                beneficiary_account: formValues?.destination_account_no,
                account_name: formValues?.destination_account_name,
                bank_name: formValues?.destination_bank,
                bank_code: formValues?.destination_bank,
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
        // hasErrored={otpValues === "" ? true : false}
      />

      <Button
        buttonText="Continue"
        className="rounded-lg mt-3"
        size="lg"
        isLoading={otherBankTransferLoading}
        onClick={submitForm}
      />
    </form>
  );
};

export { PinModal };

// {
//   "destination_account_no" : "1010000265",
//    "destination_bank" : "000013",
//    "destination_account_name" : "Osagie Tomori",
//    "amount":"3000",
//    "narration": "Api Test Transfer",
//    "pin": "1234"
// }

// {
//   "destination_account_no": "0136201464",
//   "destination_account_name": "Olaolu Adejide",
//   "amount": "50",
//   "narration": "testing",
//   "saveBeneficiary": false,
//   "pin": "1234"
// }
