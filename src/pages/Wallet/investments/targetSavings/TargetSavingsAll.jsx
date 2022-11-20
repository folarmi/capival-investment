import React, { useEffect } from "react";
import CurrencyFormat from "react-currency-format";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { ProgressBar } from "../../../../components";
import { targetSavingsHeader } from "../../../../utils/data";
import { getAllTargetSavingsAsync } from "../../../../slices/investments";
import { Loader } from "../../../../atoms";

const TargetSavingsAll = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const goToSingleTargetSavings = (id) => {
    navigate(`/dashboard/wallet/investments/saving-type/target-savings/${id}`);
  };

  const { getAllTargetSavingsLoading, allTargetSavings } = useSelector(
    (state) => state.investments
  );

  useEffect(() => {
    dispatch(getAllTargetSavingsAsync());
  }, []);

  return (
    <>
      {getAllTargetSavingsLoading ? (
        <Loader />
      ) : (
        <div>
          <main className="md:block mx-4 md:mx-7 mt-4 bg-blueTwo/10 rounded-xl">
            <section className="hidden lg:block bg-blueTwo/20 rounded-xl py-4 overflow-scroll">
              <div className="grid grid-cols-6 gap-5 items-center">
                {targetSavingsHeader.map((header) => {
                  return (
                    <div key={header?.id}>
                      <p className="font-medium whitespace-nowrap text-base text-blueTwo px-6 md:w-[20%]">
                        {header?.name}
                      </p>
                    </div>
                  );
                })}
              </div>
            </section>

            <div className="hidden lg:block bg-blueTwo/10 overflow-scroll">
              {allTargetSavings?.length === 0 ? (
                <p className="text-center my-10 text-blueTwo text-xl">
                  No Target Savings
                </p>
              ) : (
                <>
                  {" "}
                  {Array.isArray(allTargetSavings) &&
                    allTargetSavings &&
                    allTargetSavings?.map((item) => {
                      return (
                        <div
                          key={item?.id}
                          className="cursor-pointer mt-4 mb-4 whitespace-nowrap lg:grid grid-cols-6 bg-blueTwo/5 py-3"
                          onClick={() => goToSingleTargetSavings(item?.id)}
                        >
                          <p className="text-base text-blueTwo font-medium pl-6 col-span-1">
                            {item?.title}
                          </p>
                          <p className="text-base text-orange font-medium pl-6 col-span-1">
                            <CurrencyFormat
                              value={item?.target_amount}
                              displayType={"text"}
                              thousandSeparator={true}
                              prefix={"₦"}
                            />
                          </p>
                          <p className="text-base text-blueTwo font-medium pl-6 col-span-1">
                            {item?.status}
                          </p>
                          <p className="text-base text-blueTwo font-medium pl-6 col-span-1">
                            {item?.savings_frequency}
                          </p>
                          <p className="text-base text-blueTwo font-medium pl-6 col-span-1">
                            {item?.category}
                          </p>
                          <p className="text-base text-orange font-medium pl-6 col-span-1">
                            {item?.withdrawal_date}
                          </p>
                        </div>
                      );
                    })}
                </>
              )}
            </div>

            {/* Mobile view starts here */}

            <section className="lg:hidden">
              {allTargetSavings?.length === 0 ? (
                <p className="w-full flex items-center justify-center my-10 text-white text-xl">
                  No Target Savings
                </p>
              ) : (
                <>
                  {" "}
                  {allTargetSavings?.map((item) => {
                    return (
                      <div
                        className="flex flex-col items-center justify-between mb-4 rounded-xl p-4"
                        style={{
                          backgroundColor: "#3B58A8",
                          boxShadow: "0px 1px 2px 0px #02733626",
                        }}
                      >
                        <div className="w-full pb-4 mb-3 flex items-center justify-between border-b border-[#6A77AC]">
                          <p className="text-white">{item?.title}</p>
                          <p className="text-xl font-medium">
                            <CurrencyFormat
                              value={item?.target_amount}
                              displayType={"text"}
                              thousandSeparator={true}
                              prefix={"₦"}
                            />
                          </p>
                        </div>

                        <div className="w-full pb-4 flex items-center justify-between">
                          <p className=" text-white">Amount Paid</p>
                          <p className="text-xl text-white font-medium">
                            <CurrencyFormat
                              value={item?.totalPayment}
                              displayType={"text"}
                              thousandSeparator={true}
                              prefix={"₦"}
                            />
                          </p>
                        </div>

                        <div className="w-full mb-5 bg-white py-2 px-3 rounded-md">
                          <ProgressBar
                            width={`${
                              item?.progress > 100 ? 100 : item?.progress
                            }%`}
                          />
                        </div>

                        <section className="w-full items-center flex justify-between">
                          <button
                            className="py-4 font-medium text-sm bg-white rounded-lg px-6 text-[#33458D]"
                            onClick={() => goToSingleTargetSavings(item?.id)}
                          >
                            See More
                          </button>

                          <p className=" text-white">{item?.status}</p>
                        </section>
                      </div>
                    );
                  })}
                </>
              )}
            </section>
          </main>
        </div>
      )}
    </>
  );
};

export { TargetSavingsAll };
