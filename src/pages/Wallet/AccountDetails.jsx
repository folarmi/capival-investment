import React from "react";
import { useSelector } from "react-redux";
import { CopyFunction } from "./CopyFunction";

const AccountDetails = ({ toggleDetailsModal }) => {
  const accountNumber = useSelector(
    (state) => state.auth?.login?.user?.user?.virtual_account?.VirtualAccount
  );

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
        <CopyFunction
          accountNumber={accountNumber}
          valueToCopy={accountNumber}
        />

        <p className="pt-6 text-center text-sm px-5 leading-5">
          This works like a regular bank account number. Transfer from any
          source to <span className="font-bold">{accountNumber}</span>. Select
          Providus bank as the destination bank. Funds will be credited to your
          Account instantly.
        </p>
      </section>
    </>
  );
};

export { AccountDetails };
