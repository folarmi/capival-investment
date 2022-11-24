import React from "react";

const AccountDetails = ({ toggleDetailsModal }) => {
  return (
    <>
      <div className="flex justify-end mr-4 mt-4" onClick={toggleDetailsModal}>
        <img src="/assets/icons/closeTwo.svg" alt="closeButton" />
      </div>
      <section className="text-center">
        <p className="text-center text-lg font-semibold text-blueTwo uppercase">
          Fund your wallet
        </p>
        <p className="pt-2 font-thin pb-5 text-[15px]">Bank: Providus Bank</p>
        <div className="flex items-center justify-center bg-blueTwo py-2 rounded-3xl m-auto w-1/2">
          <img
            src="/assets/icons/copyIcon.svg"
            alt="closeButton"
            className="mr-3"
          />
          <p className="font-medium text-lg text-white">0046378932</p>
        </div>

        <p className="pt-6 text-center text-sm">
          This works like a regular bank account number. Transfer from any
          source to 0046378932. Select Providus bank as the destination bank.
          Funds will be credited to your Account instantly.
        </p>
      </section>
    </>
  );
};

export { AccountDetails };
