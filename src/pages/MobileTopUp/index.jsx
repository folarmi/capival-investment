import React from "react";
import { useNavigate } from "react-router-dom";
import { Button, SavingsInput } from "../../atoms";
import WalletDetailsHeader from "../Wallet/WalletDetailsHeader";

const MobileTopUp = () => {
  const navigate = useNavigate();

  const goToConfirmationPage = () => {
    navigate("/dashboard/mobile-top-up/confirm");
  };

  const selectedAmount = [
    {
      id: "1",
      amount: "N 100.00",
    },
    {
      id: "2",
      amount: "N 200.00",
    },
    {
      id: "3",
      amount: "N 500.00",
    },
    {
      id: "3",
      amount: "N 1000.00",
    },
  ];

  return (
    <div className="mt-8">
      <WalletDetailsHeader ifTransaction={false} />

      <div className="grid grid-cols-4 m-auto w-[50%] -gap-10 mt-8">
        <img src="/assets/images/mtn.svg" alt="mtn" className="w-20" />
        <img src="/assets/images/glo.svg" alt="glo" className="w-20" />
        <img src="/assets/images/airtel.svg" alt="airtel" className="w-20" />
        <img
          src="/assets/images/nineMobile.svg"
          alt="nineMobile"
          className="w-20"
        />
      </div>

      <form className="grid grid-cols-2 gap-10 mt-12 m-auto w-[70%]">
        <div>
          <SavingsInput placeholder="Mobile Number" />
        </div>
        <div>
          <SavingsInput placeholder="Amount" />
        </div>
      </form>

      <div className="grid grid-cols-4 gap-4 mt-12 m-auto w-[70%]">
        {selectedAmount.map((item) => {
          return (
            <div className="rounded-lg p-4 bg-[#afbbdb]" key={item?.id}>
              <p className="font-semibold text-base text-blueTwo flex items-center justify-center">
                {item?.amount}
              </p>
            </div>
          );
        })}
      </div>

      <div className="w-[30%] m-auto justify-self-center mt-12">
        <Button
          buttonText="Continue"
          className="rounded-xl"
          size="lg"
          onClick={goToConfirmationPage}
        />
      </div>
    </div>
  );
};

export { MobileTopUp };
