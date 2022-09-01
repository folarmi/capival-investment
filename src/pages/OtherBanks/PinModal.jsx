import React, { useState } from "react";
import * as Yup from "yup";
import { toast } from "react-toastify";

import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { capivalTransferAsync } from "../../slices/transactionHistory";

import { Button } from "../../atoms";
import { OTPInput } from "../../components/OTPInput";

const PinModal = ({ toggleTransactionPinModal, formValues }) => {
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
      <p className="text-blueTwo font-medium text-sm pb-6 text-center uppercase">
        Enter your Transaction Pin
      </p>
      {/* <SavingsInput
        placeholder="PIN"
        register={register("pin")}
        type="password"
        error={errors?.pin?.message}
      /> */}
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
        isLoading={capivalTransferLoading}
        onClick={submitForm}
      />
    </form>
  );
};

export { PinModal };
