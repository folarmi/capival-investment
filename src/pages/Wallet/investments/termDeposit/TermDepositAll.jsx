import React from "react";
import { Table, TableHeader } from "../../../../components";

const TermDepositAll = () => {
  // const data = [
  //   amount_saved: <p>test</p>
  // ]

  const data = React.useMemo(
    () => [
      {
        amount_saved: (
          <p className="font-normal text-lg text-orange">N 60,000</p>
        ),
        interest_rate: (
          <p className="font-normal text-lg text-blueTwo">N 60,000</p>
        ),
        maturity_date: (
          <p className="font-normal text-lg text-blueTwo">31-Dec-2022</p>
        ),
      },
      {
        amount_saved: (
          <p className="font-normal text-lg text-orange">N 60,000</p>
        ),
        interest_rate: (
          <p className="font-normal text-lg text-blueTwo">N 60,000</p>
        ),
        maturity_date: (
          <p className="font-normal text-lg text-blueTwo">31-Dec-2022</p>
        ),
      },
    ],
    []
  );

  const columns = React.useMemo(
    () => [
      {
        Header: "Amount Saved",
        accessor: "amount_saved",
      },
      {
        Header: "Interest Rate",
        accessor: "interest_rate",
      },
      {
        Header: "Maturity Date",
        accessor: "maturity_date",
      },
    ],
    []
  );

  return (
    <div>
      <section className="mt-8 mx-4 md:mx-7">
        <TableHeader header="Term Deposit" />

        <div className="mt-2">
          <Table data={data} columns={columns} />
        </div>
      </section>
    </div>
  );
};

export { TermDepositAll };
