import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { Button, FluentSelectTwo, SavingsInput } from "../../../../atoms";
import { TextArea } from "../../../../atoms/TextArea";
import { breakTargetSavingsAsync } from "../../../../slices/investments";
import { reasonForBreakingAsync } from "../../../../slices/utils";

const BreakSavings = ({
  toggleBreakSavingsModal,
  withdrawal_date,
  savingsId,
}) => {
  const dispatch = useDispatch();
  const navigate = useDispatch();

  const { reasonsForBreaking, reasonForBreakingLoading } = useSelector(
    (state) => state.utils
  );
  const { breakTargetSavingsLoading } = useSelector(
    (state) => state.investments
  );

  const [passwordShown, setPasswordShown] = useState(false);
  const togglePasswordShown = () => {
    setPasswordShown(!passwordShown);
  };

  const { handleSubmit, formState, control, register } = useForm();
  const { errors } = formState;

  useEffect(() => {
    dispatch(reasonForBreakingAsync());
  }, []);

  const submitForm = (values) => {
    const variables = {
      savingsId,
      values,
    };

    dispatch(breakTargetSavingsAsync(variables))
      .unwrap()
      .then((res) => {
        if (res?.status) {
          toast(res?.message);
          toggleBreakSavingsModal();
          navigate("dashboard/wallet/investments");
        }
      })
      .catch((err) => {
        // toast.error(err?.message);
        console.log(err?.message);
      });
  };

  return (
    <div className="px-10">
      <div className="flex justify-end mt-4" onClick={toggleBreakSavingsModal}>
        <img src="/assets/icons/closeTwo.svg" alt="closeButton" />
      </div>

      <p className="text-2xl py-2 text-blueTwo font-semibold uppercase">
        Break Target
      </p>
      <p className="text-sm text-blueTwo fon-normal">
        We made it simpler. If you break this target before {withdrawal_date}{" "}
        (withdrawal date), you will lose all the interest accrued.
      </p>

      <form onSubmit={handleSubmit(submitForm)}>
        <FluentSelectTwo
          control={control}
          name="reason"
          options={
            Array.isArray(reasonsForBreaking) &&
            reasonsForBreaking &&
            reasonsForBreaking?.map((reason) => {
              return {
                value: reason,
                label: reason,
              };
            })
          }
          label="Select Reason for breaking"
          isLoading={reasonForBreakingLoading}
          placeholder="I can not continue"
          className="mb-6"
          error={errors?.reason?.message}
          rules={{
            required: "Reason for breaking is required",
          }}
        />

        <TextArea
          label="Tell us why you are breaking."
          placeholder="I am no longer interested"
          className="mt-4"
          register={register("reason_details", {
            required: "Reason for breaking is required",
          })}
          error={errors?.reason_details?.message}
        />

        <div className="w-full relative">
          <i onClick={togglePasswordShown} className="">
            <img
              src={
                passwordShown
                  ? "/assets/icons/hide.svg"
                  : "/assets/icons/hide.svg"
              }
              onClick={togglePasswordShown}
              alt="visible"
              className="w-5 absolute z-30 cursor-pointer md:mt-[10%] ml-[89%]"
            />
          </i>
          <SavingsInput
            label="For Security Reasons, Please Enter Your Password"
            register={register("password", {
              required: "Password is required",
            })}
            className="mt-4"
            type={passwordShown ? "text" : "password"}
            error={errors?.password?.message}
          />
        </div>

        <div className="w-full md:w-[100%] mt-6 m-auto">
          <Button
            buttonText="Break"
            className="rounded-2xl mb-10"
            size="lg"
            isLoading={breakTargetSavingsLoading}
          />
        </div>
      </form>
    </div>
  );
};

export { BreakSavings };
