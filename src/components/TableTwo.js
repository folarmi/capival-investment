import React from "react";
import { ProgressBar } from "./ProgressBar";

const TableTwo = ({ tableData }) => {
  return (
    <main className="bg-blueTwo/10 rounded-xl">
      <section className="bg-blueTwo/20 rounded-xl py-4">
        <div className="w-1/2 flex items-center justify-between">
          <p className="font-medium whitespace-nowrap text-base text-redTwo px-6 w-[20%]">
            Outstanding
          </p>
          <p className="font-medium whitespace-nowrap text-base text-blueTwo w-[20%]">
            Amount Paid
          </p>
          <p className="font-medium whitespace-nowrap text-base text-blueTwo">
            Loan Details
          </p>
        </div>
      </section>

      <div className="bg-blueTwo/10">
        <div className="flex items-center mt-4 mb-4 bg-blueTwo/5 py-3">
          <p className="text-base text-redTwo font-medium pl-6 w-[20%]">
            N 350,000
          </p>
          <p className="text-base text-orange font-normal w-[20%]">N105,000</p>
          <div className="w-[40%] bg-blueTwo/20 py-2 px-3 rounded-md">
            <ProgressBar width="30%" />
          </div>
          <p
            className="font-medium text-sm pl-6"
            style={{
              color: "#699DEE",
            }}
          >
            See More
          </p>
        </div>
        {tableData.map}
      </div>
    </main>
  );
};

export { TableTwo };
