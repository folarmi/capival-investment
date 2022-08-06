import React from "react";

const RepaymentCard = ({ title, amount, onClick }) => {
  return (
    <div
      className="bg-blueTwo w-[30%] rounded-lg py-1 flex items-center justify-center flex-col"
      onClick={onClick}
    >
      <p className="font-semibold text-lg text-blackTwo">{title}</p>
      <p className="font-normal text-lg py-1 text-white">{amount}</p>
    </div>
  );
};

export { RepaymentCard };
