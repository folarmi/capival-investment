import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import { CircularIcon } from "../../atoms";
import ModalPopup from "../../components/ModalPopup";
import { checkTransactionPinStatusAsync } from "../../slices/transactionHistory";
import { getDashboardFeaturesAsync } from "../../slices/utils";
import { SetTransactionPin } from "./SetTransactionPin";
import { responsive } from "../../utils/data";

const Dashboard = () => {
  const dispatch = useDispatch();
  const { dashboardFeatures } = useSelector((state) => state.utils);

  const [showTransactionPinModal, setShowTransactionPinModal] = useState(false);
  const [transactionPinStatus, setTransactionPinStatus] = useState("");

  const toggleTransactionPinModal = () => {
    setShowTransactionPinModal(!showTransactionPinModal);
  };

  const getTransactionPinStatus = async () => {
    const data = await dispatch(checkTransactionPinStatusAsync());
    setTransactionPinStatus(data?.payload?.status);
  };

  useEffect(() => {
    getTransactionPinStatus();
    dispatch(getDashboardFeaturesAsync());
  }, []);

  useEffect(() => {
    if (transactionPinStatus === false) {
      setShowTransactionPinModal(true);
    } else {
      setShowTransactionPinModal(false);
    }
  }, [showTransactionPinModal, transactionPinStatus]);

  return (
    <>
      <section className="grid grid-cols-2 place-items-center md:grid-cols-3 lg:grid-cols-4 mt-8 px-6 md:px-10 lg:px-24">
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
        <CircularIcon
          icon="/assets/icons/statement.svg"
          path="generate-statement"
        />
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

      <img src="/assets/icons/loanThree.svg" alt="" loading="lazy" />

      {/* Carousel begins */}
      <div
        style={{
          backgroundColor: "#e5f0f8",
        }}
      >
        <section className="mx-12 my-10">
          <p className="text-xl text-blueTwo leading-7 font-medium py-6">
            Features
          </p>
          <Carousel
            containerClass="w-full"
            responsive={responsive}
            showDots={true}
            autoPlay
          >
            {dashboardFeatures !== "" &&
              Array.isArray(dashboardFeatures) &&
              dashboardFeatures?.map((flier) => {
                return (
                  <div className="w-full pb-10">
                    <img
                      src={flier.image}
                      className="w-[446px] h-[217px] object-cover rounded-xl"
                    />
                  </div>
                );
              })}
          </Carousel>
        </section>
      </div>

      <div
        style={{
          backgroundColor: "#e5f0f8",
        }}
      >
        <section className="mx-12 my-10">
          <p className="text-xl text-blueTwo leading-7 font-medium py-6">
            Movies Showing now
          </p>
          <Carousel
            containerClass="w-full"
            responsive={responsive}
            showDots={true}
            autoPlay
          >
            <div>
              <img
                src="/assets/images/pitch.jpeg"
                className="w-[446px] h-[217px] object-cover rounded-xl"
              />
            </div>
            <div>
              <img
                src="/assets/images/vivo.jpeg"
                className="w-[446px] h-[217px] object-cover rounded-xl"
              />
            </div>
            <div>
              <img
                src="/assets/images/pitch.jpeg"
                className="w-[446px] h-[217px] object-cover rounded-xl"
              />
            </div>
            <div>
              <img
                src="/assets/images/vivo.jpeg"
                className="w-[446px] h-[217px] object-cover rounded-xl"
              />
            </div>
          </Carousel>
        </section>
      </div>

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

// {
//   "account_number": "34382",
//   "account_name": "test account",
//   "amount": "300"
// }
