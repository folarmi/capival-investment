import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { WalletCard } from "../../components/WalletCard";
import walletBg from "../../icons/walletBg.svg";
import { TransactionHistory } from "../TransactionHistory";
import { getWalletBalanceAsync } from "../../slices/utils";

const Wallet = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const accountNumber = useSelector(
    (state) => state.auth.login?.user?.user?.accounts?.AccountNo
  );

  const { walletBalance } = useSelector((state) => state.utils);

  const AccountBalance = useSelector(
    (state) => state.auth.login?.user?.user?.accounts?.AccountBalance
  );

  console.log(walletBalance);
  const goToWallet = () => {
    navigate("/dashboard/wallet/details");
  };

  const getWalletBalanceFnc = () => {
    dispatch(getWalletBalanceAsync());
  };

  useEffect(() => {
    getWalletBalanceFnc();
  }, []);

  return (
    <>
      <div className="flex justify-center items-center mt-12 mx-4">
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
      </div>

      <section className="">
        <TransactionHistory />
      </section>
    </>
  );
};

export { Wallet };
