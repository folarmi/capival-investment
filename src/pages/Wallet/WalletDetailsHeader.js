import React from "react";

import { WalletCard } from "../../components";
import { SearchBar } from "../../components/SearchBar";
import walletBg from "../../icons/walletBg.svg";

const WalletDetailsHeader = ({ ifSearchBar, ifTransaction = true }) => {
  return (
    <div className="flex flex-col justify-center items-center">
      <WalletCard
        title="Wallet"
        ifAccountName
        cardName="Account Name"
        amount="50,000.25"
        bgImage={walletBg}
        ifAccountNumber
        accountNumber="0046378932"
      />

      {ifTransaction && (
        <section className="flex items-center mt-5 px-4 md:px-0">
          <div className="flex whitespace-nowrap items-center">
            <img
              src="/assets/icons/refresh.svg"
              alt="refresh"
              className="mr-1"
            />
            <p className="text-sm md:text-base font-normal md:font-medium text-blueTwo">
              Transaction History
            </p>
          </div>

          <div className="whitespace-nowrap flex items-center ml-5">
            <img
              src="/assets/icons/downloadIcon.svg"
              alt="refresh"
              className="mr-1"
            />
            <p className="text-sm md:text-base font-normal md:font-medium text-blueTwo">
              Download Statement
            </p>
          </div>
        </section>
      )}

      {ifSearchBar && <SearchBar placeholder="Search for transactions" />}
    </div>
  );
};

export default WalletDetailsHeader;
