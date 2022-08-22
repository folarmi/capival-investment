import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { LoanHeader, TableHeader } from "../../components";
import { getLoanDetailsAsync } from "../../slices/loan";
import { RepaymentCard } from "./RepaymentCard";

const Repayment = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();
  const { loanDetails } = useSelector((state) => state.loans);
  const singleLoanDetails = location?.state.loan;

  const gotToLoanDetailsPage = (item) => {
    navigate("/dashboard/loans/details", {
      state: {
        loan: item,
      },
    });
  };

  const gotToSettleLoanPage = () => {
    navigate("/dashboard/loans/settle-loan");
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

  useEffect(() => {
    dispatch(getLoanDetailsAsync(singleLoanDetails?.LoanID));
  }, []);

  return (
    <>
      <div className="m-auto w-full md:w-[70%] mt-8">
        {/* <div className="mx-2"> */}
        <LoanHeader
          amount={singleLoanDetails?.AmountLeft}
          title="Outstanding"
        />
        {/* </div> */}

        <div className="flex items-center justify-between px-4 md:px-10 bg-grayTwo py-3 rounded-bl-xl rounded-br-xl">
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

        <div className="flex mt-10 mb-8 justify-center">
          {/* <div className="cursor-pointer">
            <img
              src="/assets/images/repayment.svg"
              alt="repayment icon"
              onClick={gotToNextRepaymentPage}
            />
          </div> */}
          <div
            className="cursor-pointer mr-6"
            onClick={() => gotToLoanDetailsPage(singleLoanDetails)}
          >
            <img
              src="/assets/images/loanDetails.svg"
              alt="loan detail"
              className="w-40 h-40"
            />
          </div>
          <div className="cursor-pointer" onClick={gotToSettleLoanPage}>
            <img
              src="/assets/images/settleLoan.svg"
              alt="settle loan"
              className="w-40 h-40"
            />
          </div>
        </div>
      </div>
      <div className="mt-8 mx-4 md:mx-7">
        <TableHeader
          header="Repayment History"
          pageNumber="Showing 1-3 of 3 transactions"
        />

        <main className="mt-4 md:mt-0 bg-blueTwo/10 rounded-xl overflow-scroll">
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

          <div className="bg-blueTwo/10 overflow-scroll">
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

        {/* <Table data={data} columns={columns} /> */}
      </div>
    </>
  );
};

export { Repayment };
