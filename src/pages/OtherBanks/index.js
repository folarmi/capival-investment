import React from "react";
import { Button, SavingsInput, UserAvatar } from "../../atoms";
import WalletDetailsHeader from "../Wallet/WalletDetailsHeader";

const OtherBanksTransfer = () => {
  return (
    <div className="mt-8">
      <WalletDetailsHeader />

      <main className="mt-10 px-8">
        <p className="font-medium text-blueTwo text-base uppercase">
          Recent Beneficaries
        </p>

        <div className="pt-4 flex items-center px-20">
          <UserAvatar initials="ao" userName="Akinwale Olawale" />
          <UserAvatar initials="ao" userName="Akinwale Olawale" />
          <UserAvatar initials="ao" userName="Akinwale Olawale" />
          <UserAvatar initials="ao" userName="Akinwale Olawale" />
          <UserAvatar initials="ao" userName="Akinwale Olawale" />
          <UserAvatar initials="ao" userName="Akinwale Olawale" />
        </div>

        <p className="font-medium text-blueTwo text-base uppercase py-5">
          Other Bank Transfer
        </p>

        <form className="grid grid-cols-2 gap-10 px-20">
          <div>
            <SavingsInput placeholder="Beneficiary Account Number" />
          </div>
          <div>
            <SavingsInput placeholder="Amount" />
          </div>
          <div>
            <SavingsInput placeholder="Narration" />
          </div>

          <div className="w-[30%] mt-6 justify-self-center col-span-2">
            <Button buttonText="Continue" className="rounded-xl" size="lg" />
          </div>
        </form>
      </main>
    </div>
  );
};

export { OtherBanksTransfer };
