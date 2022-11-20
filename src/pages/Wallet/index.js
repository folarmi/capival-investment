import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

import { WalletCard } from "../../components/WalletCard";
import walletBg from "../../icons/walletBg.svg";
import { TransactionHistory } from "../TransactionHistory";

const Wallet = () => {
  const navigate = useNavigate();

  const accountNumber = useSelector(
    (state) => state.auth.login?.user?.user?.accounts?.AccountNo
  );

  const AccountBalance = useSelector(
    (state) => state.auth.login?.user?.user?.accounts?.AccountBalance
  );

  const goToWallet = () => {
    navigate("/dashboard/wallet/details");
  };

  // const goToLoansPage = () => {
  //   navigate("/dashboard/loans");
  // };

  return (
    <>
      <div className="flex justify-center items-center mt-12 mx-4">
        {/* <WalletCard
          title="Wallet"
          ifAccountName
          cardName="Account Name"
          amount="50,000.25"
          onClick={goToInvestments}
          bgImage={investmentBg}
        /> */}

        <div>
          <WalletCard
            title="Wallet"
            ifAccountName
            cardName="Account Name"
            amount={AccountBalance}
            onClick={goToWallet}
            bgImage={walletBg}
            ifAccountNumber
            accountNumber={accountNumber}
          />

          <section className="flex items-center mt-2">
            <div className="cursor-pointer">
              <p className="text-sm font-medium text-blueTwo">Fund Wallet</p>
            </div>
          </section>
        </div>

        {/* <WalletCard
          title="Wallet"
          ifAccountName
          cardName="Account Name"
          amount="50,000.25"
          onClick={goToLoansPage}
          bgImage={walletBg}
          ifAccountNumber
          accountNumber="0046378932"
        /> */}
      </div>

      <section className="">
        <TransactionHistory />
      </section>
    </>
  );
};

export { Wallet };
