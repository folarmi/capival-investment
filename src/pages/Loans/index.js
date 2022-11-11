import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import CurrencyFormat from "react-currency-format";

import { ProgressBar, TableHeader } from "../../components";
import {
  getActiveLoans,
  getPendingLoansAsync,
  liquidateLoanAsync,
} from "../../slices/loan";
import { toast } from "react-toastify";

const Loans = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { activeLoans, pendingLoans, liquidateLoanIsLoading } = useSelector(
    (state) => state.loans
  );
  const kycStatus = useSelector(
    (state) => state.auth?.login?.user?.authorisation
  );

  const sampleActiveLoans = [
    {
      id: "1",
      AmountLeft: "50000",
      AmountPaid: "50000",
      Loan_Amount: "100000",
    },
    {
      id: "2",
      AmountLeft: "50000",
      AmountPaid: "5000",
      Loan_Amount: "100000",
    },
  ];

  const kycObject = {
    bank_account: kycStatus?.bank_account,
    employer_details: kycStatus?.employer_details,
    next_of_kin: kycStatus?.next_of_kin,
    kyc_document: kycStatus?.kyc_document,
  };

  const ifEligibleForLoan =
    kycStatus?.bank_account &&
    kycStatus?.employer_details &&
    kycStatus?.next_of_kin &&
    kycStatus?.kyc_document;

  const activeLoanHeader = [
    { id: "1", name: "Outstanding" },
    { id: "2", name: "Amount Paid" },
    { id: "3", name: "Loan Details" },
  ];

  const pendingLoanHeader = [
    { id: "1", name: "Amount Applied" },
    { id: "2", name: "Tenure" },
    { id: "3", name: "Loan Details" },
    { id: "4", name: "Mode" },
    { id: "5", name: "Status" },
  ];

  const goToNewLoanPage = () => {
    if (ifEligibleForLoan) {
      navigate("/dashboard/loans/new-loan");
    } else {
      navigate("/dashboard/update-kyc");
    }
  };

  const gotToRepaymentPage = (item) => {
    navigate("/dashboard/loans/repayment", {
      state: {
        loan: item,
      },
    });
  };

  const liquidateLoanFnc = (item) => {
    dispatch(liquidateLoanAsync(item?.LoanID))
      .unwrap()
      .then((res) => {
        if (res?.status === true) {
          toast(res?.message);
        }
      })
      .catch((err) => {
        console.log(err);
        toast.error(err?.message);
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
      </div>

      <div className="mt-8 mx-4 md:mx-7">
        <main className="hidden md:block  mt-4 bg-blueTwo/10 rounded-xl">
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
                    <div className="mt-4 mb-4 whitespace-nowrap lg:grid grid-cols-5  bg-blueTwo/5 py-3">
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
                        <p
                          className="font-medium text-sm pl-6 cursor-pointer"
                          style={{
                            color: "rgb(220 38 38)",
                          }}
                          onClick={() => liquidateLoanFnc(item)}
                        >
                          {liquidateLoanIsLoading ? (
                            <svg
                              className="animate-spin h-5 w-5 text-white"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                            >
                              <circle
                                className="opacity-25"
                                cx="12"
                                cy="12"
                                r="10"
                                stroke="currentColor"
                                strokeWidth="4"
                              ></circle>
                              <path
                                className="opacity-75"
                                fill="currentColor"
                                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                              ></path>
                            </svg>
                          ) : (
                            "Liquidate Loan"
                          )}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </>
            )}
          </div>
        </main>

        {/* Mobile View */}
        <p className="text-xl font-medium pb-4">Active Loans</p>
        <section className="lg:hidden">
          {sampleActiveLoans?.length === 0 ? (
            <p className="w-full flex items-center justify-center my-10 text-white text-xl">
              No Active Loan
            </p>
          ) : (
            <>
              {" "}
              {sampleActiveLoans?.map((item) => {
                return (
                  <div
                    className="flex flex-col items-center justify-between mb-4 rounded-xl p-4"
                    style={{
                      backgroundColor: "#3B58A8",
                      boxShadow: "0px 1px 2px 0px #02733626",
                    }}
                  >
                    <div className="w-full pb-4 mb-3 flex items-center justify-between border-b border-[#6A77AC]">
                      <p className="text-white">Outstanding</p>
                      <p className="text-xl text-red-500 font-medium">
                        <CurrencyFormat
                          value={item?.AmountLeft}
                          displayType={"text"}
                          thousandSeparator={true}
                          prefix={"₦"}
                        />
                      </p>
                    </div>

                    <div className="w-full pb-4 flex items-center justify-between">
                      <p className=" text-white">Amount Paid</p>
                      <p className="text-xl text-white font-medium">
                        <CurrencyFormat
                          value={item?.AmountPaid}
                          displayType={"text"}
                          thousandSeparator={true}
                          prefix={"₦"}
                        />
                      </p>
                    </div>

                    <div className="w-full mb-5 bg-white py-2 px-3 rounded-md">
                      <ProgressBar
                        width={`${Math.round(
                          (item?.AmountPaid / item?.Loan_Amount) * 100
                        )}%`}
                      />
                    </div>

                    <section className="w-full flex justify-between">
                      <button
                        className="py-4 font-medium text-sm bg-white rounded-lg px-6 text-[#33458D]"
                        onClick={() => gotToRepaymentPage(item)}
                      >
                        See More
                      </button>

                      <button
                        className="py-4 font-medium text-sm border border-white rounded-lg px-6 text-white"
                        onClick={() => liquidateLoanFnc(item)}
                      >
                        Liquidate Loan
                      </button>
                    </section>
                  </div>
                );
              })}
            </>
          )}
        </section>

        <div className="my-10">
          <main className="hidden md:block mt-4 bg-blueTwo/10 rounded-xl">
            <section className="bg-blueTwo/20 rounded-xl py-4 overflow-scroll">
              <div className="grid grid-cols-5 gap-5 items-center pl-6">
                {pendingLoanHeader.map((header) => {
                  return (
                    <div>
                      <p className="font-medium whitespace-nowrap text-base text-blueTwo">
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
                      <div className="mt-4 mb-4 whitespace-nowrap grid grid-cols-5 gap-5  bg-blueTwo/5 py-3 pl-6">
                        <p className="text-base text-[#AE1F24] font-medium  col-span-1">
                          <CurrencyFormat
                            value={item?.loan_amount}
                            displayType={"text"}
                            thousandSeparator={true}
                            prefix={"₦"}
                          />
                        </p>
                        <p className="text-base text-blueTwo font-medium col-span-1">
                          {`${item?.tenor} months`}
                        </p>
                        <p className="text-base text-blueTwo font-medium  col-span-1">
                          {item?.repayment_channel}
                        </p>
                        <p className="text-base text-blueTwo font-medium  col-span-1">
                          {item?.mode}
                        </p>
                        <p className="text-base text-blueTwo font-medium col-span-1">
                          {item?.status === 0 ? "Inactive" : "Active"}
                        </p>

                        {/* <div className="col-span-3 flex items-center">
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
                        </div> */}
                      </div>
                    );
                  })}
                </>
              )}
            </div>
          </main>

          {/* Mobile View */}
          <p className="text-xl font-medium pb-4">Pending Loans</p>
          <section className="lg:hidden">
            {pendingLoans?.length === 0 ? (
              <p className="w-full flex items-center justify-center my-10 text-white text-xl">
                No Pending Loan
              </p>
            ) : (
              <>
                {" "}
                {pendingLoans?.map((item) => {
                  return (
                    <div
                      className="flex flex-col items-center justify-between mb-4 rounded-xl p-4"
                      style={{
                        backgroundColor: "#3B58A8",
                        boxShadow: "0px 1px 2px 0px #02733626",
                      }}
                    >
                      <div className="w-full pb-4 mb-3 flex items-center justify-between border-b border-[#6A77AC]">
                        <p className="text-white">Amount Applied</p>
                        <p className="text-xl text-red-500 font-medium">
                          <CurrencyFormat
                            value={item?.loan_amount}
                            displayType={"text"}
                            thousandSeparator={true}
                            prefix={"₦"}
                          />
                        </p>
                      </div>

                      <div className="w-full pb-4 flex items-center justify-between">
                        <p className=" text-white">Tenure</p>
                        <p className="text-xl text-white font-medium">
                          {`${item?.tenor} months`}
                        </p>
                      </div>

                      <div className="w-full pb-4 flex items-center justify-between">
                        <p className=" text-white">Loan Details</p>
                        <p className="text-xl text-white font-medium">
                          {item?.repayment_channel}
                        </p>
                      </div>

                      <div className="w-full pb-4 flex items-center justify-between">
                        <p className=" text-white">Mode</p>
                        <p className="text-xl text-white font-medium">
                          {item?.mode}
                        </p>
                      </div>

                      <div className="w-full pb-4 flex items-center justify-between">
                        <p className=" text-white">Mode</p>
                        <p className="text-xl text-white font-medium">
                          {item?.status === 0 ? "Inactive" : "Active"}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </>
            )}
          </section>
        </div>
      </div>
    </>
  );
};

export { Loans };
