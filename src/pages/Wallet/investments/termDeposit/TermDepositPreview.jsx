import React, { useState } from "react";
import CurrencyFormat from "react-currency-format";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Button } from "../../../../atoms";
import { ToggleButton } from "../../../../atoms/ToggleButton";
import { createTermDepositAsync } from "../../../../slices/investments";

const TermDepositPreview = () => {
  const { state } = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { createTermDepositLoading, termDepositTermsAndCondition } =
    useSelector((state) => state.investments);

  console.log(termDepositTermsAndCondition);

  const [agreeOne, setAgreeOne] = useState(false);

  const toggleOne = () => {
    setAgreeOne(() => !agreeOne);
  };

  const submitForm = () => {
    if (!agreeOne) {
      toast.error("You must agree to the terms and conditions");
      return;
    }
    let formattedAmount = state?.amount.slice(1);
    const variables = {
      amount: formattedAmount,
      tenor: state?.tenor.toString(),
    };

    dispatch(createTermDepositAsync(variables))
      .unwrap()
      .then((res) => {
        if (res?.status) {
          toast(res?.message);
          navigate("/dashboard/wallet/investments");
        }
      })
      .catch((err) => {
        toast.error(err?.message);
        navigate("/dashboard/wallet/investments/saving-type/term-deposit");
      });
  };

  return (
    <div className="mt-4 lg:mt-10 m-auto w-[90%] md:w-[80%] lg:w-[60%]">
      <p className="font-bold text-lg text-blueTwo text-center pb-2">
        Term Deposit Details
      </p>

      <div className="w-full md:flex md:items-center border-b border-blueTwo/30 pt-8 pb-4">
        <p className="text-base font-medium text-blueTwo md:w-[40%] pl-[10%]">
          Investment Type
        </p>
        <p className="pl-[10%] md:pl-0 text-base font-normal text-blueTwo md:w-[60%]">
          Term Deposit
        </p>
      </div>

      <div className="w-full md:flex md:items-center border-b border-blueTwo/30 pt-8 pb-4">
        <p className="text-base font-medium text-blueTwo md:w-[40%] pl-[10%]">
          Base Amount
        </p>
        <p className="pl-[10%] md:pl-0 text-base font-normal text-blueTwo md:w-[60%]">
          <CurrencyFormat
            value={state?.amount}
            displayType={"text"}
            thousandSeparator={true}
            prefix={"₦"}
          />
        </p>
      </div>

      <div className="w-full md:flex md:items-center border-b border-blueTwo/30 pt-8 pb-4">
        <p className="text-base font-medium text-blueTwo md:w-[40%] pl-[10%]">
          Interest
        </p>
        <p className="pl-[10%] md:pl-0 text-base font-normal text-blueTwo md:w-[60%]">
          {state?.rate}
        </p>
      </div>

      <ToggleButton
        toggleText={
          <a
            href="https://demo-ibank.capival.com/fixed-deposit/terms-and-conditions"
            target="_blank"
          >
            I agree to Capival’s Terms & Conditions
          </a>
        }
        onChange={toggleOne}
      />

      <div className="w-full mt-14 md:w-[40%] m-auto">
        <Button
          buttonText="Create Term Deposit"
          className="rounded-xl mb-10"
          size="lg"
          onClick={submitForm}
          isLoading={createTermDepositLoading}
        />
      </div>
    </div>
  );
};

export { TermDepositPreview };
