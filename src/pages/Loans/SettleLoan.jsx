import React from "react";
import { Button } from "../../atoms";
import { LoanHeader, TableHeader } from "../../components";

const SettleLoan = () => {
  const data = [
    {
      id: "1",
      amountPaid: "N 600,000",
      date: "21st March 2022",
      narration: "CAPIVAL-WEB-LOANRE-90920280",
    },
    {
      id: "2",
      amountPaid: "N 600,000",
      date: "21st March 2022",
      narration: "CAPIVAL-WEB-LOANRE-90920280",
    },
    {
      id: "3",
      amountPaid: "N 600,000",
      date: "21st March 2022",
      narration: "CAPIVAL-WEB-LOANRE-90920280",
    },
  ];

  return (
    <div className="mt-8">
      <div className="rounded-2xl">
        <LoanHeader amount="N52,250" title="Outstanding" />
      </div>

      <div className="mt-8 mx-4 md:mx-7">
        <TableHeader
          header="Repayment History"
          pageNumber="Showing 1-3 of 3 active loans"
        />

        <main className="mt-4 md:mt-0 bg-blueTwo/10 rounded-xl overflow-scroll w-full">
          <section className="bg-blueTwo/20 rounded-xl py-4 md:pr-[40%] grid grid-cols-3 gap-32 md:gap-4">
            <p className="font-medium whitespace-nowrap text-base text-blueTwo pl-6">
              Amount Paid
            </p>
            <p className="font-medium whitespace-nowrap text-base text-blueTwo">
              Paid on (Date)
            </p>
            <p className="font-medium whitespace-nowrap text-base text-blueTwo">
              Narration
            </p>
          </section>

          <div className="bg-blueTwo/10">
            {data.map((item) => {
              return (
                <div
                  className="w-full grid grid-cols-3 gap-32 md:gap-4 mt-4 mb-4 bg-blueTwo/5 py-3 md:pr-[40%]"
                  key={item?.id}
                >
                  <p className="whitespace-nowrap text-base text-blueTwo pl-6 font-normal ">
                    {item?.amountPaid}
                  </p>
                  <p className="text-base whitespace-nowrap text-blueTwo font-normal ">
                    {item?.date}
                  </p>
                  <p className="text-base whitespace-nowrap text-blueTwo font-normal ">
                    {item?.narration}
                  </p>{" "}
                </div>
              );
            })}
          </div>
        </main>

        <div className="m-auto md:w-[30%] mt-12">
          <Button buttonText="Settle Loan" className="rounded-2xl" />
        </div>
      </div>
    </div>
  );
};

export { SettleLoan };
