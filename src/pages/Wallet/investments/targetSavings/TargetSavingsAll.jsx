import React from "react";
import CurrencyFormat from "react-currency-format";
import { ProgressBar } from "../../../../components";
import { targetSavingsHeader } from "../../../../utils/data";

const TargetSavingsAll = () => {
  const sampleActiveTargetSavings = [
    {
      id: "1",
      title: "Rent",
      target: "N50,000",
      amountSaved: "N100,000",
      percent: "60",
      daysLeft: "60 Days",
    },
    {
      id: "2",
      title: "Rent",
      target: "N50,000",
      amountSaved: "N100,000",
      percent: "60",
      daysLeft: "60 Days",
    },
  ];

  return (
    <div>
      <main className="hidden md:block mx-4 md:mx-7 mt-4 bg-blueTwo/10 rounded-xl">
        <section className="bg-blueTwo/20 rounded-xl py-4 overflow-scroll">
          <div className="grid grid-cols-5 gap-5 items-center">
            {targetSavingsHeader.map((header) => {
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
          {sampleActiveTargetSavings?.length === 0 ? (
            <p className="text-center my-10 text-blueTwo text-xl">
              No Target Savings
            </p>
          ) : (
            <>
              {" "}
              {sampleActiveTargetSavings?.map((item) => {
                return (
                  <div className="mt-4 mb-4 whitespace-nowrap lg:grid grid-cols-7 bg-blueTwo/5 py-3">
                    <p className="text-base text-blueTwo font-medium pl-6 col-span-1">
                      {item?.title}
                    </p>
                    <p className="text-base text-orange font-medium pl-6 col-span-1">
                      <CurrencyFormat
                        value={item?.target}
                        displayType={"text"}
                        thousandSeparator={true}
                        prefix={"₦"}
                      />
                    </p>
                    <p className="text-base text-blueTwo font-medium pl-6 col-span-1">
                      <CurrencyFormat
                        value={item?.amountSaved}
                        displayType={"text"}
                        thousandSeparator={true}
                        prefix={"₦"}
                      />
                    </p>
                    <div className=" col-span-3  flex items-center">
                      <div className="md:w-[67%] bg-blueTwo/20 py-2 px-3 rounded-md">
                        <ProgressBar width={item?.percent} />
                      </div>
                      {/* <p
                        className="font-medium text-sm pl-6 cursor-pointer"
                        style={{
                          color: "#699DEE",
                        }}
                      >
                        See More
                      </p> */}
                    </div>
                    <p className="text-base text-orange font-medium pl-6 col-span-1">
                      {item?.daysLeft}
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

export { TargetSavingsAll };
