import React, { useEffect } from "react";
import CurrencyFormat from "react-currency-format";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Loader } from "../../../../atoms";
import { getAllSafeLockAsync } from "../../../../slices/investments";
import { lockedSavingsHeader } from "../../../../utils/data";
// getAllSafeLock

const LockedSavingsAll = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
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

  const goToDetailsPage = (item) => {
    navigate(
      `/dashboard/wallet/investments/saving-type/locked-savings/${item.id}`,
      {
        state: item,
      }
    );
  };

  useEffect(() => {
    dispatch(getAllSafeLockAsync());
  }, []);
  return (
    <>
      {getAllSafeLockLoading ? (
        <Loader />
      ) : (
        <div className="w-full">
          <main className="hidden bg-blueTwo/10 md:block mx-4 md:mx-7 mt-4 rounded-xl">
            <section className="bg-blueTwo/20 rounded-xl py-4 overflow-scroll">
              <div className="grid grid-cols-5 gap-5 items-center">
                {lockedSavingsHeader.map((header) => {
                  return (
                    <div key={header?.id}>
                      <p className="font-medium whitespace-nowrap text-xs lg:text-base text-blueTwo px-6 md:w-[20%]">
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
                        className="mt-4 mb-4 whitespace-nowrap lg:grid grid-cols-5 bg-blueTwo/5 py-3 cursor-pointer"
                        onClick={() => goToDetailsPage(item)}
                      >
                        <p className="text-base text-orange font-medium pl-6">
                          <CurrencyFormat
                            value={item?.amountLocked && item?.amountLocked}
                            displayType={"text"}
                            thousandSeparator={true}
                            prefix={"₦"}
                          />
                        </p>

                        <p className="text-base text-blueTwo font-medium pl-6">
                          {item?.interest_earned}
                        </p>
                        {console.log(typeof item?.interest_earned)}
                        <p className="text-base text-blueTwo font-medium pl-6">
                          {Number(item?.interest_rate).toFixed(2)}%
                        </p>
                        <p className="text-base text-blueTwo font-medium pl-6">
                          {item?.payBackDate}
                        </p>
                        <p className="text-base text-blueTwo font-medium pl-6">
                          {item?.status}
                        </p>
                      </div>
                    );
                  })}
                </>
              )}
            </div>
          </main>

          <div className="mt-8">
            {Array.isArray(allSafeLocks) &&
              allSafeLocks &&
              allSafeLocks?.map((item) => {
                return (
                  <div
                    key={item?.id}
                    className="md:hidden bg-blueTwo rounded-lg py-8 px-6 mb-5 flex items-center mx-3"
                  >
                    <div className="w-1/2">
                      <p className="text-white font-medium text-[10px]">
                        {item?.status === "Locked" ? "Locked" : "Paid"}
                      </p>
                      <p className="text-white font-medium text-2xl">
                        <CurrencyFormat
                          value={item?.amountLocked && item?.amountLocked}
                          displayType={"text"}
                          thousandSeparator={true}
                          prefix={"₦"}
                        />
                      </p>

                      <p className="text-orange font-medium text-xs whitespace-nowrap">
                        Interest Earned: {item?.interest_earned}
                      </p>
                    </div>

                    <div className="w-1/2 flex flex-col">
                      {item?.status === "Locked" ? (
                        <div className="w-full self-end mb-auto">
                          <img
                            src="/assets/images/openLock.svg"
                            alt="closeButton"
                          />
                        </div>
                      ) : (
                        <div className="w-full ml-auto">
                          <img
                            src="/assets/images/Padlock.svg"
                            alt="closeButton"
                          />
                        </div>
                      )}

                      <p className="text-orange font-medium text-xs whitespace-nowrap">
                        Payback Date: {item?.payBackDate}
                      </p>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      )}
    </>
  );
};

export { LockedSavingsAll };
