import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDebitCardsAsync } from "../../slices/debitCard";

import { DebitButton } from "./DebitButton";

const DebitCard = () => {
  const dispatch = useDispatch();
  const customerId = useSelector(
    (state) => state?.auth?.login?.user?.user?.customer_data?.CustomerID
  );

  // console.log(isLoading);

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
        />
        <p className="text-base font-normal text-blueTwo py-6 text-center md:text-left">
          Add your debit and credit cards to perform multiple transactions{" "}
        </p>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-3 place-content-center items-center mx-2 lg:mx-10  w-full">
        <DebitButton text="Update Card Limit" icon="/assets/icons/star.svg" />
        <DebitButton
          text="Add New Card"
          icon="/assets/icons/plus.svg"
          ifPrimary={false}
        />
        <DebitButton text="Block Card" icon="/assets/icons/block.svg" />
      </div>

      <div className="flex items-center justify-between bg-[#c2cce4] mt-8 py-10 px-20">
        <img
          src="/assets/icons/realAtmCard.svg"
          alt="realAtmCard"
          className="w-1/4"
        />
        <img
          src="/assets/icons/realAtmCard.svg"
          alt="realAtmCard"
          className="w-1/4"
        />
        <img
          src="/assets/icons/realAtmCard.svg"
          alt="realAtmCard"
          className="w-1/4"
        />
      </div>
    </>
  );
};

export { DebitCard };
