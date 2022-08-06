import React from "react";
import { Button } from "../../../../atoms";

const Confirmation = () => {
  const transactionDetails = [
    {
      id: "1",
      name: "Investment Type:",
      value: "Fixed Deposit",
    },
    {
      id: "2",
      name: "Base Amount:",
      value: "N 100,000",
    },
    {
      id: "3",
      name: "Interest:",
      value: "2.34% per annnum",
    },
    {
      id: "4",
      name: "Maturity Amount:",
      value: "N 100,000",
    },
    {
      id: "5",
      name: "Start Date:",
      value: "26th April 2022",
    },
    {
      id: "6",
      name: "End Date:",
      value: "26th April 2022",
    },
  ];

  return (
    <div>
      <main className="my-10 bg-blueSix rounded-lg px-6 mx-7">
        {/* <section> */}
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

export { Confirmation };
