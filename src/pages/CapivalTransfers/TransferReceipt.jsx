import React from "react";
import CurrencyFormat from "react-currency-format";
import { useLocation } from "react-router-dom";

const TransferReceipt = () => {
  const location = useLocation();
  const transferDetails = location.state?.transferDetails;
  return (
    <div className="mt-4 md:mt-8">
      <p className="text-2xl text-center py-6 text-blueTwo font-medium">
        Transaction Receipt
      </p>
      <p className="font-normal text-xl text-blueTwo pb-4 md:pb-8 pl-6 md:pl-12">
        Transfer Details
      </p>

      <main className=" bg-blueSix rounded-lg px-0 md:px-6 mx-7">
        <div className="w-full md:flex md:items-center pt-8 pb-4 border-b border-blueTwo/30">
          <p className="text-base font-medium text-blueTwo md:w-[40%] pl-[10%]">
            Bank
          </p>
          <p className="pl-[10%] md:pl-0 font-normal text-blueTwo md:w-[60%]">
            {transferDetails?.bank}
          </p>
        </div>

        <div className="w-full md:flex md:items-center pt-8 pb-4 border-b border-blueTwo/30">
          <p className="text-base font-medium text-blueTwo md:w-[40%] pl-[10%]">
            Beneficiary
          </p>
          <p className="pl-[10%] md:pl-0 font-normal text-blueTwo md:w-[60%]">
            {transferDetails?.beneficiary}
          </p>
        </div>

        <div className="w-full md:flex md:items-center pt-8 pb-4 border-b border-blueTwo/30">
          <p className="text-base font-medium text-blueTwo md:w-[40%] pl-[10%]">
            Sender
          </p>
          <p className="pl-[10%] md:pl-0 font-normal text-blueTwo md:w-[60%]">
            {transferDetails?.sender}
          </p>
        </div>

        <div className="w-full md:flex md:items-center pt-8 pb-4 border-b border-blueTwo/30">
          <p className="text-base font-medium text-blueTwo md:w-[40%] pl-[10%]">
            Amount
          </p>
          <p className="pl-[10%] md:pl-0 font-normal text-blueTwo md:w-[60%]">
            <CurrencyFormat
              value={transferDetails?.amount}
              displayType={"text"}
              thousandSeparator={true}
              prefix={"₦"}
            />
          </p>
        </div>

        <div className="w-full md:flex md:items-center pt-8 pb-4 border-b border-blueTwo/30">
          <p className="text-base font-medium text-blueTwo md:w-[40%] pl-[10%]">
            Narration
          </p>
          <p className="pl-[10%] md:pl-0 font-normal text-blueTwo md:w-[60%]">
            {transferDetails?.narration}
          </p>
        </div>

        <div className="w-full md:flex md:items-center pt-8 pb-4 ">
          <p className="text-base font-medium text-blueTwo md:w-[40%] pl-[10%]">
            Reference Number
          </p>
          <p className="pl-[10%] md:pl-0 font-normal text-blueTwo md:w-[60%]">
            {transferDetails?.ref_number}
          </p>
        </div>
      </main>
    </div>
  );
};

export { TransferReceipt };
