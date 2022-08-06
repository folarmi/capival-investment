import React from "react";
import { useNavigate } from "react-router-dom";
import { LoanHeader, ProgressBar, TableHeader } from "../../components";
import { RepaymentCard } from "./RepaymentCard";

const Repayment = () => {
  const navigate = useNavigate();

  const gotToNextRepaymentPage = () => {
    navigate("/dashboard/loans/next-repayment");
  };

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
    <>
      <div className="m-auto w-[70%] mt-8">
        <LoanHeader amount="N500,000" title="Outstanding" />

        <div className="flex items-center justify-between px-10 bg-grayTwo py-3 rounded-bl-xl rounded-br-xl">
          <RepaymentCard title="Amount Paid" amount="N102500" />
          <RepaymentCard title="Total Amount" amount="N102500" />
          <RepaymentCard title="Loan Tenure" amount="N500000" />
        </div>

        <div className="flex mt-10 mb-8 justify-center">
          <div className="cursor-pointer">
            <img
              src="/assets/images/repayment.svg"
              alt="repayment icon"
              onClick={gotToNextRepaymentPage}
            />
          </div>
          <div className="">
            <img src="/assets/images/loanDetails.svg" alt="loan detail" />
          </div>
          <div className="">
            <img src="/assets/images/settleLoan.svg" alt="settle loan" />
          </div>
        </div>
      </div>
      <div className="mt-8 mx-7">
        <TableHeader
          header="Repayment History"
          pageNumber="Showing 1-3 of 3 transactions"
        />

        <main className="bg-blueTwo/10 rounded-xl">
          <section className="bg-blueTwo/20 rounded-xl py-4 pr-[40%] grid grid-cols-3 gap-4">
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
                  className="w-full grid grid-cols-3 gap-4 mt-4 mb-4 bg-blueTwo/5 py-3 pr-[40%]"
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

        {/* <Table data={data} columns={columns} /> */}
      </div>
    </>
  );
};

export { Repayment };
