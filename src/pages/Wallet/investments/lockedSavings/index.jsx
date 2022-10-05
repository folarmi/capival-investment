import React from "react";
import { useNavigate } from "react-router-dom";

const LockedSavings = () => {
  const navigate = useNavigate();
  const interestType = [
    {
      id: "1",
      noOfDays: "10 - 30 days",
      interest: "5% Per annum",
    },
    {
      id: "2",
      noOfDays: "40 - 50 days",
      interest: "10% Per annum",
    },
    {
      id: "3",
      noOfDays: "60 - 80 days",
      interest: "15% Per annum",
    },
    {
      id: "4",
      noOfDays: "90 - 120 days",
      interest: "5% Per annum",
    },
  ];

  const goToForm = (item) => {
    navigate("/dashboard/wallet/investments/saving-type/locked-savings/form", {
      state: item,
    });
  };

  return (
    <div className="mt-4 lg:mt-10 m-auto w-[90%] md:w-[80%] lg:w-[70%]">
      <p className="font-bold text-lg text-blueTwo text-center pb-2">
        Locked Savings
      </p>
      <p className="text-lg font-medium text-blueTwo">
        Lock away funds safely and earn up to 9%. Locked savings start timing
        from N 5,000.00
      </p>

      <main>
        <p className="text-lg font-medium text-blueTwo my-8 text-center">
          How Long do will you like to lock your savings.
        </p>

        <section className="flex flex-wrap gap-[2rem] rounded-xl items-center justify-around py-10 bg-[#eaeef6]">
          {interestType?.map((type) => {
            return (
              <div
                className="hover:bg-blueTwo cursor-pointer bg-blueFour hover:text-white text-blueTwo flex flex-col items-center justify-center w-[270px] h-[270px] rounded-2xl"
                key={type?.id}
                onClick={() => goToForm(type)}
              >
                <p className="font-medium text-lg pb-2 ">{type?.noOfDays}</p>
                <p className="font-semibold text-lg italic">{type?.interest}</p>
              </div>
            );
          })}
        </section>
      </main>
    </div>
  );
};

export { LockedSavings };
