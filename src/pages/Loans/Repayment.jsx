import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { LoanHeader, TableHeader } from "../../components";
import { getLoanDetailsAsync, getLoanScheduleAsync } from "../../slices/loan";
import { RepaymentCard } from "./RepaymentCard";
import CurrencyFormat from "react-currency-format";

const Repayment = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();
  const { loanSchedule } = useSelector((state) => state.loans);
  const singleLoanDetails = location?.state.loan;

  const repaymentLoanHeader = [
    { id: "1", name: "Due Date" },
    { id: "2", name: "Amount Paid" },
    { id: "3", name: "Status" },
    { id: "4", name: "Closing Balance" },
  ];

  // const gotToLoanDetailsPage = (item) => {
  //   navigate("/dashboard/loans/details", {
  //     state: {
  //       loan: item,
  //     },
  //   });
  // };

  // const gotToSettleLoanPage = () => {
  //   navigate("/dashboard/loans/settle-loan");
  // }

  useEffect(() => {
    dispatch(getLoanDetailsAsync(singleLoanDetails?.LoanID));
    dispatch(getLoanScheduleAsync(singleLoanDetails?.LoanID));
  }, []);

  return (
    <>
      <div className="m-auto w-full md:w-[70%] lg:mt-8">
        <LoanHeader
          amount={singleLoanDetails?.AmountLeft}
          title="Outstanding"
          className="mb-4"
        />

        <div className="flex flex-wrap items-center justify-between px-4 md:px-10 bg-grayTwo py-3 rounded-bl-xl rounded-br-xl">
          <RepaymentCard
            title="Amount Paid"
            amount={singleLoanDetails?.AmountPaid}
          />
          <RepaymentCard
            title="Total Amount"
            amount={singleLoanDetails?.Loan_Amount}
          />
          <RepaymentCard
            title="Loan Tenure"
            ifAmount={false}
            amount={`${singleLoanDetails?.Loan_Tenure} months`}
          />
        </div>
      </div>
      <div className="mt-8 mx-4 md:mx-7">
        <TableHeader
          header="Repayment History"
          pageNumber={`Showing 1-${loanSchedule?.length} of ${loanSchedule?.length} transactions`}
        />
        <main className="mt-4 md:mt-0 bg-blueTwo/10 rounded-xl overflow-scroll">
          <section className="bg-blueTwo/20 rounded-xl py-4 overflow-scroll">
            <div className="grid grid-cols-4 items-center pl-3 lg:pl-6">
              {repaymentLoanHeader.map((header) => {
                return (
                  <div>
                    <p className="font-medium whitespace-nowrap text-xs lg:text-base text-blueTwo">
                      {header?.name}
                    </p>
                  </div>
                );
              })}
            </div>
          </section>

          <div className="bg-blueTwo/10 overflow-scroll">
            {loanSchedule &&
              loanSchedule?.map((item) => {
                return (
                  <div className="mt-4 mb-4 whitespace-nowrap grid grid-cols-4 bg-blueTwo/5 py-3 pl-3 lg:pl-6">
                    <p className="whitespace-nowrap text-xs lg:text-base text-blueTwo font-normal ">
                      {item?.DueDate}
                    </p>
                    <p className="text-xs lg:text-base whitespace-nowrap text-blueTwo font-normal col-span-1">
                      {/* <CurrencyFormat
                        value={Math.round(
                          item?.Principal.toString() +
                            item?.InterestAmount.toString()
                        )}
                        displayType={"number"}
                        thousandSeparator={true}
                        prefix={"₦"}
                      /> */}
                      {/* {Math.round(item?.Principal + item?.InterestAmount)} */}
                      {item?.Principal + item?.InterestAmount}
                      {/* {Math.round(item?.Principal + item?.InterestAmount)} */}
                    </p>
                    <p
                      className="whitespace-nowrap text-xs lg:text-base font-medium"
                      style={{
                        color:
                          item?.PaymentStatus === "Paid"
                            ? "#3B58A8"
                            : "rgb(220 38 38)",
                      }}
                    >
                      {item?.PaymentStatus === "Paid" ? "Paid" : "Unpaid"}
                    </p>
                    <p className="text-xs lg:text-base whitespace-nowrap text-blueTwo font-normal col-span-1">
                      <CurrencyFormat
                        value={item?.ClosingBalance}
                        displayType={"text"}
                        thousandSeparator={true}
                        prefix={"₦"}
                      />
                    </p>
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
