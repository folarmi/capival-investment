import React from "react";
import CurrencyFormat from "react-currency-format";
import { useLocation, useNavigate } from "react-router-dom";
import { Button } from "../../../../atoms";

const LockedSavingsDetails = () => {
  const navigate = useNavigate();
  const { state } = useLocation();

  const goToCashBackpage = () => {
    navigate(
      `/dashboard/wallet/investments/saving-type/locked-savings/${state?.id}/cashback_loan`,
      {
        state: state.id,
      }
    );
  };

  return (
    <div className="mt-4">
      <p className="text-2xl text-center py-6 text-blueTwo font-medium">
        Safe Lock
      </p>
      <p className="font-normal text-xl text-blueTwo pb-4 md:pb-8 pl-6 md:pl-12">
        Details
      </p>

      <main className=" bg-blueSix rounded-lg px-0 md:px-6 mx-7">
        <div className="w-full md:flex md:items-center border-b border-blueTwo/30 pt-8 pb-4">
          <p className="text-base font-medium text-blueTwo md:w-[40%] pl-[10%]">
            Investment Type:
          </p>
          <p className="pl-[10%] md:pl-0 text-base font-normal text-blueTwo md:w-[60%]">
            Safe Lock
          </p>
        </div>

        <div className="w-full md:flex md:items-center border-b border-blueTwo/30 pt-8 pb-4">
          <p className="text-base font-medium text-blueTwo md:w-[40%] pl-[10%]">
            Amount
          </p>
          <p className="pl-[10%] md:pl-0 text-base font-normal text-blueTwo md:w-[60%]">
            <CurrencyFormat
              value={state?.amountLocked}
              displayType={"text"}
              thousandSeparator={true}
              prefix={"₦"}
            />
          </p>
        </div>

        <div className="w-full md:flex md:items-center border-b border-blueTwo/30 pt-8 pb-4">
          <p className="text-base font-medium text-blueTwo md:w-[40%] pl-[10%]">
            Interest Earned
          </p>
          <p className="pl-[10%] md:pl-0 text-base font-normal text-blueTwo md:w-[60%]">
            <CurrencyFormat
              value={state?.interest_earned}
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
            {`${state?.interest_rate}`}
          </p>
        </div>

        <div className="w-full md:flex md:items-center border-b border-blueTwo/30 pt-8 pb-4">
          <p className="text-base font-medium text-blueTwo md:w-[40%] pl-[10%]">
            Payback Date
          </p>
          <p className="pl-[10%] md:pl-0 text-base font-normal text-blueTwo md:w-[60%]">
            {`${state?.payBackDate}`}
          </p>
        </div>

        <div className="w-full md:flex md:items-center pt-8 pb-4 ">
          <p className="text-base font-medium text-blueTwo md:w-[40%] pl-[10%]">
            Status
          </p>
          <p className="pl-[10%] md:pl-0 text-base font-normal text-blueTwo md:w-[60%]">
            Locked
          </p>
        </div>
      </main>

      <p className="flex m-auto w-[40%] md:justify-center text-base text-blueTwo leading-9 pt-20">
        With your locked savings, you can apply for you can apply for urgent not
        exceeding 70% of the amount locked.
      </p>

      <div className="flex m-auto w-[40%] md:justify-center rounded-md:items-center mt-6">
        <Button
          onClick={goToCashBackpage}
          className="rounded-[50px] w-3/4"
          buttonText="Apply for Cash Back Loan"
        />
      </div>
    </div>
  );
};

export { LockedSavingsDetails };
