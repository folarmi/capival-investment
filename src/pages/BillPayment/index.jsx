import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { BillCard } from "../../components";
import WalletDetailsHeader from "../Wallet/WalletDetailsHeader";
import { getBillPaymentCategories } from "../../slices/billPayment";

const BillPayment = () => {
  const dispatch = useDispatch();

  const { billPaymentCategories } = useSelector((state) => state.billPayment);

  const formattedValues =
    billPaymentCategories &&
    billPaymentCategories?.map((item) => {
      return {
        value: item?.categoryName?.replace(/ /g, "_").replace(/&/g, ""),
        label: item?.categoryName,
      };
    });

  useEffect(() => {
    dispatch(getBillPaymentCategories());
  }, []);

  return (
    <>
      <div className="mt-8">
        <WalletDetailsHeader ifTransaction={false} />

        <main className="px-4 md:px-10 lg:px-20 w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-16">
          {billPaymentCategories &&
            formattedValues?.map((item) => {
              return (
                <BillCard
                  cardName={item?.label}
                  path={item?.value}
                  id={item?.categoryId}
                />
              );
            })}
        </main>
      </div>
    </>
  );
};

export { BillPayment };
