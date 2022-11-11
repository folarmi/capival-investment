import React, { useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { Button } from "../../atoms";
import { generateAccountStatementAsync } from "../../slices/transactionHistory";
import WalletDetailsHeader from "../Wallet/WalletDetailsHeader";

const GenerateStatement = () => {
  const dispatch = useDispatch();
  const { generateStatementLoading } = useSelector(
    (state) => state.transactionHistory
  );

  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  const getStatement = async (e) => {
    e.preventDefault();
    var newDateOptions = {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    };
    const variables = {
      start_date: startDate.toLocaleString("en-US", newDateOptions),
      end_date: endDate.toLocaleString("en-US", newDateOptions),
    };

    dispatch(generateAccountStatementAsync(variables))
      .unwrap()
      .then((res) => {
        if (res?.status === true) {
          toast("Statement Generated, please check your email");
        }
      })
      .catch((err) => {
        console.log(err);
        toast.error(err?.message);
      });
  };

  return (
    <div className="m-auto w-full md:w-[60%] mt-8">
      <WalletDetailsHeader ifTransaction={false} />

      <form className="px-6 lg:px-0 mt-8 grid grid-cols-1 md:grid-cols-2">
        <div>
          <label
            htmlFor="start Date"
            className={`text-sm font-normal text-blueTwo`}
          >
            Start Date
          </label>
          <div className="cursor-pointer px-4 mr-4 border border-blueTwo/50 py-4 rounded-[20px] flex items-center text-blueTwo bg-blueTwo/20">
            <DatePicker
              selected={startDate}
              onChange={(date) => setStartDate(date)}
            />
            <img src="/assets/icons/calendar.svg" alt="" />
          </div>
        </div>

        <div className="mt-6 lg:mt-0">
          <label
            htmlFor="start Date"
            className={`text-sm font-normal text-blueTwo`}
          >
            End Date
          </label>
          <div className="cursor-pointer px-4 mr-4 border border-blueTwo/50 py-4 rounded-[20px] flex items-center text-blueTwo bg-blueTwo/20">
            <DatePicker
              selected={endDate}
              onChange={(date) => setEndDate(date)}
            />
          </div>
        </div>

        <div className="w-full mt-10 md:w-[80%] m-auto lg:ml-[60%]">
          <Button
            buttonText="Generate Statement"
            className="rounded-xl mb-10"
            size="lg"
            isLoading={generateStatementLoading}
            onClick={getStatement}
          />
        </div>
      </form>
    </div>
  );
};

export { GenerateStatement };
