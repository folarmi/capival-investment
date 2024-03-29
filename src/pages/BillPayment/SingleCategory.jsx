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

  const { singleBillPaymentCategoryLoading, getBillerProductsLoading } =
    useSelector((state) => state.billPayment);

  const getBillerProducts = (item) => {
    dispatch(getBillerProductsAsync(item?.billerId))
      .unwrap()
      .then((res) => {
        if (res?.status === true) {
          navigate("/dashboard/bill-payment/category/form", {
            state: res?.data,
          });
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
      <div className="flex items-center justify-center">
        <WalletDetailsHeader ifTransaction={false} />
        {getBillerProductsLoading && (
          <img className="h-6 w-6" src="/assets/icons/loading.svg" />
        )}
      </div>

      <>
        {singleBillPaymentCategoryLoading ? (
          <Loader />
        ) : (
          <div className="px-4 md:px-10 lg:px-20 row my-16">
            {state &&
              state?.map((item) => {
                return (
                  <div className="w-full cursor-pointer column" key={item?.id}>
                    <img
                      src={item?.billerLogoUrl}
                      // src="/assets/icons/logoOnly.svg"
                      alt="loan detail"
                      className="w-full h-20"
                      loading="lazy"
                      onClick={() => getBillerProducts(item)}
                    />

                    <p className="pt-4 text-sm w-[90%] font-medium text-center">
                      {item?.billerName}
                    </p>
                  </div>
                );
              })}
          </div>
        )}
      </>
    </div>
  );
};

export { SingleCategory };
