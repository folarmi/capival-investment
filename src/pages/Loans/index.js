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
            <div className="w-1/2 flex items-center justify-between">
              <p className="font-medium whitespace-nowrap text-base text-redTwo px-6 md:w-[20%]">
                Outstanding
              </p>
              <p className="font-medium whitespace-nowrap text-base text-blueTwo md:w-[20%]">
                Amount Paid
              </p>
              <p className="font-medium whitespace-nowrap text-base text-blueTwo pl-6 md:pl-0">
                Loan Details
              </p>
            </div>
          </section>

          <div className="bg-blueTwo/10 overflow-scroll">
            <div className="flex whitespace-nowrap items-center mt-4 mb-4 bg-blueTwo/5 py-3">
              <p className="text-base text-redTwo font-medium pl-6 md:w-[20%]">
                N 350,000
              </p>
              <p className="text-base pl-6 md:pl-0 text-orange font-normal md:w-[20%]">
                N105,000
              </p>
              <div className="md:w-[40%] bg-blueTwo/20 py-2 px-3 rounded-md">
                <ProgressBar width="30%" />
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

            <div className="flex whi items-center mt-4 mb-4 bg-blueTwo/5 py-3">
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

        <div className="my-10">
          <TableHeader
            header="Pending Loans"
            pageNumber="Showing 1-3 of 3 transactions"
          />

          <main className="mt-4 bg-blueTwo/10 rounded-xl">
            <section className="bg-blueTwo/20 rounded-xl py-4 overflow-scroll">
              <div className="w-1/2 flex items-center justify-between">
                <p className="font-medium whitespace-nowrap text-base text-redTwo px-6 md:w-[20%]">
                  Pending
                </p>
                <p className="font-medium whitespace-nowrap text-base text-blueTwo md:w-[20%]">
                  Amount Applied
                </p>
                <p className="font-medium whitespace-nowrap text-base text-blueTwo pl-6 md:pl-0">
                  Loan Details
                </p>
              </div>
            </section>

            <div className="bg-blueTwo/10 overflow-scroll">
              <div className="flex whitespace-nowrap items-center mt-4 mb-4 bg-blueTwo/5 py-3">
                <p className="text-base text-redTwo font-medium pl-6 md:w-[20%]">
                  N 350,000
                </p>
                <p className="text-base pl-6 md:pl-0 text-orange font-normal md:w-[20%]">
                  N105,000
                </p>
                <div className="md:w-[40%] bg-blueTwo/20 py-2 px-3 rounded-md">
                  <ProgressBar width="30%" />
                </div>
                <p
                  className="font-medium text-sm pl-6"
                  style={{
                    color: "#699DEE",
                  }}
                >
                  Processing Loan Approval
                </p>
              </div>
            </div>
          </main>
        </div>

        {/* <Table data={data} columns={columns} /> */}
      </div>
    </>
  );
};

export { Loans };
