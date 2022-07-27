import React from "react";
import { Link } from "react-router-dom";
import { Table, TableHeader, WalletCard } from "../../components";

const Investments = () => {
  const data = React.useMemo(
    () => [
      {
        target: (
          <p className="text-base text-orange pl-2 font-normal">N 600,000</p>
        ),
        amountSaved: (
          <p className="text-base text-blueTwo font-semibold">N60,000</p>
        ),
        timeLeft: (
          <p className="text-base text-blueTwo font-normal">6 Months</p>
        ),
        assetType: (
          <p className="text-base text-blueFive font-normal">Fixed Deposit</p>
        ),
      },
      {
        target: (
          <p className="text-base text-orange pl-2 font-normal">N 600,000</p>
        ),
        amountSaved: (
          <p className="text-base text-blueTwo font-semibold">N60,000</p>
        ),
        timeLeft: (
          <p className="text-base text-blueTwo font-normal">6 Months</p>
        ),
        assetType: (
          <p className="text-base text-blueFive font-normal">Fixed Deposit</p>
        ),
      },
      {
        target: (
          <p className="text-base text-orange pl-2 font-normal">N 600,000</p>
        ),
        amountSaved: (
          <p className="text-base text-blueTwo font-semibold">N60,000</p>
        ),
        timeLeft: (
          <p className="text-base text-blueTwo font-normal">6 Months</p>
        ),
        assetType: (
          <p className="text-base text-blueFive font-normal">Fixed Deposit</p>
        ),
      },
    ],
    []
  );

  const columns = React.useMemo(
    () => [
      {
        Header: "Target",
        accessor: "target",
      },
      {
        Header: "Amount Saved",
        accessor: "amountSaved",
      },
      {
        Header: "Time Left",
        accessor: "timeLeft",
      },
      {
        Header: "Asset Type",
        accessor: "assetType",
      },
    ],
    []
  );

  return (
    <div>
      <section className="flex justify-center items-center mt-8">
        <WalletCard
          title="Investments"
          primaryColor="#246362"
          secColor="linear-gradient(165.82deg, #33458D -121.49%, #C06B29 13.24%, #21093A 138.23%)"
          ifAccountName
          cardName="Account Name"
          amount="50,000.25"
        />
      </section>

      <div className="my-8 mx-7">
        <TableHeader header="Active Assets" pageNumber="See all" />

        <Table data={data} columns={columns} />
      </div>
    </div>
  );
};

export { Investments };
