import React from "react";
import CurrencyFormat from "react-currency-format";
import { useLocation } from "react-router-dom";
import { Button } from "../../../../atoms";

const TermDepositDetail = () => {
  const location = useLocation();
  const transferDetails = location.state?.transferDetails;
  return (
    <div className="mt-4">
      <p className="text-2xl text-center py-6 text-blueTwo font-medium">
        Term Deposit
      </p>
      <p className="font-normal text-xl text-blueTwo pb-4 md:pb-8 pl-6 md:pl-12">
        Details
      </p>

      <main className=" bg-blueSix rounded-lg px-0 md:px-6 mx-7">
        <div className="w-full md:flex md:items-center border-b border-blueTwo/30 pt-8 pb-4">
          <p className="text-base font-medium text-blueTwo md:w-[40%] pl-[10%]">
            Investment Type:
          </p>
          <p className="pl-[10%] md:pl-0 text-base font-normal text-blueTwo md:w-[60%]">
            Term Deposit
          </p>
        </div>

        <div className="w-full md:flex md:items-center border-b border-blueTwo/30 pt-8 pb-4">
          <p className="text-base font-medium text-blueTwo md:w-[40%] pl-[10%]">
            Amount
          </p>
          <p className="pl-[10%] md:pl-0 text-base font-normal text-blueTwo md:w-[60%]">
            <CurrencyFormat
              value="60,000"
              displayType={"text"}
              thousandSeparator={true}
              prefix={"₦"}
            />
          </p>
        </div>

        <div className="w-full md:flex md:items-center border-b border-blueTwo/30 pt-8 pb-4">
          <p className="text-base font-medium text-blueTwo md:w-[40%] pl-[10%]">
            Duration
          </p>
          <p className="pl-[10%] md:pl-0 text-base font-normal text-blueTwo md:w-[60%]">
            180 days
          </p>
        </div>

        <div className="w-full md:flex md:items-center border-b border-blueTwo/30 pt-8 pb-4">
          <p className="text-base font-medium text-blueTwo md:w-[40%] pl-[10%]">
            Interest
          </p>
          <p className="pl-[10%] md:pl-0 text-base font-normal text-blueTwo md:w-[60%]">
            2.34% Per Annum
          </p>
        </div>

        <div className="w-full md:flex md:items-center border-b border-blueTwo/30 pt-8 pb-4 ">
          <p className="text-base font-medium text-blueTwo md:w-[40%] pl-[10%]">
            Maturity Amount:
          </p>
          <p className="pl-[10%] md:pl-0 text-base font-normal text-blueTwo md:w-[60%]">
            <CurrencyFormat
              value="610,000"
              displayType={"text"}
              thousandSeparator={true}
              prefix={"₦"}
            />
          </p>
        </div>

        <div className="w-full md:flex md:items-center pt-8 pb-4 ">
          <p className="text-base font-medium text-blueTwo md:w-[40%] pl-[10%]">
            Currency
          </p>
          <p className="pl-[10%] md:pl-0 text-base font-normal text-blueTwo md:w-[60%]">
            Naira
          </p>
        </div>
      </main>

      <div className="flex md:justify-center md:items-center mt-8">
        <Button
          size="sm"
          className="rounded-xl"
          buttonText="Request Investment Letter"
        />
      </div>
    </div>
  );
};

export { TermDepositDetail };
