import React, { useState } from "react";
import CurrencyFormat from "react-currency-format";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Button } from "../../../../atoms";
import { ToggleButton } from "../../../../atoms/ToggleButton";
import { applyForCashBackLoanAsync } from "../../../../slices/investments";

const CashBackOfferPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { state } = useLocation();

  const loanDetails = state?.response;

  const { applyForCashBackLoanLoading } = useSelector(
    (state) => state.investments
  );

  const [agreeOne, setAgreeOne] = useState(false);

  const toggleOne = () => {
    setAgreeOne(() => !agreeOne);
  };

  const applyForCashBackLoan = () => {
    if (!agreeOne) {
      toast.error("You must agree to terms and conditions");
      return;
    }

    const variables = {
      loan_amount: loanDetails?.loan_amount,
      repayment_with_principal:
        state?.formValues?.variables?.repayment_with_principal,
    };

    const formVariables = {
      id: state?.formValues?.id,
      variables,
    };

    dispatch(applyForCashBackLoanAsync(formVariables))
      .unwrap()
      .then((res) => {
        if (res?.status === true) {
          toast(res?.message);
          navigate(`/dashboard/wallet/investments`);
        }
      })
      .catch((err) => {
        toast.error(err?.message);
      });
  };

  return (
    <div className="mt-4">
      <p className="text-2xl text-center py-6 text-blueTwo font-medium">
        Loan Offer
      </p>
      <p className="font-normal text-xl text-blueTwo pb-4 md:pb-8 pl-6 md:pl-12">
        Details
      </p>

      <main className=" bg-blueSix rounded-lg px-0 md:px-6 mx-7">
        <div className="w-full md:flex md:items-center border-b border-blueTwo/30 pt-8 pb-4">
          <p className="text-base font-medium text-blueTwo md:w-[40%] pl-[10%]">
            Loan Type:
          </p>
          <p className="pl-[10%] md:pl-0 text-base font-normal text-blueTwo md:w-[60%]">
            {loanDetails?.loan_type}
          </p>
        </div>

        <div className="w-full md:flex md:items-center border-b border-blueTwo/30 pt-8 pb-4">
          <p className="text-base font-medium text-blueTwo md:w-[40%] pl-[10%]">
            Loan Amount
          </p>
          <p className="pl-[10%] md:pl-0 text-base font-normal text-blueTwo md:w-[60%]">
            <CurrencyFormat
              value={loanDetails?.loan_amount}
              displayType={"text"}
              thousandSeparator={true}
              prefix={"₦"}
            />
          </p>
        </div>

        <div className="w-full md:flex md:items-center border-b border-blueTwo/30 pt-8 pb-4">
          <p className="text-base font-medium text-blueTwo md:w-[40%] pl-[10%]">
            Interest Rate
          </p>
          <p className="pl-[10%] md:pl-0 text-base font-normal text-blueTwo md:w-[60%]">
            <CurrencyFormat
              value={loanDetails?.interest_rate}
              displayType={"text"}
              thousandSeparator={true}
              prefix={"₦"}
            />
          </p>
        </div>

        <div className="w-full md:flex md:items-center border-b border-blueTwo/30 pt-8 pb-4">
          <p className="text-base font-medium text-blueTwo md:w-[40%] pl-[10%]">
            Interest (Monthly)
          </p>
          <p className="pl-[10%] md:pl-0 text-base font-normal text-blueTwo md:w-[60%]">
            {`${loanDetails?.monthly_interest}`}
          </p>
        </div>

        <div className="w-full md:flex md:items-center border-b border-blueTwo/30 pt-8 pb-4">
          <p className="text-base font-medium text-blueTwo md:w-[40%] pl-[10%]">
            Principal (Monthly)
          </p>
          <p className="pl-[10%] md:pl-0 text-base font-normal text-blueTwo md:w-[60%]">
            <CurrencyFormat
              value={loanDetails?.principal}
              displayType={"text"}
              thousandSeparator={true}
              prefix={"₦"}
            />
          </p>
        </div>

        <div className="w-full md:flex md:items-center border-b border-blueTwo/30 pt-8 pb-4 ">
          <p className="text-base font-medium text-blueTwo md:w-[40%] pl-[10%]">
            Total Monthly Repayment
          </p>
          <p className="pl-[10%] md:pl-0 text-base font-normal text-blueTwo md:w-[60%]">
            <CurrencyFormat
              value={loanDetails?.monthly_repayment}
              displayType={"text"}
              thousandSeparator={true}
              prefix={"₦"}
            />
          </p>
        </div>

        <div className="w-full md:flex md:items-center  pt-8 pb-4 ">
          <p className="text-base font-medium text-blueTwo md:w-[40%] pl-[10%]">
            Expected Repayment Date
          </p>
          <p className="pl-[10%] md:pl-0 text-base font-normal text-blueTwo md:w-[60%]">
            {loanDetails?.expected_repayment_date}
          </p>
        </div>
      </main>

      <div className="m-auto w-[60%] mt-10">
        <ToggleButton
          toggleText={loanDetails?.condition}
          onChange={toggleOne}
        />
      </div>

      <div className="flex m-auto w-[40%] md:justify-center rounded-md:items-center mt-6">
        <Button
          onClick={applyForCashBackLoan}
          className="rounded-[50px] w-3/4"
          buttonText="Apply for Cash Back Loan"
          isLoading={applyForCashBackLoanLoading}
        />
      </div>
    </div>
  );
};

export { CashBackOfferPage };

// {
//   "amount": "200",
//   "phone": "08139500243",
//   "topup": "Airtime",
//   "billerId": "mtn"
// }
