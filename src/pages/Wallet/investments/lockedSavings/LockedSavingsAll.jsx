import React from "react";
import CurrencyFormat from "react-currency-format";
import { ProgressBar } from "../../../../components";
import { lockedSavingsHeader } from "../../../../utils/data";

const LockedSavingsAll = () => {
  const sampleActiveLockedSavings = [
    {
      id: "1",
      amountLocked: "N100,000",
      interest: "1234.50",
      payBackDate: "30-Dec-2022",
    },
    {
      id: "2",
      amountLocked: "N100,000",
      interest: "1234.50",
      payBackDate: "30-Dec-2022",
    },
  ];

  return (
    <div className="w-full ">
      <main className="hidden bg-blueTwo/10 md:block mx-4 md:mx-7 mt-4 rounded-xl">
        <section className="bg-blueTwo/20 rounded-xl py-4 overflow-scroll">
          <div className="grid grid-cols-3 gap-5 items-center">
            {lockedSavingsHeader.map((header) => {
              return (
                <div>
                  <p className="font-medium whitespace-nowrap text-base text-blueTwo px-6 md:w-[20%]">
                    {header?.name}
                  </p>
                </div>
              );
            })}
          </div>
        </section>

        <div className="bg-blueTwo/10 overflow-scroll">
          {sampleActiveLockedSavings?.length === 0 ? (
            <p className="text-center my-10 text-blueTwo text-xl">
              No Target Savings
            </p>
          ) : (
            <>
              {" "}
              {sampleActiveLockedSavings?.map((item) => {
                return (
                  <div className="mt-4 mb-4 whitespace-nowrap lg:grid grid-cols-3 bg-blueTwo/5 py-3">
                    <p className="text-base text-orange font-medium pl-6">
                      <CurrencyFormat
                        value={item?.amountLocked}
                        displayType={"text"}
                        thousandSeparator={true}
                        prefix={"₦"}
                      />
                    </p>
                    <p className="text-base text-blueTwo font-medium pl-6">
                      {/* <CurrencyFormat
                        value={item?.amountSaved}
                        displayType={"text"}
                        thousandSeparator={true}
                        prefix={"₦"}
                      /> */}
                      {item?.interest}
                    </p>
                    <p className="text-base text-blueTwo font-medium pl-6">
                      {item?.payBackDate}
                    </p>
                  </div>
                );
              })}
            </>
          )}
        </div>
      </main>
    </div>
  );
};

export { LockedSavingsAll };
