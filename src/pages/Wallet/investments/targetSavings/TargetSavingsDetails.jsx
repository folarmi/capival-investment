import React from "react";
import CurrencyFormat from "react-currency-format";
import bgImage from "../../../../icons/investmentBg.svg";
import { TargetCard } from "./TargetCard";

const TargetSavingsDetails = () => {
  return (
    <div className="flex flex-col justify-center items-center mt-8">
      <div className="h-full text-white flex flex-col justify-center items-center investment-bg rounded-xl shadow-md cursor-pointer">
        <section className="flex items-center">
          <p className="bg-[#644031] uppercase py-3 px-5 rounded-lg">
            School Fees
          </p>
          <div className="flex items-center ml-4">
            <div className="bg-[#00FF00] w-[10px] h-[10px] rounded-full"></div>
            <p className="font-medium text-lg pl-2">Ongoing</p>
          </div>
        </section>

        <p className="font-medium text-sm">Balance</p>
        <p className="text-white font-medium px-10 text-3xl text-center">
          <CurrencyFormat
            value="50,000"
            displayType={"text"}
            thousandSeparator={true}
            prefix={"₦"}
          />
        </p>

        <div class="flex w-full my-2 justify-end">
          <span class="text-xs font-normal pr-4">10% complete</span>
        </div>
        <div class="w-[80%] mx-10 bg-white rounded-full h-1.5 mb-2">
          <div
            class="bg-[#111127] h-1.5 rounded-full"
            style={{ width: "10%" }}
          ></div>
        </div>

        <p className="uppercase bg-[#644031] rounded-3xl text-xs px-5 py-1.5">
          Quick Top up
        </p>

        <section className="flex items-center justify-around mt-2 cursor-pointer">
          <div className="flex items-center bg-[#43272c] px-3 py-1 mr-3">
            <img src="/assets/icons/extend.svg" alt="" />
            <p className="text-xs uppercase pl-2">Extend</p>
          </div>

          <div className="flex items-center bg-[#43272c] px-3 py-1 mr-3">
            <img src="/assets/icons/break.svg" alt="" />
            <p className="text-xs uppercase pl-2">Break</p>
          </div>

          <div className="flex items-center bg-[#43272c] px-3 py-1">
            <img src="/assets/icons/changeTarget.svg" alt="" />
            <p className="text-xs uppercase pl-2">Change Source</p>
          </div>
        </section>
      </div>

      <section className="flex items-center gap-6 justify-around mt-6">
        <TargetCard title="My Target" value="N50,000" />
        <TargetCard
          title="Frequency"
          value="N10,000"
          ifSecondValue
          secondValue="Weekly"
        />
        <TargetCard title="Interest" value="N50,000" />
        <TargetCard title="Withdrawal Date" value="31-Dec-2022" />
      </section>
    </div>
  );
};

export { TargetSavingsDetails };
