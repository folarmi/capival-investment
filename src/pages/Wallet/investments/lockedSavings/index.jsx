import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Loader } from "../../../../atoms";
import { tenureAndRateAsync } from "../../../../slices/utils";

const LockedSavings = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { tenureAndRateLoading, tenureAndRate } = useSelector(
    (state) => state.utils
  );

  const tenureAndRateData =
    tenureAndRate &&
    tenureAndRate?.map((item) => {
      return {
        id: item?.id,
        min_day: item?.min_day,
        max_day: item?.max_day,
        rate: item?.rate,
      };
    });

  const goToForm = (item) => {
    navigate("/dashboard/wallet/investments/saving-type/locked-savings/form", {
      state: item,
    });
  };

  useEffect(() => {
    dispatch(tenureAndRateAsync());
  }, []);

  return (
    <div className="mt-4 lg:mt-10 m-auto w-[90%] md:w-[80%] lg:w-[70%]">
      <p className="font-bold text-lg text-blueTwo text-center pb-2">
        Locked Savings
      </p>
      <p className="text-lg font-medium text-center text-blueTwo">
        Lock away funds safely and earn up to 9%. Locked savings start timing
        from N 5,000.00
      </p>

      <main>
        <p className="text-lg font-medium text-blueTwo my-8 text-center">
          How Long do will you like to lock your savings.
        </p>

        {tenureAndRateLoading ? (
          <Loader />
        ) : (
          <section className="flex flex-wrap gap-[2rem] rounded-xl items-center justify-around py-10 bg-[#eaeef6]">
            {tenureAndRateData &&
              tenureAndRateData?.map((type) => {
                return (
                  <div
                    className="hover:bg-blueTwo cursor-pointer bg-blueFour hover:text-white text-blueTwo flex flex-col items-center justify-center w-[270px] h-[270px] rounded-2xl"
                    key={type?.id}
                    onClick={() => goToForm(type)}
                  >
                    <p className="font-medium text-lg pb-2 ">
                      {type?.min_day} - {type?.max_day} days
                    </p>
                    <p className="font-semibold text-lg italic">
                      {type?.rate}% per annum
                    </p>
                  </div>
                );
              })}
          </section>
        )}
      </main>
    </div>
  );
};

export { LockedSavings };
