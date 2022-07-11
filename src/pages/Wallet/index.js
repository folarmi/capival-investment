import React from "react";
import { Table, TableHeader } from "../../components";
import { WalletCard } from "../../components/WalletCard";

const Wallet = () => {
  const data = React.useMemo(
    () => [
      {
        transactionType: (
          <div className="flex items-center">
            <img src="./assets/icons/redArrow.svg" alt="redArrow" />
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
            <img src="./assets/icons/greenArrow.svg" alt="redArrow" />
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
            <img src="./assets/icons/redArrow.svg" alt="redArrow" />
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
            <img src="./assets/icons/greenArrow.svg" alt="redArrow" />
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
    <>
      <div className="flex items-center mt-8 mx-4">
        <WalletCard
          title="Investments"
          primaryColor="#246362"
          secColor="#111228"
          cardName="Account Name"
          amount="50,000.25"
        />

        <WalletCard
          title="Wallet"
          primaryColor="#246362"
          secColor="#111228"
          ifAccountName
          cardName="Account Name"
          amount="50,000.25"
        />

        <WalletCard
          title="Loans"
          primaryColor="#246362"
          secColor="#111228"
          // cardName="Account Name"
          amount="50,000.25"
        />
      </div>

      <section className="mt-8 mx-7">
        <TableHeader
          header="Recent Transactions"
          pageNumber="Showing 1-15 of 15 transactions"
        />

        <Table data={data} columns={columns} />
      </section>
    </>
  );
};

export { Wallet };
