import React from "react";

const LoanHeader = ({ title, amount }) => {
  return (
    <div
      className="flex flex-col items-center justify-center bg-center bg-no-repeat py-2 rounded-tl-xl rounded-tr-xl"
      style={{
        backgroundImage: `url(${"/assets/images/repaymentBg.svg"})`,
      }}
    >
      <p className="text-white font-medium text-xl">{title}</p>
      <p className="text-blackTwo font-medium md:font-semibold text-2xl py-1">
        {amount}
      </p>
    </div>
  );
};

export { LoanHeader };
