import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { BillCard } from "../../components";
import WalletDetailsHeader from "../Wallet/WalletDetailsHeader";
import {
  getBillPaymentCategories,
  singleBillPaymentCategoryAsync,
} from "../../slices/billPayment";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Loader } from "../../atoms";

const BillPayment = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {
    billPaymentCategories,
    billPaymentCategoriesLoading,
    singleBillPaymentCategoryLoading,
  } = useSelector((state) => state.billPayment);

  const formattedValues =
    billPaymentCategories &&
    billPaymentCategories?.map((item) => {
      return {
        value: item?.categoryName?.replace(/ /g, "_").replace(/&/g, ""),
        label: item?.categoryName,
        id: item?.categoryId,
      };
    });

  const goToSingleCategoryPage = (item) => {
    dispatch(singleBillPaymentCategoryAsync(item?.id))
      .unwrap()
      .then((res) => {
        if (res?.status === true) {
          navigate("/dashboard/bill-payment/category", {
            state: res?.data,
          });
        }
      })
      .catch((err) => {
        toast.error(err?.message);
      });
  };

  useEffect(() => {
    dispatch(getBillPaymentCategories());
  }, []);

  return (
    <>
      <div className="mt-8">
        <div className="flex items-center justify-center">
          <WalletDetailsHeader ifTransaction={false} />
          {singleBillPaymentCategoryLoading && (
            <img className="h-6 w-6" src="/assets/icons/loading.svg" />
          )}
        </div>

        {billPaymentCategoriesLoading ? (
          <Loader />
        ) : (
          <main className="px-4 md:px-10 lg:px-20 w-full gallery  mt-16">
            {billPaymentCategories &&
              formattedValues?.map((item) => {
                return (
                  <>
                    <BillCard
                      cardName={item?.label}
                      // path={item?.value}
                      id={item?.categoryId}
                      onClick={() => goToSingleCategoryPage(item)}
                    />
                    {/* )} */}
                  </>
                );
              })}
          </main>
        )}
      </div>
    </>
  );
};

export { BillPayment };
