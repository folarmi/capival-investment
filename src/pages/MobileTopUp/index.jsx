import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { Button, SavingsInput } from "../../atoms";
import WalletDetailsHeader from "../Wallet/WalletDetailsHeader";
import { getAirtimeBillersAsync } from "../../slices/mobileTopup";

const MobileTopUp = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const goToConfirmationPage = () => {
    navigate("/dashboard/mobile-top-up/confirm");
  };

  //   {
  //     "billerId": "C0000264104",
  //     "billerName": "9-Mobile",
  //     "billerShortName": "9-Mobile",
  //     "billerLogoUrl": "http://cdn.remita.net/biller/images/logo/c0000264104.png",
  //     "categoryId": "1",
  //     "categoryName": "Airtime & Data",
  //     "categoryDescription": "Airtime & Data"
  // }

  const { airtimeBillers } = useSelector((state) => state.mobileTopUp);
  const selectedAmount = [
    {
      id: "1",
      amount: "N 100.00",
    },
    {
      id: "2",
      amount: "N 200.00",
    },
    {
      id: "3",
      amount: "N 500.00",
    },
    {
      id: "3",
      amount: "N 1000.00",
    },
  ];

  const formattedValues =
    airtimeBillers &&
    airtimeBillers?.map((item) => {
      return {
        imgUrl: item?.billerLogoUrl,
        label: item?.billerName,
        id: item?.billerId,
      };
    });

  useEffect(() => {
    dispatch(getAirtimeBillersAsync());
  }, []);

  return (
    <div className="mt-8">
      <WalletDetailsHeader ifTransaction={false} />

      <div className="grid grid-cols-4 m-auto w-[90%] md:w-[50%] -gap-10 mt-8">
        {airtimeBillers &&
          formattedValues?.map((item) => {
            return (
              <div key={item?.id}>
                <img
                  // src={item?.imgUrl}
                  src="/assets/images/airtel.svg"
                  alt={item?.label}
                  className="w-20"
                  loading="lazy"
                />
                <p className="text-sm pl-4 text-primary">{item?.label}</p>
              </div>
            );
          })}
      </div>

      <form className="grid rid-cols-1g md:grid-cols-2 gap-2 md:gap-10 mt-12 m-auto w-[90%] md:w-[70%]">
        <div>
          <SavingsInput placeholder="Mobile Number" />
        </div>
        <div className="mt-8 md:mt-0">
          <SavingsInput placeholder="Amount" />
        </div>
      </form>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12 m-auto w-[90%] md:w-[70%]">
        {selectedAmount.map((item) => {
          return (
            <div className="rounded-lg p-4 bg-[#afbbdb]" key={item?.id}>
              <p className="font-semibold text-base text-blueTwo flex items-center justify-center">
                {item?.amount}
              </p>
            </div>
          );
        })}
      </div>

      <div className="w-[80%] md:w-[30%] m-auto justify-self-center mt-12">
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

export { MobileTopUp };
