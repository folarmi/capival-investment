import React from "react";

const LoanDetails = () => {
  const loanDetails = [
    {
      id: "1",
      name: "Loan Amount:",
      value: "N 350,000",
    },
    {
      id: "2",
      name: "Interest:",
      value: "5% per annnum",
    },
    {
      id: "3",
      name: "Total Interest:",
      value: "N 2,500.00",
    },
    {
      id: "4",
      name: "Monthly Repayment:",
      value: "N 52, 250.00",
    },
    {
      id: "5",
      name: "Repayment Period:",
      value: "6 Months",
    },
    {
      id: "6",
      name: "Total Repayment:",
      value: "N 350,000.00",
    },
  ];

  return (
    <div className="mt-4 md:mt-8">
      <p className="font-normal text-xl text-blueTwo pb-4 md:pb-8 pl-6 md:pl-12">
        Loan Details
      </p>

      <main className=" bg-blueSix rounded-lg px-0 md:px-6 mx-7">
        {loanDetails?.map((item) => {
          return (
            <div
              className="w-full flex items-center pt-8 pb-4 border-b border-blueTwo/30"
              key={item?.id}
            >
              <p className="text-base font-normal text-blueTwo md:w-[40%] pl-[10%]">
                {item?.name}
              </p>
              <p className="text-base font-normal text-blueTwo md:w-[60%]">
                {item?.value}
              </p>
            </div>
          );
        })}
      </main>
    </div>
  );
};

export { LoanDetails };
