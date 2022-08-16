import React from "react";
import { useNavigate } from "react-router-dom";
import { Button, SavingsInput } from "../../atoms";
import WalletDetailsHeader from "../Wallet/WalletDetailsHeader";

const BetsAndLotteries = () => {
  const navigate = useNavigate();

  const goToConfirmationPage = () => {
    navigate("/dashboard/bets-and-lotteries/confirm");
  };

  return (
    <div className="mt-8">
      <WalletDetailsHeader ifTransaction={false} />

      <div className="grid grid-cols-5 m-auto w-[50%] -gap-10 mt-8">
        <img src="/assets/icons/sporty.svg" alt="sporty" className="w-20" />
        <img src="/assets/icons/bet.svg" alt="bet" className="w-20" />
        <img
          src="/assets/icons/babaIjebu.svg"
          alt="babaIjebu"
          className="w-20"
        />
        <img src="/assets/icons/nairabet.svg" alt="nairabet" className="w-20" />
        <img src="/assets/icons/lotto.svg" alt="lotto" className="w-20" />
      </div>

      <form className="grid grid-cols-2 gap-10 mt-12 m-auto w-[70%]">
        <div>
          <SavingsInput placeholder="Mobile Number" />
        </div>
        <div>
          <SavingsInput placeholder="Refrence Number" />
        </div>
        <div>
          <SavingsInput placeholder="Amount" />
        </div>
        <div>
          <SavingsInput placeholder="Narration" />
        </div>
      </form>

      <div className="w-[30%] m-auto justify-self-center mt-12">
        <Button
          buttonText="Continue"
          className="rounded-xl"
          size="lg"
          onClick={goToConfirmationPage}
        />
      </div>
    </div>
  );
};

export { BetsAndLotteries };
