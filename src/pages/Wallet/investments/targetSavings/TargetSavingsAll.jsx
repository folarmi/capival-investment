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
          <main className="hidden md:block mx-4 md:mx-7 mt-4 bg-blueTwo/10 rounded-xl">
            <section className="bg-blueTwo/20 rounded-xl py-4 overflow-scroll">
              <div className="grid grid-cols-5 gap-5 items-center">
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

            <div className="bg-blueTwo/10 overflow-scroll">
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
                          className="cursor-pointer mt-4 mb-4 whitespace-nowrap lg:grid grid-cols-5 bg-blueTwo/5 py-3"
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
          </main>
        </div>
      )}
    </>
  );
};

export { TargetSavingsAll };
