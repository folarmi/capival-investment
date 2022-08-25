import React from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

import { WalletCard } from "../../components/WalletCard";
import walletBg from "../../icons/walletBg.svg";
import investmentBg from "../../icons/investmentBg.svg";
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

  const goToInvestments = () => {
    navigate("/dashboard/wallet/investments");
  };

  const goToLoansPage = () => {
    navigate("/dashboard/loans");
  };

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
