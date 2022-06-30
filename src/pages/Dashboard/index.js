import React from "react";
import { CircularIcon } from "../../atoms";

const Dashboard = () => {
  return (
    <>
      <div className="m-auto w-[60%] text-center mt-6 border border-blueTwo rounded-3xl py-2">
        <p className="font-normal text-base text-blueTwo">
          Congratulation, you are eligible to higher loan this month{" "}
          <span className="text-redOne font-semibold">View Status</span>
        </p>
      </div>

      <section className="grid grid-cols-4 mt-8 px-24">
        <CircularIcon icon="/assets/icons/loan.svg" />
        <CircularIcon icon="/assets/icons/wallet.svg" />
        <CircularIcon icon="/assets/icons/billPayment.svg" />
        <CircularIcon icon="/assets/icons/investments.svg" />
        <CircularIcon icon="/assets/icons/mobileTopUp.svg" />
        <CircularIcon icon="/assets/icons/rewards.svg" />
        <CircularIcon icon="/assets/icons/flights.svg" />
        <CircularIcon icon="/assets/icons/capivalHomes.svg" />
        <CircularIcon icon="/assets/icons/statement.svg" />
        <CircularIcon icon="/assets/icons/pension.svg" />
        <CircularIcon icon="/assets/icons/capivalTransfer.svg" />
        <CircularIcon icon="/assets/icons/otherBank.svg" />
        <CircularIcon icon="/assets/icons/debitCard.svg" />
        <CircularIcon icon="/assets/icons/history.svg" />
        <CircularIcon icon="/assets/icons/bets.svg" />
        <CircularIcon icon="/assets/icons/add.svg" />
      </section>

      <img src="/assets/icons/loanThree.svg" alt="" />
    </>
  );
};

export { Dashboard };
