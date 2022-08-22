import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import CurrencyFormat from "react-currency-format";

import { ProgressBar, TableHeader } from "../../components";
import { getActiveLoans, getPendingLoansAsync } from "../../slices/loan";

const Loans = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { activeLoans, pendingLoans } = useSelector((state) => state.loans);

  console.log(pendingLoans);
  const activeLoanHeader = [
    { id: "1", name: "Outstanding" },
    { id: "2", name: "Amount Paid" },
    { id: "3", name: "Loan Details" },
  ];

  const pendingLoanHeader = [
    { id: "1", name: "Pending" },
    { id: "2", name: "Amount Applied" },
    { id: "3", name: "Loan Details" },
  ];

  const goToNewLoanPage = () => {
    navigate("/dashboard/loans/new-loan");
  };

  const gotToRepaymentPage = (item) => {
    navigate("/dashboard/loans/repayment", {
      state: {
        loan: item,
      },
    });
  };

  useEffect(() => {
    dispatch(getActiveLoans());
    dispatch(getPendingLoansAsync());
  }, []);

  return (
    <>
      <div className="m-auto w-[95%] lg:w-[70%] mt-8">
        <div
          className="flex items-center justify-around bg-center bg-no-repeat py-6 lg:py-12 rounded-xl"
          style={{ backgroundImage: `url(${"/assets/images/card.svg"})` }}
        >
          <p className="text-white font-normal lg:font-semibold text-base lg:text-xl px-3 md:px-0 max-w-[15rem] md:max-w-none">
            You are now qualified for loans up to N 500,000
          </p>
          <p
            onClick={goToNewLoanPage}
            className="cursor-pointer whitespace-nowrap font-normal text-sm lg:text-xl rounded-lg bg-white py-2 lg:py-4 px-3 lg:px-6 shadow-lg"
          >
            Apply Now
          </p>
        </div>

        {/* <div className="flex mt-10 mb-8 justify-center">
          <div className="cursor-pointer">
            <img
              src="/assets/images/repayment.svg"
              alt="repayment icon"
              onClick={gotToRepaymentPage}
            />
          </div>

          <div className="cursor-pointer">
            <img
              src="/assets/images/loanDetails.svg"
              alt="loan detail"
              onClick={gotToLoanDetailsPage}
            />
          </div>

          <div className="">
            <img
              src="/assets/images/settleLoan.svg"
              alt="settle loan"
              onClick={gotToSettleLoanPage}
            />
          </div>
        </div> */}
      </div>

      <div className="mt-8 mx-4 md:mx-7">
        <TableHeader
          header="Active Loans"
          pageNumber="Showing 1-3 of 3 transactions"
        />

        <main className="mt-4 bg-blueTwo/10 rounded-xl">
          <section className="bg-blueTwo/20 rounded-xl py-4 overflow-scroll">
            <div className="grid grid-cols-5 gap-5 items-center">
              {activeLoanHeader.map((header) => {
                return (
                  <div>
                    <p className="font-medium first:text-redTwo whitespace-nowrap text-base text-blueTwo px-6 md:w-[20%]">
                      {header?.name}
                    </p>
                  </div>
                );
              })}
            </div>
          </section>

          <div className="bg-blueTwo/10 overflow-scroll">
            {activeLoans?.length === 0 ? (
              <p className="text-center my-10 text-blueTwo text-xl">
                No Active Loan
              </p>
            ) : (
              <>
                {" "}
                {activeLoans?.map((item) => {
                  return (
                    <div className="mt-4 mb-4 whitespace-nowrap grid grid-cols-5  bg-blueTwo/5 py-3">
                      <p className="text-base text-[#AE1F24] font-medium pl-6 col-span-1">
                        <CurrencyFormat
                          value={item?.AmountLeft}
                          displayType={"text"}
                          thousandSeparator={true}
                          prefix={"₦"}
                        />
                      </p>
                      <p className="text-base text-orange font-medium pl-6 col-span-1">
                        <CurrencyFormat
                          value={item?.AmountPaid}
                          displayType={"text"}
                          thousandSeparator={true}
                          prefix={"₦"}
                        />
                      </p>
                      <div className="col-span-3 flex items-center">
                        <div className="md:w-[67%] bg-blueTwo/20 py-2 px-3 rounded-md">
                          <ProgressBar
                            width={`${Math.round(
                              (item?.AmountPaid / item?.Loan_Amount) * 100
                            )}%`}
                          />
                        </div>
                        <p
                          className="font-medium text-sm pl-6 cursor-pointer"
                          style={{
                            color: "#699DEE",
                          }}
                          onClick={() => gotToRepaymentPage(item)}
                        >
                          See More
                        </p>
                      </div>
                    </div>
                  );
                })}
              </>
            )}
          </div>
        </main>

        <div className="my-10">
          <TableHeader
            header="Pending Loans"
            pageNumber="Showing 1-3 of 3 transactions"
          />

          <main className="mt-4 bg-blueTwo/10 rounded-xl">
            <section className="bg-blueTwo/20 rounded-xl py-4 overflow-scroll">
              <div className="grid grid-cols-5 gap-5 items-center">
                {pendingLoanHeader.map((header) => {
                  return (
                    <div>
                      <p className="font-medium first:text-redTwo whitespace-nowrap text-base text-blueTwo px-6 md:w-[20%]">
                        {header?.name}
                      </p>
                    </div>
                  );
                })}
              </div>
            </section>

            <div className="bg-blueTwo/10 overflow-scroll">
              {pendingLoans?.length === 0 ? (
                <p className="text-center my-10 text-blueTwo text-xl">
                  No Pending Loan
                </p>
              ) : (
                <>
                  {" "}
                  {pendingLoans?.map((item) => {
                    return (
                      <div className="mt-4 mb-4 whitespace-nowrap grid grid-cols-5  bg-blueTwo/5 py-3">
                        <p className="text-base text-[#AE1F24] font-medium pl-6 col-span-1">
                          <CurrencyFormat
                            value={item?.AmountLeft}
                            displayType={"text"}
                            thousandSeparator={true}
                            prefix={"₦"}
                          />
                        </p>
                        <p className="text-base text-orange font-medium pl-6 col-span-1">
                          <CurrencyFormat
                            value={item?.AmountPaid}
                            displayType={"text"}
                            thousandSeparator={true}
                            prefix={"₦"}
                          />
                        </p>
                        <div className="col-span-3 flex items-center">
                          <div className="md:w-[67%] bg-blueTwo/20 py-2 px-3 rounded-md">
                            <ProgressBar
                              width={`${Math.round(
                                (item?.AmountPaid / item?.Loan_Amount) * 100
                              )}%`}
                            />
                          </div>
                          <p
                            className="font-medium text-sm pl-6 cursor-pointer"
                            style={{
                              color: "#699DEE",
                            }}
                            onClick={gotToRepaymentPage}
                          >
                            See More
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </>
              )}
            </div>
          </main>
        </div>
      </div>
    </>
  );
};

export { Loans };
