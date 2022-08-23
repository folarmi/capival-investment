import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { CircularIcon } from "../../atoms";
import ModalPopup from "../../components/ModalPopup";
import { SetTransactionPin } from "./SetTransactionPin";

const Dashboard = () => {
  const isTransactionPinSet = useSelector(
    (state) => state.auth.login?.user?.authorisation?.trans_pin
  );

  // const test = useSelector((state) => state.auth.login?.user?.authorisation);

  const [showTransactionPinModal, setShowTransactionPinModal] = useState(false);

  const toggleTransactionPinModal = () => {
    setShowTransactionPinModal(!showTransactionPinModal);
  };

  useEffect(() => {
    if (isTransactionPinSet === false) {
      setShowTransactionPinModal(true);
    } else {
      setShowTransactionPinModal(false);
    }
  }, [showTransactionPinModal]);

  return (
    <>
      <section className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-8 px-6 md:px-10 lg:px-24">
        <CircularIcon icon="/assets/icons/loan.svg" path="loans" />
        <CircularIcon icon="/assets/icons/wallet.svg" path="wallet" />
        <CircularIcon
          icon="/assets/icons/billPayment.svg"
          path="bill-payment"
        />
        <CircularIcon
          icon="/assets/icons/investments.svg"
          path="wallet/investments"
        />
        <CircularIcon
          icon="/assets/icons/mobileTopUp.svg"
          path="Airtime__Data"
        />
        {/* <CircularIcon icon="/assets/icons/rewards.svg" path="rewards" /> */}
        {/* <CircularIcon icon="/assets/icons/flights.svg" path="loans" /> */}
        {/* <CircularIcon
          icon="/assets/icons/capivalHomes.svg"
          path="capival-homes"
        /> */}
        <CircularIcon icon="/assets/icons/statement.svg" path="loans" />
        {/* <CircularIcon icon="/assets/icons/pension.svg" path="capival-pension" /> */}
        <CircularIcon
          icon="/assets/icons/capivalTransfer.svg"
          path="capival-transfers"
        />
        <CircularIcon icon="/assets/icons/otherBank.svg" path="other-banks" />
        <CircularIcon icon="/assets/icons/debitCard.svg" path="debit-card" />
        <CircularIcon
          icon="/assets/icons/history.svg"
          path="transaction-history"
        />
        <CircularIcon icon="/assets/icons/bets.svg" path="bets-and-lotteries" />
        {/* <CircularIcon icon="/assets/icons/add.svg" path="loans" /> */}
      </section>

      <img src="/assets/icons/loanThree.svg" alt="" />
      <ModalPopup
        modalHeight="300px"
        modalWidth="400px"
        children={
          <SetTransactionPin
            toggleTransactionPinModal={toggleTransactionPinModal}
          />
        }
        isOpen={showTransactionPinModal}
      />
    </>
  );
};

export { Dashboard };
