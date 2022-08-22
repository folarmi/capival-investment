import React from "react";

import { TransactionHistory } from "../TransactionHistory";
import WalletDetailsHeader from "./WalletDetailsHeader";

const WalletDetails = () => {
  return (
    <main className="mt-8">
      <WalletDetailsHeader ifSearchBar />

      <div className="">
        <TransactionHistory />
      </div>
    </main>
  );
};

export { WalletDetails };
