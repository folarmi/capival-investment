import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Button, Loader, SavingsInput } from "../../atoms";
import { getAllBettingBillersAsync } from "../../slices/mobileTopup";
import WalletDetailsHeader from "../Wallet/WalletDetailsHeader";

const BetsAndLotteries = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { bettingBillersLoading, bettingBillers } = useSelector(
    (state) => state.mobileTopUp
  );

  const goToConfirmationPage = (item) => {
    navigate("/dashboard/bets-and-lotteries/form", {
      state: item,
    });
  };

  useEffect(() => {
    dispatch(getAllBettingBillersAsync());
  }, []);

  return (
    <>
      {bettingBillersLoading ? (
        <Loader />
      ) : (
        <div className="mt-8">
          <WalletDetailsHeader ifTransaction={false} />

          <div className="gallery m-auto w-[70%] -gap-10 mt-8">
            {bettingBillers &&
              Array.isArray(bettingBillers) &&
              bettingBillers?.map((biller) => {
                return (
                  <div
                    onClick={() => goToConfirmationPage(biller)}
                    key={biller?.billerId}
                    className="cursor-pointer"
                  >
                    <img
                      src={biller?.billerLogoUrl}
                      alt="bet"
                      // className="w-20"
                      // className="w-full max-w-[100px] lg:max-w-[210px] px-6 my-4"
                      className="gallery__img my-4"
                      loading="lazy"
                    />
                    <p className="text-sm w-[90%] font-medium text-center">
                      {biller?.billerName}
                    </p>
                  </div>
                );
              })}
          </div>
        </div>
      )}
    </>
  );
};

export { BetsAndLotteries };

// {
//   "billerId": "supabet",
//   "billerName": "SupaBet",
//   "billerShortName": "SupaBet",
//   "billerLogoUrl": "https://baxi-biller-pod-images.s3.eu-west-1.amazonaws.com/images/supabet.jpeg",
//   "categoryId": "betting",
//   "categoryName": "Betting",
//   "categoryDescription": "Betting"
// }
