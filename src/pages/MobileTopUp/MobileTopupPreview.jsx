import React, { useState } from "react";
import CurrencyFormat from "react-currency-format";
import { useLocation } from "react-router-dom";
import { Button } from "../../atoms";
import ModalPopup from "../../components/ModalPopup";
import { TransactionPin } from "./TransactionPin";

const MobileTopupPreview = () => {
  const { state } = useLocation();

  const [pinModal, setPinModal] = useState(false);

  const togglePinModal = () => {
    setPinModal(!pinModal);
  };

  return (
    <div className="mt-4">
      <p className="text-2xl text-center py-6 text-blueTwo font-medium">
        Mobile Top up
      </p>
      <p className="font-normal text-xl text-blueTwo pb-4 md:pb-8 pl-6 md:pl-12">
        Details
      </p>

      <main className=" bg-blueSix rounded-lg px-0 md:px-6 mx-7">
        <div className="w-full md:flex md:items-center border-b border-blueTwo/30 pt-8 pb-4">
          <p className="text-base font-medium text-blueTwo md:w-[40%] pl-[10%]">
            Network Provider
          </p>
          <p className="pl-[10%] md:pl-0 text-base font-normal text-blueTwo md:w-[60%]">
            {state?.billerId}
          </p>
        </div>

        <div className="w-full md:flex md:items-center border-b border-blueTwo/30 pt-8 pb-4">
          <p className="text-base font-medium text-blueTwo md:w-[40%] pl-[10%]">
            Category
          </p>
          <p className="pl-[10%] md:pl-0 text-base font-normal text-blueTwo md:w-[60%]">
            {state?.topup}
            {/* <CurrencyFormat
              value="1300"
              displayType={"text"}
              thousandSeparator={true}
              prefix={"₦"}
            /> */}
          </p>
        </div>

        <div className="w-full md:flex md:items-center border-b border-blueTwo/30 pt-8 pb-4">
          <p className="text-base font-medium text-blueTwo md:w-[40%] pl-[10%]">
            Beneficiary
          </p>
          <p className="pl-[10%] md:pl-0 text-base font-normal text-blueTwo md:w-[60%]">
            {state?.phone}
          </p>
        </div>

        <div className="w-full md:flex md:items-center pt-8 pb-4">
          <p className="text-base font-medium text-blueTwo md:w-[40%] pl-[10%]">
            Amount
          </p>
          <p className="pl-[10%] md:pl-0 text-base font-normal text-blueTwo md:w-[60%]">
            <CurrencyFormat
              value={state.amount}
              displayType={"text"}
              thousandSeparator={true}
              prefix={"₦"}
            />
          </p>
        </div>
      </main>

      <div className="flex m-auto w-[40%] md:justify-center rounded-md:items-center mt-6">
        <Button
          onClick={togglePinModal}
          className="rounded-[50px] w-3/4"
          buttonText="Pay"
        />
      </div>

      <ModalPopup
        modalHeight="300px"
        modalWidth="400px"
        children={
          <TransactionPin togglePinModal={togglePinModal} formValues={state} />
        }
        isOpen={pinModal}
      />
    </div>
  );
};

export { MobileTopupPreview };
