import React, { useState } from "react";
import * as Yup from "yup";
import { toast } from "react-toastify";

import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { capivalTransferAsync } from "../../slices/transactionHistory";

import { Button, SavingsInput } from "../../atoms";
import { OTPInput } from "../../components/OTPInput";

const PinModal = ({ toggleTransactionPinModal, formValues }) => {
  const dispatch = useDispatch();
  const nagivate = useNavigate();

  const [otpValues, setOtpValues] = useState("");

  //   console.log("from pin", formValues);

  const { capivalTransferLoading } = useSelector(
    (state) => state.transactionHistory
  );

  //   pin: Yup.string()
  //   .required("Transaction Pin is required")
  //   .matches(/^[0-9]+$/, "Must be only digits")
  //   .min(4, "Must be exactly 4 digits")
  //   .max(4, "Must be exactly 4 digits"),

  const { register, handleSubmit, formState, reset } = useForm({
    // resolver: yupResolver(validationSchema),
  });
  const { errors } = formState;

  const submitForm = (e) => {
    e.preventDefault();
    if (otpValues.length < 4) {
      toast.error("Transaction Pin Must be 4 digits");
    }

    const variables = {
      destination_account: formValues?.destination_account,
      amount: formValues?.amount,
      narration: formValues?.narration,
      pin: otpValues,
    };

    //   dispatch(capivalTransferAsync())
    //     .unwrap()
    //     .then((res) => {
    //       if (res?.status === true) {
    //         toast(res.message);
    //         reset();
    //         nagivate("/dashboard/capival-transfers/receipt", {
    //           state: {
    //             transferDetails: res?.data,
    //           },
    //         });
    //       }
    //     })
    //     .catch((err) => {
    //       console.log(err);
    //       reset();
    //       toast.error(err?.message);
    //     });
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
