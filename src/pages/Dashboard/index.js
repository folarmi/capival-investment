import React from "react";
import { CircularIcon } from "../../atoms";

const Dashboard = () => {
  return (
    <>
      <section className="grid grid-cols-4 mt-8 px-24">
        <CircularIcon icon="/assets/icons/loan.svg" path="loans" />
        <CircularIcon icon="/assets/icons/wallet.svg" path="loans" />
        <CircularIcon icon="/assets/icons/billPayment.svg" path="loans" />
        <CircularIcon icon="/assets/icons/investments.svg" path="loans" />
        <CircularIcon icon="/assets/icons/mobileTopUp.svg" path="loans" />
        <CircularIcon icon="/assets/icons/rewards.svg" path="loans" />
        <CircularIcon icon="/assets/icons/flights.svg" path="loans" />
        <CircularIcon icon="/assets/icons/capivalHomes.svg" path="loans" />
        <CircularIcon icon="/assets/icons/statement.svg" path="loans" />
        <CircularIcon icon="/assets/icons/pension.svg" path="loans" />
        <CircularIcon icon="/assets/icons/capivalTransfer.svg" path="loans" />
        <CircularIcon icon="/assets/icons/otherBank.svg" path="loans" />
        <CircularIcon icon="/assets/icons/debitCard.svg" path="loans" />
        <CircularIcon icon="/assets/icons/history.svg" path="loans" />
        <CircularIcon icon="/assets/icons/bets.svg" path="loans" />
        <CircularIcon icon="/assets/icons/add.svg" path="loans" />
      </section>

      <img src="/assets/icons/loanThree.svg" alt="" />
    </>
  );
};

export { Dashboard };
