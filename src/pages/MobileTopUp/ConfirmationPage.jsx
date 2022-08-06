import React from "react";
import { Button } from "../../atoms";

const ConfirmationPage = () => {
  const transactionDetails = [
    {
      id: "1",
      name: "Network Provider:",
      value: "MTN",
    },
    {
      id: "2",
      name: "Beneficiary:",
      value: "09027060760",
    },
    {
      id: "3",
      name: "Amount:",
      value: "N 1,000.00",
    },
  ];

  return (
    <div className="mt-8">
      <p className="font-normal text-xl text-blueTwo pl-12 pb-1">
        Transaction Details
      </p>

      <main className=" bg-blueSix rounded-lg px-6 mx-7">
        {transactionDetails?.map((item) => {
          return (
            <div
              className="w-full flex items-center pt-8 pb-4 border-b border-blueTwo/30"
              key={item?.id}
            >
              <p className="text-base font-normal text-blueTwo w-[40%] pl-[10%]">
                {item?.name}
              </p>
              <p className="text-base font-normal text-blueTwo w-[60%]">
                {item?.value}
              </p>
            </div>
          );
        })}
      </main>

      <div className="w-[30%] m-auto justify-self-center mt-12">
        <Button buttonText="Pay" className="rounded-xl" size="lg" />
      </div>
    </div>
  );
};

export { ConfirmationPage };
