import React from "react";
import { BillCard } from "../../components";
import WalletDetailsHeader from "../Wallet/WalletDetailsHeader";

const BillPayment = () => {
  return (
    <div className="mt-8">
      <WalletDetailsHeader ifTransaction={false} />

      <main className="px-20 w-full grid grid-cols-4 gap-12 mt-16">
        <BillCard cardName="Cable" path="cable" />
        <BillCard cardName="Medical Services" path="cable" />
        <BillCard cardName="Internet Service" path="cable" />
        <BillCard cardName="Bill Power & Electricity" path="cable" />
        <BillCard cardName="Taxes & Levies" path="cable" />
        <BillCard cardName="Insurance" path="cable" />
        <BillCard cardName="Transport & Toll Payment" path="cable" />
        <BillCard cardName="Education" path="cable" />
        <BillCard cardName="Data Purchase" path="cable" />
        <BillCard cardName="Others" path="cable" />
      </main>
    </div>
  );
};

export { BillPayment };
