import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { BillCard } from "../../components";
import WalletDetailsHeader from "../Wallet/WalletDetailsHeader";
import { getBillPaymentCategories } from "../../slices/billPayment";

const BillPayment = () => {
  const dispatch = useDispatch();

  const { billPaymentCategories } = useSelector((state) => state.billPayment);
  console.log("from billPage", billPaymentCategories);

  var string = "my name";
  string = string.replace(/ /g, "_");

  //  const test = billPaymentCategories.map((item) => {
  //   return {
  // item?.categoryDescription
  //   }
  //  })

  console.log(string);

  useEffect(() => {
    dispatch(getBillPaymentCategories());
  }, []);

  return (
    <div className="mt-8">
      <WalletDetailsHeader ifTransaction={false} />

      <main className="px-20 w-full grid grid-cols-4 gap-12 mt-16">
        {billPaymentCategories &&
          billPaymentCategories?.map((item) => {
            return (
              <BillCard
                cardName={item?.categoryName}
                path="cable"
                id={item?.categoryId}
              />
            );
          })}
        {/* <BillCard cardName="Medical Services" path="cable" />
        <BillCard cardName="Internet Service" path="cable" />
        <BillCard cardName="Bill Power & Electricity" path="cable" />
        <BillCard cardName="Taxes & Levies" path="cable" />
        <BillCard cardName="Insurance" path="cable" />
        <BillCard cardName="Transport & Toll Payment" path="cable" />
        <BillCard cardName="Education" path="cable" />
        <BillCard cardName="Data Purchase" path="cable" />
        <BillCard cardName="Others" path="cable" /> */}
      </main>
    </div>
  );
};

export { BillPayment };
