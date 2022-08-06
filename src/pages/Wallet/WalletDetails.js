import React from "react";
import { Link } from "react-router-dom";

import { Table, TableHeader } from "../../components";
import WalletDetailsHeader from "./WalletDetailsHeader";

const WalletDetails = () => {
  const data = React.useMemo(
    () => [
      {
        transactionType: (
          <div className="flex items-center">
            <img src="/assets/icons/redArrow.svg" alt="redArrow" />
            <p className="text-base text-redTwo pl-2 font-medium">Debit</p>
          </div>
        ),
        amount: <p className="text-base text-blueTwo font-normal">N 105,000</p>,
        reference: (
          <p className="text-base text-orange font-medium">Adelani Ifeanyi</p>
        ),
        date: <p className="text-base text-blueTwo font-medium">26 Apr 2022</p>,
        narration: (
          <p className="text-base text-blueTwo font-normal">
            CAPIVAL-WEB-90920280
          </p>
        ),
        view: (
          <Link
            to="dashboard/wallet/details/transaction-details"
            className="text-base text-blueTwo font-normal"
          >
            view
          </Link>
        ),
      },
      {
        transactionType: (
          <div className="flex items-center">
            <img src="/assets/icons/greenArrow.svg" alt="redArrow" />
            <p className="text-base text-redTwo pl-2 font-medium">Debit</p>
          </div>
        ),
        amount: <p className="text-base text-blueTwo font-normal">N 105,000</p>,
        reference: (
          <p className="text-base text-orange font-medium">Adelani Ifeanyi</p>
        ),
        date: <p className="text-base text-blueTwo font-medium">26 Apr 2022</p>,
        narration: (
          <p className="text-base text-blueTwo font-normal">
            CAPIVAL-WEB-90920280
          </p>
        ),
        view: <p className="text-base text-blueTwo font-normal">view</p>,
      },
      {
        transactionType: (
          <div className="flex items-center">
            <img src="/assets/icons/redArrow.svg" alt="redArrow" />
            <p className="text-base text-redTwo pl-2 font-medium">Debit</p>
          </div>
        ),
        amount: <p className="text-base text-blueTwo font-normal">N 105,000</p>,
        reference: (
          <p className="text-base text-orange font-medium">Adelani Ifeanyi</p>
        ),
        date: <p className="text-base text-blueTwo font-medium">26 Apr 2022</p>,
        narration: (
          <p className="text-base text-blueTwo font-normal">
            CAPIVAL-WEB-90920280
          </p>
        ),
        view: <p className="text-base text-blueTwo font-normal">view</p>,
      },
      {
        transactionType: (
          <div className="flex items-center">
            <img src="/assets/icons/greenArrow.svg" alt="redArrow" />
            <p className="text-base text-redTwo pl-2 font-medium">Debit</p>
          </div>
        ),
        amount: <p className="text-base text-blueTwo font-normal">N 105,000</p>,
        reference: (
          <p className="text-base text-orange font-medium">Adelani Ifeanyi</p>
        ),
        date: <p className="text-base text-blueTwo font-medium">26 Apr 2022</p>,
        narration: (
          <p className="text-base text-blueTwo font-normal">
            CAPIVAL-WEB-90920280
          </p>
        ),
        view: <p className="text-base text-blueTwo font-normal">view</p>,
      },
    ],
    []
  );

  const columns = React.useMemo(
    () => [
      {
        Header: "Transaction Type",
        accessor: "transactionType", // accessor is the "key" in the data
      },
      {
        Header: "Amount",
        accessor: "amount",
      },
      {
        Header: "Reference",
        accessor: "reference",
      },
      {
        Header: "Date",
        accessor: "date",
      },
      {
        Header: "Narration",
        accessor: "narration",
      },
      {
        Header: "",
        accessor: "view",
      },
    ],
    []
  );

  return (
    <main className="mt-8">
      <WalletDetailsHeader ifSearchBar />

      <div className="my-8 mx-7">
        <TableHeader
          header="Recent Transactions"
          pageNumber="Showing 1-15 of 15 transactions"
        />

        <Table data={data} columns={columns} />
      </div>
    </main>
  );
};

export { WalletDetails };
