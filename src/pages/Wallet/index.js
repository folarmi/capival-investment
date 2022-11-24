import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { WalletCard } from "../../components/WalletCard";
import walletBg from "../../icons/walletBg.svg";
import { TransactionHistory } from "../TransactionHistory";
import { getWalletBalanceAsync } from "../../slices/utils";
import { toast } from "react-toastify";
import ModalPopup from "../../components/ModalPopup";
import { AccountDetails } from "./AccountDetails";

const Wallet = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [walletBalance, setWalletBalance] = useState("");
  const [detailsModal, setDetailsModal] = useState(false);

  const accountNumber = useSelector(
    (state) => state.auth.login?.user?.user?.accounts?.AccountNo
  );
  const { getWalletBalanceLoading } = useSelector((state) => state.utils);

  const toggleDetailsModal = () => {
    setDetailsModal(!detailsModal);
  };

  const goToWallet = () => {
    navigate("/dashboard/wallet/details");
  };

  const getWalletBalanceFnc = () => {
    dispatch(getWalletBalanceAsync())
      .unwrap()
      .then((res) => {
        if (res?.status === true) {
          setWalletBalance(res?.balance);
        }
      })
      .catch((err) => {
        toast.error(err?.message);
      });
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
            amount={walletBalance}
            onClick={goToWallet}
            bgImage={walletBg}
            ifAccountNumber
            accountNumber={accountNumber}
          />

          <section className="flex items-center mt-2">
            <div
              className="cursor-pointer w-full mt-2"
              onClick={toggleDetailsModal}
            >
              <p className="text-sm font-medium text-blueTwo text-center">
                Fund Wallet
              </p>
            </div>
          </section>
        </div>
      </div>

      <section className="">
        <TransactionHistory />
      </section>

      <ModalPopup
        modalHeight="300px"
        modalWidth="400px"
        children={<AccountDetails toggleDetailsModal={toggleDetailsModal} />}
        isOpen={detailsModal}
      />
    </>
  );
};

export { Wallet };
