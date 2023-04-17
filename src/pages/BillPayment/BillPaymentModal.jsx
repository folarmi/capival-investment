import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { Button } from "../../atoms";
import { OTPInput } from "../../components/OTPInput";
import { processPaymentAsync } from "../../slices/billPayment";

const BillPaymentModal = ({ response, toggleBillModal }) => {
  const dispatch = useDispatch();
  const { processPaymentLoading } = useSelector((state) => state?.billPayment);

  const [otpValues, setOtpValues] = useState("");

  const submitForm = (e) => {
    console.log("e reach");
    e.preventDefault();

    const variables = {
      pin: otpValues,
      rrr: response?.rrr,
    };

    dispatch(processPaymentAsync(variables))
      .unwrap()
      .then((res) => {
        setOtpValues("");
        if (res?.status === true) {
          console.log(res);
          toast(res?.message);
          toggleBillModal();
          window.location.reload();
        }
      })
      .catch((err) => {
        toast.error(err?.message);
      });
  };

  return (
    <>
      <div className="flex pr-6 pt-4 justify-end" onClick={toggleBillModal}>
        <img src="/assets/icons/closeTwo.svg" alt="" />
      </div>

      <form className="flex flex-col gap-6 px-6">
        <p>Transaction Amount: ₦{response?.rrrAmount}</p>
        <p>Remita Fee: ₦{response?.fee || 0}</p>
        <p>Total: ₦{response?.amount || 0}</p>
        <p>Transaction Pin</p>
        <OTPInput
          otpValues={otpValues}
          setOtpValues={setOtpValues}
          isInputSecure
        />
        <Button
          isLoading={processPaymentLoading}
          buttonText="Make Payment"
          className="rounded-2xl mt-8"
          onClick={submitForm}
        />
      </form>
    </>
  );
};

export { BillPaymentModal };
