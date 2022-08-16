import React from "react";

const RepaymentCard = ({ title, amount, onClick }) => {
  return (
    <div
      className="bg-blueTwo w-[30%] whitespace-nowrap rounded-lg py-1 flex items-center justify-center flex-col"
      onClick={onClick}
    >
      <p className="px-2 md:px-0 font-normal md:font-semibold text-base md:text-lg text-blackTwo">
        {title}
      </p>
      <p className="font-normal text-lg py-1 text-white">{amount}</p>
    </div>
  );
};

export { RepaymentCard };