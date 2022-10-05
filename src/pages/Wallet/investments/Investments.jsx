import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { LockedSavingsAll } from "./lockedSavings/LockedSavingsAll";
import { TargetSavingsAll } from "./targetSavings/TargetSavingsAll";
import { TermDepositAll } from "./termDeposit/TermDepositAll";

const Investments = () => {
  const navigate = useNavigate();

  const [activeTab, setActiveTab] = useState("Term Deposit");

  const data = [
    {
      id: "1",
      target: "N 600,000",
      amountSaved: "N60,000",
      timeLeft: "6 Months",
      assetType: "Fixed Deposit",
    },
    {
      id: "2",
      target: "N 600,000",
      amountSaved: "N60,000",
      timeLeft: "6 Months",
      assetType: "Fixed Deposit",
    },
    {
      id: "3",
      target: "N 600,000",
      amountSaved: "N60,000",
      timeLeft: "6 Months",
      assetType: "Fixed Deposit",
    },
  ];

  const tabs = [
    {
      id: "1",
      name: "Term Deposit",
    },
    {
      id: "2",
      name: "Target Savings",
    },
    {
      id: "3",
      name: "Locked Savings",
    },
  ];

  const goToSavingsTypePage = () => {
    navigate("/dashboard/wallet/investments/saving-type");
  };

  const changeActiveItem = (item) => {
    setActiveTab(item?.name);
  };

  return (
    <div>
      <section
        className="flex justify-center items-center mt-8 cursor-pointer"
        onClick={goToSavingsTypePage}
      >
        <img
          src="/assets/images/investmentImg.svg"
          alt="savings image"
          className="lg:w-3/6"
        />
      </section>

      <section className="w-full md:w-[60%] mt-10 m-auto flex items-center justify-center border-2 border-[#887F92] rounded-xs md:rounded-xl">
        {tabs.map((tab) => {
          return (
            <div
              className="cursor-pointer"
              key={tab?.id}
              onClick={() => changeActiveItem(tab)}
            >
              <p
                className="justify-self-center py-1 text-center px-3 uppercase text-xs md:text-base font-normal md:font-medium"
                style={{
                  color: activeTab === tab?.name ? "white" : "#3B58A8",
                  backgroundColor:
                    activeTab === tab?.name ? "#3B58A8" : "#E2E7F2",
                }}
              >
                {tab?.name}
              </p>
            </div>
          );
        })}
      </section>
      {activeTab === "Term Deposit" && <TermDepositAll />}
      {activeTab === "Target Savings" && <TargetSavingsAll />}
      {activeTab === "Locked Savings" && <LockedSavingsAll />}
    </div>
  );
};

export { Investments };
