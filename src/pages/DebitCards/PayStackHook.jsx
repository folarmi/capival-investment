import React from "react";
import { usePaystackPayment } from "react-paystack";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { addDebitCardAsync } from "../../slices/accounts";
import { DebitButton } from "./DebitButton";

const PaystackHook = () => {
  const PUBLICKEY = process.env.REACT_APP_PAYSTACK_PUBLIC_KEY;

  const dispatch = useDispatch();
  const userEmail = useSelector(
    (state) => state.auth?.login?.user?.user?.customer_data?.Email
  );
  const { addDebitCardLoading } = useSelector((state) => state.accounts);

  const config = {
    reference: new Date().getTime().toString(),
    email: userEmail,
    amount: 5000,
    publicKey: PUBLICKEY,
    callback: "http://localhost:3001/paystack/callback",
  };

  //   {
  //     "reference": "1664729617526",
  //     "trans": "2149582861",
  //     "status": "success",
  //     "message": "Approved",
  //     "transaction": "2149582861",
  //     "trxref": "1664729617526",
  //     "redirecturl": "http://localhost:8000/payment/callback?trxref=1664729617526&reference=1664729617526"
  // }

  // you can call this function anything
  const onSuccess = (reference) => {
    console.log(reference);
    // Implementation for whatever you want to do with reference and after success call.
    const variables = {
      reference_no: reference?.reference,
    };

    dispatch(addDebitCardAsync(variables))
      .unwrap()
      .then((res) => {
        if (res?.status === true) {
          console.log(res);
          // console.log(res?.status);
          toast(res?.message);
          window.location.reload();
        }
      })
      .catch((err) => {
        console.log(err);
        toast.error(err?.message);
      });
  };

  // you can call this function anything
  const onClose = () => {
    // implementation for  whatever you want to do when the Paystack dialog closed.
    console.log("closed");
  };

  const initializePayment = usePaystackPayment(config);
  return (
    <div>
      <DebitButton
        onClick={() => {
          initializePayment(onSuccess, onClose);
        }}
        text="Add New Card"
        icon="/assets/icons/plus.svg"
        ifPrimary={false}
        isLoading={addDebitCardLoading}
      />
    </div>
  );
};

export { PaystackHook };
