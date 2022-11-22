import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Button } from "../../../../atoms";
import { ToggleButton } from "../../../../atoms/ToggleButton";
import { createSafeLockAsync } from "../../../../slices/investments";

const LockedSavingsPreview = () => {
  const { state } = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const savingsDetails = state?.formValues;
  const selectedPayBack = state?.selectedCat;

  const { createSafeLockLoading } = useSelector((state) => state.investments);

  const [agreeOne, setAgreeOne] = useState(false);
  const [agreeTwo, setAgreeTwo] = useState(false);

  const toggleOne = () => {
    setAgreeOne(() => !agreeOne);
  };

  const toggleTwo = () => {
    setAgreeTwo(() => !agreeTwo);
  };

  const formattedSource = (source) => {
    if (source.includes("card")) {
      let formatted;
      let indexOfDash = source.indexOf("-");
      formatted = source?.slice(0, indexOfDash);
      let finalValue = formatted.charAt(0).toUpperCase() + formatted.slice(1);
      return finalValue;
    } else {
      return source.charAt(0).toUpperCase() + source.slice(1);
    }
  };

  const submitForm = () => {
    if (!agreeOne && !agreeTwo) {
      toast.error("You must agree to both terms");
      return;
    } else if (!agreeOne || !agreeTwo) {
      toast.error("You must agree to both terms");
      return;
    }

    let formattedTargetAmount = savingsDetails?.amount?.slice(1);

    const variables = {
      maturity_date: savingsDetails?.maturity_date,
      interest_rate: selectedPayBack?.interest.toString(),
      days: selectedPayBack?.days.toString(),
      savings_title: savingsDetails?.savings_title,
      amount: formattedTargetAmount,
      source: savingsDetails?.source,
    };

    console.log(variables);
    dispatch(createSafeLockAsync(variables))
      .unwrap()
      .then((res) => {
        if (res?.status) {
          toast(res?.message);
          navigate("/dashboard/wallet/investments");
        }
      })
      .catch((err) => {
        toast.error(err?.message);
        navigate("/dashboard/wallet/investments/saving-type/locked-savings");
      });
  };

  return (
    <div className="mt-4 lg:mt-10 m-auto w-[90%] md:w-[80%] lg:w-[60%]">
      <p className="font-bold text-lg text-blueTwo text-center pb-2">
        Locked Savings Details
      </p>

      <div className="w-full md:flex md:items-center border-b border-blueTwo/30 pt-8 pb-4">
        <p className="text-base font-medium text-blueTwo md:w-[40%] pl-[10%]">
          Savings Title:
        </p>
        <p className="pl-[10%] md:pl-0 text-base font-normal text-blueTwo md:w-[60%]">
          {savingsDetails?.savings_title}
        </p>
      </div>

      <div className="w-full md:flex md:items-center border-b border-blueTwo/30 pt-8 pb-4">
        <p className="text-base font-medium text-blueTwo md:w-[40%] pl-[10%]">
          Amount
        </p>
        <p className="pl-[10%] md:pl-0 text-base font-normal text-blueTwo md:w-[60%]">
          {savingsDetails?.amount}
        </p>
      </div>

      <div className="w-full md:flex md:items-center border-b border-blueTwo/30 pt-8 pb-4">
        <p className="text-base font-medium text-blueTwo md:w-[40%] pl-[10%]">
          Maturity Date
        </p>
        <p className="pl-[10%] md:pl-0 text-base font-normal text-blueTwo md:w-[60%]">
          {savingsDetails?.maturity_date}
        </p>
      </div>

      <div className="w-full md:flex md:items-center border-b border-blueTwo/30 pt-8 pb-4">
        <p className="text-base font-medium text-blueTwo md:w-[40%] pl-[10%]">
          Source
        </p>
        <p className="pl-[10%] md:pl-0 text-base font-normal text-blueTwo md:w-[60%]">
          {formattedSource(savingsDetails?.source)}
        </p>
      </div>

      <ToggleButton
        toggleText={`I hereby agree that if i will forfeit the interest accrued to this
        savings if I fail to meet this target Amount 
        ${savingsDetails?.amount}  by
        the set withdrawal data`}
        onChange={toggleOne}
      />
      {console.log(savingsDetails)}
      <ToggleButton
        toggleText={`I hereby authorize that this Locked savings cannot be broken once it has being created`}
        onChange={toggleTwo}
      />

      <div className="w-full mt-14 md:w-[40%] m-auto">
        <Button
          buttonText="Create Locked Savings"
          className="rounded-xl mb-10"
          size="lg"
          onClick={submitForm}
          isLoading={createSafeLockLoading}
        />
      </div>
    </div>
  );
};

export { LockedSavingsPreview };
