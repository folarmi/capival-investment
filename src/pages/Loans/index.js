import React from "react";
import { useNavigate } from "react-router-dom";
import { ProgressBar, TableHeader } from "../../components";

const Loans = () => {
  const navigate = useNavigate();

  const goToNewLoanPage = () => {
    navigate("/dashboard/loans/new-loan");
  };

  const gotToRepaymentPage = () => {
    navigate("/dashboard/loans/repayment");
  };

  const gotToLoanDetailsPage = () => {
    navigate("/dashboard/loans/details");
  };

  const gotToSettleLoanPage = () => {
    navigate("/dashboard/loans/settle-loan");
  };

  return (
    <>
      <div className="m-auto w-[70%] mt-8">
        <div
          className="flex items-center justify-around bg-center bg-no-repeat py-12 rounded-xl"
          style={{ backgroundImage: `url(${"/assets/images/card.svg"})` }}
        >
          <p className="text-white font-semibold text-xl">
            You are now qualified for loans up to N 500,000
          </p>
          <p
            onClick={goToNewLoanPage}
            className="cursor-pointer font-normal text-xl rounded-lg bg-white py-4 px-6 shadow-lg"
          >
            Apply Now
          </p>
        </div>

        <div className="flex mt-10 mb-8 justify-center">
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
        </div>
      </div>

      <div className="mt-8 mx-7">
        <TableHeader
          header="Active Loans"
          pageNumber="Showing 1-3 of 3 transactions"
        />

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
              <p className="text-base text-orange font-normal w-[20%]">
                N105,000
              </p>
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

            <div className="flex items-center mt-4 mb-4 bg-blueTwo/5 py-3">
              <p className="text-base text-redTwo font-medium pl-6 w-[20%]">
                N 350,000
              </p>
              <p className="text-base text-orange font-normal w-[20%]">
                N105,000
              </p>
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

            <div className="flex items-center mt-4 mb-4 bg-blueTwo/5 py-3">
              <p className="text-base text-redTwo font-medium pl-6 w-[20%]">
                N 350,000
              </p>
              <p className="text-base text-orange font-normal w-[20%]">
                N105,000
              </p>
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
          </div>
        </main>

        {/* <Table data={data} columns={columns} /> */}
      </div>
    </>
  );
};

export { Loans };
