import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDebitCardsAsync } from "../../slices/debitCard";

import { DebitButton } from "./DebitButton";
import { PaystackHook } from "./PayStackHook";
import ModalPopup from "../../components/ModalPopup";
import { RequestCapivalCard } from "./RequestCapivalCard";

const DebitCard = () => {
  const dispatch = useDispatch();
  const { allDebitCards } = useSelector((state) => state?.debitCard);

  const [openModal, setOpenModal] = useState(false);

  const toggleRequestCardModal = () => {
    setOpenModal(!openModal);
  };

  useEffect(() => {
    dispatch(getDebitCardsAsync());
  }, []);

  return (
    <>
      <div className="flex flex-col justify-between items-center mt-8 mx-4">
        <img
          src="/assets/images/atmCard.svg"
          alt="atmCard"
          className="w-full md:w-1/3"
          loading="lazy"
        />
        <p className="text-base font-normal text-blueTwo py-6 text-center md:text-left">
          Add your debit and credit cards to perform multiple transactions{" "}
        </p>
      </div>

      <div className=" flex flex-col md:flex-row items-center justify-center mx-2 w-full">
        {/* <DebitButton text="View Debit Card" icon="/assets/icons/star.svg" /> */}
        <DebitButton
          text="Request Capival Card"
          icon="/assets/icons/star.svg"
          onClick={toggleRequestCardModal}
        />
        <PaystackHook />
      </div>

      <div className="flex flex-wrap items-center justify-between bg-[#c2cce4] mt-8 py-10 px-4 lg:px-20">
        {allDebitCards &&
          allDebitCards?.map((card) => {
            return (
              <div className="atm-bg relative mb-5">
                <p className="absolute top-[37%] left-[50%]">{card?.last4}</p>
              </div>
            );
          })}
      </div>

      <ModalPopup
        modalHeight="250px"
        modalWidth="300px"
        children={
          <RequestCapivalCard toggleRequestCardModal={toggleRequestCardModal} />
        }
        isOpen={openModal}
      />
    </>
  );
};

export { DebitCard };
