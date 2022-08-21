import React, { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getTransactionHistoryAsync } from "../../slices/transactionHistory";
import { Table, TableHeader } from "../../components";
import { FormattedCurrency } from "../../atoms/FormattedCurrency";

const TransactionHistory = () => {
  const dispatch = useDispatch();
  const { transactionHistory } = useSelector(
    (state) => state.transactionHistory
  );

  useEffect(() => {
    dispatch(getTransactionHistoryAsync());
  }, []);

  const getData = useCallback(() => {
    const result =
      transactionHistory &&
      transactionHistory?.map((item, i) => {
        return {
          transactionType: (
            <div className="flex items-center">
              {item?.credit === "0.00" ? (
                <img src="/assets/icons/redArrow.svg" alt="redArrow" />
              ) : (
                <img src="/assets/icons/greenArrow.svg" alt="greenArrow" />
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
          balance: (
            <p className="text-sm text-blueTwo font-medium">
              <FormattedCurrency value={item?.balance} />
            </p>
          ),
          narration: (
            <p className="text-sm text-blueTwo font-normal">
              {item?.txt_txn_desc.length > 20
                ? `${item?.txt_txn_desc.slice(0, 20)}....`
                : item?.txt_txn_desc}
            </p>
          ),
          view: <p className="text-sm text-blueTwo font-normal">view</p>,
        };
      });
    return [...(result || [])];
  }, [transactionHistory]);

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
        Header: "Balance",
        accessor: "balance",
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
    <div>
      <section className="mt-8 mx-4 md:mx-7">
        <TableHeader
          header="Recent Transactions"
          pageNumber={`Showing 1-${transactionHistory.length} of ${transactionHistory.length} transactions`}
        />

        <div className="mt-2">
          <Table data={data} columns={columns} />
        </div>
      </section>
    </div>
  );
};

export { TransactionHistory };
