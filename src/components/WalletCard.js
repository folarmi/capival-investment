import React from "react";

import CurrencyFormat from "react-currency-format";

const WalletCard = ({
  bgImage,
  cardName,
  amount,
  onClick,
  ifAccountName = false,
  ifAccountNumber = false,
  accountNumber,
}) => {
  return (
    <>
      <div
        className="wallet-bg p-10 max-w-sm rounded-xl shadow-md bg-center bg-no-repeat cursor-pointer"
        onClick={onClick}
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        {ifAccountName && (
          <p className="text-white font-medium px-10 text-base pt-4 text-center">
            {cardName}
          </p>
        )}
        <p className="text-white font-medium px-10 text-3xl text-center">
          <CurrencyFormat
            value={amount}
            displayType={"text"}
            thousandSeparator={true}
            prefix={"₦"}
          />
        </p>
        {ifAccountNumber && (
          <div className="flex justify-end items-center cursor-pointer">
            <p className="font-normal text-sm text-white pr-2">
              Acc No: <span className="font-medium">{accountNumber}</span>
            </p>
            <img src="/assets/icons/copyIcon.svg" alt="copyIcon" />
          </div>
        )}
      </div>
    </>
  );
};

export { WalletCard };
