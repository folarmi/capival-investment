import React from "react";
import WalletDetailsHeader from "./WalletDetailsHeader";

const WalletTransactionDetails = () => {
  const transactionDetails = [
    {
      id: "1",
      name: "Date:",
      value: " 21/08/2022",
    },
    {
      id: "2",
      name: "Interest Rate:",
      value: "0%",
    },
    {
      id: "3",
      name: "Status:",
      value: "Success",
    },
    {
      id: "4",
      name: "Amount:",
      value: "N 52, 250.00",
    },
    {
      id: "5",
      name: "Recipient:",
      value: "Adelani Ifeanyi",
    },
    {
      id: "6",
      name: "Note:",
      value: "Chop Life",
    },
  ];

  return (
    <div className="mt-8">
      <WalletDetailsHeader />

      <main className="my-10 bg-blueSix rounded-lg px-6 mx-7">
        {/* <section> */}
        {transactionDetails?.map((item) => {
          return (
            <div
              className="w-full flex items-center pt-8 pb-4 border-b border-blueTwo/30"
              key={item?.id}
            >
              <p className="text-base font-normal text-blueTwo w-[30%] pl-[10%]">
                {item?.name}
              </p>
              <p className="text-base font-normal text-blueTwo w-[70%]">
                {item?.value}
              </p>
            </div>
          );
        })}
      </main>
    </div>
  );
};

export { WalletTransactionDetails };
