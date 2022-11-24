import React from "react";
import CurrencyFormat from "react-currency-format";

const RepaymentCard = ({
  title,
  amount,
  onClick,
  ifAmount = true,
  ifTenure = false,
}) => {
  return (
    <div
      className="mb-4 lg:mb-0 bg-blueTwo w-[45%] lg:w-[30%] whitespace-nowrap rounded-lg py-1 flex items-center justify-center flex-col"
      onClick={onClick}
    >
      <p className="px-2 md:px-0 font-normal md:font-semibold text-base md:text-lg text-blackTwo">
        {title}
      </p>
      <p className="font-normal text-lg py-1 text-white">
        {ifAmount && "₦"}
        <CurrencyFormat
          value={amount}
          displayType={"text"}
          thousandSeparator={true}
        />
        {ifTenure && "months"}
      </p>
    </div>
  );
};

export { RepaymentCard };
