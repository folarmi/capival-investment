import React from "react";
import deposit from "../../../icons/termDeposit.svg";
import targetSavings from "../../../icons/target.svg";
import lockedSavings from "../../../icons/lockedSavings.svg";
import { useNavigate } from "react-router-dom";

const SavingsType = () => {
  const navigate = useNavigate();

  const savingsTypeArray = [
    {
      id: "1",
      img: deposit,
      url: "term-deposit",
      name: "Term Deposit",
    },
    {
      id: "2",
      img: targetSavings,
      url: "target-savings",
      name: "Target Savings",
    },
    {
      id: "3",
      img: lockedSavings,
      url: "locked-savings",
      name: "Locked Savings",
    },
  ];

  const goToPage = (type) => {
    navigate(`/dashboard/wallet/investments/saving-type/${type?.url}`);
  };

  return (
    <div>
      <figure className="flex items-center justify-center mt-4 lg:mt-8">
        <img
          src="/assets/images/savingsTypeHeader.svg"
          alt="savings image"
          className="w-5/6 lg:w-3/6"
        />
      </figure>

      <main className="mt-8 lg:mt-16 bg-blueEight">
        <div className="m-auto b-4 md:mb-0 w-[50%] md:flex py-10 cursor-pointer">
          {savingsTypeArray?.map((type) => {
            return (
              <figure
                className="mb-4 md:mb-0 md:mx-4"
                key={type?.id}
                onClick={() => goToPage(type)}
              >
                <p className="text-blueTwo text-center">{type?.name}</p>
                <img src={type?.img} alt="savings image" loading="lazy" />
              </figure>
            );
          })}
        </div>
      </main>
    </div>
  );
};

export default SavingsType;
