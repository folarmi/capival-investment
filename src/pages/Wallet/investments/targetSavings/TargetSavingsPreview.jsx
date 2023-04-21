import React, { useState } from "react";
import CurrencyFormat from "react-currency-format";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Button } from "../../../../atoms";
import { ToggleButton } from "../../../../atoms/ToggleButton";
import { createTargetSavingsAsync } from "../../../../slices/investments";

const TargetSavingsPreview = () => {
  const { state } = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { createTargetSavingsLoading } = useSelector(
    (state) => state.investments
  );

  const [agreeOne, setAgreeOne] = useState(false);
  const [agreeTwo, setAgreeTwo] = useState(false);

  const toggleOne = () => {
    setAgreeOne(() => !agreeOne);
  };

  const toggleTwo = () => {
    setAgreeTwo(() => !agreeTwo);
  };

  const newDateOptions = {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  };

  const submitForm = () => {
    if (!agreeOne && !agreeTwo) {
      toast.error("You must agree to both terms");
      return;
    } else if (!agreeOne || !agreeTwo) {
      toast.error("You must agree to both terms");
      return;
    }

    let formattedTargetAmount = state?.target_amount.slice(1);
    let formattedFrequencyAmount = state?.frequency_amount.slice(1);
    const dateVariables = {
      start_date: state?.start_date.toLocaleString("en-US", newDateOptions),
      withdrawal_date: state?.withdrawal_date.toLocaleString(
        "en-US",
        newDateOptions
      ),
    };

    const variables = {
      title: state?.title,
      category: state?.category,
      target_amount: formattedTargetAmount,
      savings_frequency: state?.savings_frequency,
      frequency_amount: formattedFrequencyAmount,
      day_of_the_week: state?.day_of_the_week || "",
      day_of_the_month: state?.day_of_the_month || "",
      preferred_time: state?.preferred_time,
      start_date: dateVariables?.start_date,
      withdrawal_date: dateVariables?.withdrawal_date,
      primary_source: state?.primary_source,
    };

    dispatch(createTargetSavingsAsync(variables))
      .unwrap()
      .then((res) => {
        if (res?.status) {
          toast(res?.message);
          navigate("/dashboard/wallet/investments");
        }
      })
      .catch((err) => {
        toast.error(err?.message);
        navigate("/dashboard/wallet/investments/saving-type/target-savings");
      });
  };

  return (
    <div className="mt-4 lg:mt-10 m-auto w-[90%] md:w-[80%] lg:w-[60%]">
      <p className="font-bold text-lg text-blueTwo text-center pb-2">
        Target Saving Details
      </p>

      <div className="w-full md:flex md:items-center border-b border-blueTwo/30 pt-8 pb-4">
        <p className="text-base font-medium text-blueTwo md:w-[40%] pl-[10%]">
          Title:
        </p>
        <p className="pl-[10%] md:pl-0 text-base font-normal text-blueTwo md:w-[60%]">
          {state?.title}
        </p>
      </div>

      <div className="w-full md:flex md:items-center border-b border-blueTwo/30 pt-8 pb-4">
        <p className="text-base font-medium text-blueTwo md:w-[40%] pl-[10%]">
          Category:
        </p>
        <p className="pl-[10%] md:pl-0 text-base font-normal text-blueTwo md:w-[60%]">
          {state?.category}
        </p>
      </div>

      <div className="w-full md:flex md:items-center border-b border-blueTwo/30 pt-8 pb-4">
        <p className="text-base font-medium text-blueTwo md:w-[40%] pl-[10%]">
          Target Amount:
        </p>
        <p className="pl-[10%] md:pl-0 text-base font-normal text-blueTwo md:w-[60%]">
          {state?.target_amount}
        </p>
      </div>

      <div className="w-full md:flex md:items-center border-b border-blueTwo/30 pt-8 pb-4">
        <p className="text-base font-medium text-blueTwo md:w-[40%] pl-[10%]">
          Savings Frequency:
        </p>
        <p className="pl-[10%] md:pl-0 text-base font-normal text-blueTwo md:w-[60%]">
          {state?.savings_frequency}
        </p>
      </div>

      <div className="w-full md:flex md:items-center border-b border-blueTwo/30 pt-8 pb-4">
        <p className="text-base font-medium text-blueTwo md:w-[40%] pl-[10%]">
          Frequency Amount:
        </p>
        <p className="pl-[10%] md:pl-0 text-base font-normal text-blueTwo md:w-[60%]">
          <CurrencyFormat
            value={state?.frequency_amount}
            displayType={"text"}
            thousandSeparator={true}
            prefix={"₦"}
          />
        </p>
      </div>

      <div className="w-full md:flex md:items-center border-b border-blueTwo/30 pt-8 pb-4">
        <p className="text-base font-medium text-blueTwo md:w-[40%] pl-[10%]">
          Preferred Time:
        </p>
        <p className="pl-[10%] md:pl-0 text-base font-normal text-blueTwo md:w-[60%]">
          {state?.preferred_time}
        </p>
      </div>

      <div className="w-full md:flex md:items-center border-b border-blueTwo/30 pt-8 pb-4">
        <p className="text-base font-medium text-blueTwo md:w-[40%] pl-[10%]">
          Start Date:
        </p>
        <p className="pl-[10%] md:pl-0 text-base font-normal text-blueTwo md:w-[60%]">
          {state?.start_date &&
            new Date(state?.start_date)?.toISOString().substring(0, 10)}
        </p>
      </div>

      <div className="w-full md:flex md:items-center border-b border-blueTwo/30 pt-8 pb-4">
        <p className="text-base font-medium text-blueTwo md:w-[40%] pl-[10%]">
          Withdrawal Date:
        </p>
        <p className="pl-[10%] md:pl-0 text-base font-normal text-blueTwo md:w-[60%]">
          {state?.withdrawal_date &&
            new Date(state?.withdrawal_date)?.toISOString().substring(0, 10)}
        </p>
      </div>

      <div className="w-full md:flex md:items-center border-b border-blueTwo/30 pt-8 pb-4">
        <p className="text-base font-medium text-blueTwo md:w-[40%] pl-[10%]">
          Primary Source:
        </p>
        <p className="pl-[10%] md:pl-0 text-base font-normal text-blueTwo md:w-[60%]">
          {state?.primary_source}
        </p>
      </div>

      {state?.savings_frequency !== "Daily" && (
        <div className="w-full md:flex md:items-center pt-8 pb-4">
          <p className="text-base font-medium text-blueTwo md:w-[40%] pl-[10%]">
            {state?.savings_frequency === "Weekly" && "Day Of The Week:"}
            {state?.savings_frequency === "Monthly" && "Day Of The Month:"}
          </p>
          <p className="pl-[10%] md:pl-0 text-base font-normal text-blueTwo md:w-[60%]">
            {state?.day_of_the_week ?? state?.day_of_the_month}
          </p>
        </div>
      )}

      <ToggleButton
        toggleText={`I hereby agree that if i will forfeit the interest accrued to this
        savings if I fail to meet this target Amount 
        ${state?.target_amount}  by
        the set withdrawal data`}
        onChange={toggleOne}
      />

      <ToggleButton
        toggleText="I hereby agree to this: ‘’if you break this target before the
          withdrawal date you will lose all the interest and bear the 1%
          payment gateway charge for processing your deposit with this
          target"
        onChange={toggleTwo}
      />

      <div className="w-full mt-14 md:w-[40%] m-auto">
        <Button
          buttonText="Create Target"
          className="rounded-xl mb-10"
          size="lg"
          onClick={submitForm}
          isLoading={createTargetSavingsLoading}
          disabled={createTargetSavingsLoading}
        />
      </div>
    </div>
  );
};

export { TargetSavingsPreview };
