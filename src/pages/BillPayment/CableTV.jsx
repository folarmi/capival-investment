import React from "react";
import WalletDetailsHeader from "../Wallet/WalletDetailsHeader";

const CableTV = () => {
  return (
    <div className="mt-8">
      <WalletDetailsHeader ifTransaction={false} />

      <div className="flex mt-10 mb-8 justify-center">
        <div className="cursor-pointer">
          <img
            src="/assets/images/dstv.svg"
            alt="repayment icon"
            className="w-3/4"
            //   onClick={gotToRepaymentPage}
          />
        </div>

        <div className="cursor-pointer">
          <img
            src="/assets/images/gotv.svg"
            alt="loan detail"
            className="w-3/4"
            //   onClick={gotToLoanDetailsPage}
          />
        </div>

        <div className="">
          <img
            src="/assets/images/startimes.svg"
            alt="settle loan"
            className="w-3/4"
            //   onClick={gotToSettleLoanPage}
          />
        </div>
      </div>
    </div>
  );
};

export { CableTV };
