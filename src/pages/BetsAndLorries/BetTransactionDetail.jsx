import React from "react";
import { Button } from "../../atoms";

const BetTransactionDetail = () => {
  const transactionDetails = [
    {
      id: "1",
      name: "Biller:",
      value: "SportyBet",
    },
    {
      id: "2",
      name: "Product:",
      value: "Gaming",
    },
    {
      id: "3",
      name: "Amount:",
      value: "N1000",
    },
    {
      id: "4",
      name: "Reference No",
      value: "64648268",
    },
  ];

  return (
    <>
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

      <div className="w-[30%] m-auto justify-self-center mt-12">
        <Button buttonText="Pay" className="rounded-xl" size="lg" />
      </div>
    </>
  );
};

export { BetTransactionDetail };
