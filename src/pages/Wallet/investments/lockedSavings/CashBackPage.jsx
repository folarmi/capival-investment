import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";

import { Button } from "../../../../atoms";
import { AmountInput } from "../../../../atoms/AmountInput";
import {
  getLoanOfferAsync,
  checkLoanEligibilityAsync,
} from "../../../../slices/investments";
import { toast } from "react-toastify";

const CashBackPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { state } = useLocation();

  const { checkLoanEligibility, getLoanOfferLoading } = useSelector(
    (state) => state.investments
  );

  const validationSchema = Yup.object().shape({
    loan_amount: Yup.string()
      //   .typeError("Loan amount must be a number")
      //   .positive("Loan amount must be a number")
      .required("Loan Amount is required")
      .max(
        checkLoanEligibility?.maxAmountEligible,
        `Maximum loan amount is ₦${checkLoanEligibility?.maxAmountEligible}`
      ),
    withPrincipal: Yup.string().required("You must select at least one option"),
  });

  const { register, handleSubmit, formState, control } = useForm({
    resolver: yupResolver(validationSchema),
  });
  const { errors } = formState;

  console.log(errors);

  useEffect(() => {
    dispatch(checkLoanEligibilityAsync(state));
  }, []);

  const submitForm = (values) => {
    let formattedAmount = values?.loan_amount.slice(1);

    const variables = {
      loan_amount: formattedAmount,
      repayment_with_principal: values?.withPrincipal === "true" ? true : false,
    };
    const id = state;

    const formVariables = {
      id,
      variables,
    };

    dispatch(getLoanOfferAsync(formVariables))
      .unwrap()
      .then((res) => {
        if (res?.status === true) {
          navigate(
            `/dashboard/wallet/investments/saving-type/locked-savings/${state}/cashback_loan/offer`,
            {
              state: {
                formValues: formVariables,
                response: res.data,
              },
            }
          );
        }
      })
      .catch((err) => {
        toast.error(err?.message);
      });
  };

  return (
    <div className="mt-4 lg:mt-10 m-auto w-[90%] md:w-[80%] lg:w-[60%]">
      <form onSubmit={handleSubmit(submitForm)} className="mt-4 px-2 lg:px-10">
        <AmountInput
          control={control}
          name="loan_amount"
          label={`Loan Amount (Limit ₦${checkLoanEligibility?.maxAmountEligible})`}
          placeholder="N 10,000.00"
          error={errors?.loan_amount?.message}
          rules={{
            max: 8999,
          }}
        />

        <div>
          <div className="flex items-center mt-4">
            <input
              id="disabled-radio-1"
              type="radio"
              value={true}
              {...register("withPrincipal")}
              className="w-4 h-4 text-blueTwo bg-gray-100 border-gray-300  dark:bg-gray-700 dark:border-gray-600"
            />
            <label
              htmlFor="disabled-radio-1"
              className="ml-2 text-sm font-medium text-blueTwo"
            >
              Pay Monthly Interest with Principal
            </label>
            {/* {errors?.withPrincipal && (
              <span className="text-red-500 text-xs">
                {errors?.withPrincipal}
              </span>
            )} */}
          </div>

          <div className="flex items-center mt-4">
            <input
              id="disabled-radio-2"
              type="radio"
              value={false}
              {...register("withPrincipal")}
              className="w-4 h-4 text-blueTwo bg-gray-100 border-gray-300  dark:bg-gray-700 dark:border-gray-600"
            />
            <label
              htmlFor="disabled-radio-2"
              className="ml-2 text-sm font-medium text-blueTwo"
            >
              Pay Monthly Interest without Principal
            </label>
            {/* {errors?.withPrincipal && (
              <span className="text-red-500 text-xs">
                {errors?.withPrincipal}
              </span>
            )} */}
          </div>
        </div>

        <div className="w-full mt-14 md:w-[40%] m-auto">
          <Button
            buttonText="Continue"
            className="rounded-xl mb-10"
            size="lg"
            isLoading={getLoanOfferLoading}
          />
        </div>
      </form>
    </div>
  );
};

export { CashBackPage };
