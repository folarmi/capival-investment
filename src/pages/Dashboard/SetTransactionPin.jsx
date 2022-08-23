import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { Button } from "../../atoms";
import { OTPInput } from "../../components/OTPInput";
import { logoutAsync, setTransactionPinAsync } from "../../slices/auth";

const SetTransactionPin = ({ toggleTransactionPinModal }) => {
  const dispatch = useDispatch();
  const { isTransactionPinLoading } = useSelector((state) => state?.auth);

  const [otpValues, setOtpValues] = useState("");
  const submitForm = (e) => {
    e.preventDefault();
    // setOtpValues('')
    // console.log(otpValues);
    dispatch(
      setTransactionPinAsync({
        pin: otpValues,
      })
    )
      .unwrap()
      .then((res) => {
        setOtpValues("");
        if (res?.status === true) {
          console.log(res);
          toast("Transaction Pin sucessfully set");
          toggleTransactionPinModal();
          window.location.reload();
        }
      })
      .catch((err) => {
        toast.error(err?.message);
      });
  };

  const logoutUser = () => {
    dispatch(logoutAsync());
  };

  return (
    <div className="px-6  h-full w-full mt-10">
      <p className="text-blueTwo font-medium text-base pb-6 text-center uppercase">
        Set a Transaction Pin
      </p>
      <OTPInput otpValues={otpValues} setOtpValues={setOtpValues} />
      <Button
        onClick={submitForm}
        className="rounded-xl mt-6"
        buttonText="Set Pin"
        isLoading={isTransactionPinLoading}
      />
      <p
        onClick={logoutUser}
        className="font-normal text-sm text-blueTwo flex justify-end pt-4 cursor-pointer"
      >
        Logout
      </p>
    </div>
  );
};

export { SetTransactionPin };
