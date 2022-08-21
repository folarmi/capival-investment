import React, { useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { Table, TableHeader } from "../../components";
import { WalletCard } from "../../components/WalletCard";
import walletBg from "../../icons/walletBg.svg";
import investmentBg from "../../icons/investmentBg.svg";
import { getTransactionHistoryAsync } from "../../slices/transactionHistory";
import { FormattedCurrency } from "../../atoms/FormattedCurrency";

const Wallet = () => {
  const navigate = useNavigate();
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

  const goToWallet = () => {
    navigate("/dashboard/wallet/details");
  };

  const goToInvestments = () => {
    navigate("/dashboard/wallet/investments");
  };

  const goToLoansPage = () => {
    navigate("/dashboard/loans");
  };

  return (
    <>
      <div className="flex justify-between items-center mt-12 mx-4">
        <WalletCard
          title="Wallet"
          ifAccountName
          cardName="Account Name"
          amount="50,000.25"
          onClick={goToInvestments}
          bgImage={investmentBg}
        />

        <WalletCard
          title="Wallet"
          ifAccountName
          cardName="Account Name"
          amount="50,000.25"
          onClick={goToWallet}
          bgImage={walletBg}
          ifAccountNumber
          accountNumber="0046378932"
        />

        <WalletCard
          title="Wallet"
          ifAccountName
          cardName="Account Name"
          amount="50,000.25"
          onClick={goToLoansPage}
          bgImage={walletBg}
          ifAccountNumber
          accountNumber="0046378932"
        />
      </div>

      <section className="mt-8 mx-4 md:mx-7">
        <TableHeader
          header="Recent Transactions"
          pageNumber={`Showing 1-${transactionHistory?.length} of ${transactionHistory?.length} transactions`}
        />

        <div className="mt-2">
          <Table data={data} columns={columns} />
        </div>
      </section>
    </>
  );
};

export { Wallet };
