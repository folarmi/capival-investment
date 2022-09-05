import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Loader } from "../../atoms";
import { getBillerProductsAsync } from "../../slices/billPayment";
// import { useSelector } from "react-redux";
import WalletDetailsHeader from "../Wallet/WalletDetailsHeader";

const SingleCategory = () => {
  const { state } = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { singleBillPaymentCategoryLoading } = useSelector(
    (state) => state.billPayment
  );

  const getBillerProducts = (item) => {
    // console.log(item);
    dispatch(getBillerProductsAsync(item?.billerId))
      .unwrap()
      .then((res) => {
        if (res?.status === true) {
          // navigate("/dashboard/bill-payment/category", {
          //   state: res?.data,
          // });
        }
      })
      .catch((err) => {
        toast.error(err?.message);
      });
  };
  // const { singleBillPaymentCategory } = useSelector(
  //   (state) => state.billPayment
  // );

  return (
    <div className="mt-8">
      <WalletDetailsHeader ifTransaction={false} />

      <>
        {singleBillPaymentCategoryLoading ? (
          <Loader />
        ) : (
          <div className="px-4 md:px-10 lg:px-20 w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-16">
            {state &&
              state?.map((item) => {
                return (
                  <img
                    // src={item?.billerLogoUrl}
                    src="/assets/images/gotv.svg"
                    alt="loan detail"
                    className="w-[120px] mt-6"
                    loading="lazy"
                    onClick={() => getBillerProducts(item)}
                  />
                );
              })}
          </div>
        )}
      </>
    </div>
  );
};

export { SingleCategory };
