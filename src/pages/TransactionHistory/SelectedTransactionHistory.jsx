import React, { useCallback, useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import { useDispatch, useSelector } from "react-redux";

import { Button, Loader } from "../../atoms";
import { Table, TableHeader } from "../../components";
import { getdatedTransactionHistoryAsync } from "../../slices/transactionHistory";
import { FormattedCurrency } from "../../atoms/FormattedCurrency";
import { toast } from "react-toastify";

const SelectedTransactionHistory = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [showTable, setShowTable] = useState(false);

  const dispatch = useDispatch();
  const { datedTransactionHistory, getDatedTransactionHistoryLoading } =
    useSelector((state) => state.transactionHistory);

  useEffect(() => {
    dispatch(getdatedTransactionHistoryAsync());
  }, []);

  const getTransactionHistory = async (e) => {
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

    dispatch(getdatedTransactionHistoryAsync(variables))
      .unwrap()
      .then((res) => {
        if (res?.status === true) {
          setShowTable(true);
          //   toast("Statement Generated, please check your email");
        }
      })
      .catch((err) => {
        toast.error(err?.message);
      });
  };

  const getData = useCallback(() => {
    const result =
      datedTransactionHistory &&
      datedTransactionHistory?.map((item, i) => {
        return {
          transactionType: (
            <div className="flex items-center">
              {item?.credit === "0.00" ? (
                <img
                  src="/assets/icons/redArrow.svg"
                  alt="redArrow"
                  loading="lazy"
                />
              ) : (
                <img
                  src="/assets/icons/greenArrow.svg"
                  alt="greenArrow"
                  loading="lazy"
                />
              )}
              {item?.credit === "0.00" ? (
                <p className="text-sm text-redTwo pl-2 font-normal">Debit</p>
              ) : (
                <p className="text-sm text-greenOne pl-2 font-normal">Credit</p>
              )}
            </div>
          ),
          amount: <p className="text-sm text-blueTwo font-normal">N 105,000</p>,
          reference: (
            <p className="text-sm text-orange font-medium">{item?.reference}</p>
          ),
          date: (
            <p className="text-sm text-blueTwo font-medium">
              {" "}
              {item?.dat_post &&
                new Date(item?.dat_post)?.toISOString().substring(0, 10)}
            </p>
          ),
          dateValue: (
            <p className="text-sm text-blueTwo font-medium">
              {" "}
              {item?.dat_value &&
                new Date(item?.dat_value)?.toISOString().substring(0, 10)}
            </p>
          ),
          amount: (
            <p className="text-sm text-blueTwo font-medium">
              <FormattedCurrency
                value={item?.credit === "0.00" ? item?.debit : item?.credit}
              />
            </p>
          ),
          narration: (
            <p className="text-sm text-blueTwo font-normal">
              {item?.txt_txn_desc.length > 20
                ? `${item?.txt_txn_desc.slice(0, 20)}....`
                : item?.txt_txn_desc}
            </p>
          ),
          // view: <p className="text-sm text-blueTwo font-normal">view</p>,
        };
      });
    return [...(result || [])];
  }, [datedTransactionHistory]);

  const columns = React.useMemo(
    () => [
      {
        Header: "Transaction Type",
        accessor: "transactionType",
      },
      {
        Header: "Reference",
        accessor: "reference",
      },
      {
        Header: "Date Posted",
        accessor: "date",
      },
      {
        Header: "Date Value",
        accessor: "dateValue",
      },
      {
        Header: "Narration",
        accessor: "narration",
      },
      {
        Header: "Amount",
        accessor: "amount",
      },
      {
        Header: "",
        accessor: "view",
      },
    ],
    []
  );

  const data = React.useMemo(() => getData(), [getData]);

  return (
    <>
      <div>
        <div className="m-auto w-full md:w-[60%] mt-8">
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
                buttonText="Fetch Transactions"
                className="rounded-xl mb-10"
                size="lg"
                isLoading={getDatedTransactionHistoryLoading}
                onClick={getTransactionHistory}
              />
            </div>
          </form>
        </div>
        {showTable && (
          <>
            {getDatedTransactionHistoryLoading ? (
              <Loader />
            ) : (
              <section className="mt-8 mx-4 md:mx-7">
                <TableHeader
                  header="Transactions History"
                  pageNumber={`Showing 1-${datedTransactionHistory.length} of ${datedTransactionHistory.length} transactions`}
                />

                <div className="mt-2">
                  <Table data={data} columns={columns} />
                </div>
              </section>
            )}
          </>
        )}
      </div>
    </>
  );
};

export { SelectedTransactionHistory };
