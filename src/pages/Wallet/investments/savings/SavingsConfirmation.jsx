import React from "react";
import { Button } from "../../../../atoms";

const SavingsConfirmation = () => {
  const transactionDetails = [
    {
      id: "1",
      name: "Investment Type:",
      value: "Savings",
    },
    {
      id: "2",
      name: "How much would you like to invest?:",
      value: "N 100,000",
    },
    {
      id: "3",
      name: "Duration:",
      value: "6 months",
    },
    {
      id: "4",
      name: "Frequency:",
      value: "N20,000 every month",
    },
    {
      id: "5",
      name: "Interest:",
      value: "2.34% per annnum",
    },
    {
      id: "6",
      name: "Maturity Amount:",
      value: "N 100,000",
    },
    {
      id: "7",
      name: "Currency:",
      value: "Naira",
    },
  ];

  return (
    <div>
      <main className="my-10 bg-blueSix rounded-lg px-6 mx-7">
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

      <div className="m-auto w-1/3">
        <div class="flex justify-center items-center my-10">
          <input
            id="default-checkbox"
            type="checkbox"
            value=""
            className="w-4 h-4 text-[#246362] bg-gray-100 rounded border-gray-300 focus:ring-[#246362] dark:focus:ring-[#246362] dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
          />
          <label
            for="default-checkbox"
            className="ml-2 text-sm text-blueTwo font-medium"
          >
            I agree to Capival’s{" "}
            <span className="text-blueThree">Terms & Conditions</span>
          </label>
        </div>
        <Button buttonText="Continue" className="rounded-xl" size="lg" />
      </div>
    </div>
  );
};

export { SavingsConfirmation };
