import React, { useEffect } from "react";
import CurrencyFormat from "react-currency-format";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { Loader } from "../../../../atoms";
import { getAllSafeLockAsync } from "../../../../slices/investments";
import { lockedSavingsHeader } from "../../../../utils/data";
// getAllSafeLock

const LockedSavingsAll = () => {
  const dispatch = useDispatch();
  const { getAllSafeLock, getAllSafeLockLoading } = useSelector(
    (state) => state.investments
  );

  const allSafeLocks =
    getAllSafeLock &&
    getAllSafeLock?.map((item) => {
      return {
        id: item?.id,
        amountLocked: item?.amount_locked,
        interest_rate: item?.interest_rate,
        interest_earned: item?.interest_earned,
        payBackDate: item?.payback_date,
        status: item?.status,
      };
    });

  useEffect(() => {
    dispatch(getAllSafeLockAsync());
  }, []);

  return (
    <>
      {getAllSafeLockLoading ? (
        <Loader />
      ) : (
        <div className="w-full ">
          <main className="hidden bg-blueTwo/10 md:block mx-4 md:mx-7 mt-4 rounded-xl">
            <section className="bg-blueTwo/20 rounded-xl py-4 overflow-scroll">
              <div className="grid grid-cols-4 gap-5 items-center">
                {lockedSavingsHeader.map((header) => {
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
              {allSafeLocks?.length === 0 ? (
                <p className="text-center my-10 text-blueTwo text-xl">
                  No Target Savings
                </p>
              ) : (
                <>
                  {" "}
                  {allSafeLocks?.map((item) => {
                    return (
                      <div
                        key={item?.id}
                        className="mt-4 mb-4 whitespace-nowrap lg:grid grid-cols-4 bg-blueTwo/5 py-3"
                      >
                        <p className="text-base text-orange font-medium pl-6">
                          <CurrencyFormat
                            value={item?.amountLocked}
                            displayType={"text"}
                            thousandSeparator={true}
                            prefix={"₦"}
                          />
                        </p>

                        <p className="text-base text-blueTwo font-medium pl-6">
                          <CurrencyFormat
                            value={item?.interest_earned}
                            displayType={"text"}
                            thousandSeparator={true}
                            prefix={"₦"}
                          />
                        </p>

                        <p className="text-base text-blueTwo font-medium pl-6">
                          {Number(item?.interest_rate).toFixed(2)}%
                        </p>
                        <p className="text-base text-blueTwo font-medium pl-6">
                          {item?.payBackDate}
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

export { LockedSavingsAll };
