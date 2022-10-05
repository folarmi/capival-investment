import React from "react";
import { Table, TableHeader } from "../../../../components";

const TermDeposit = () => {
  // const data = [
  //   amount_saved: <p>test</p>
  // ]

  const data = React.useMemo(
    () => [
      {
        amount_saved: <p>test</p>,
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

  const goToDetailPage = (item) => {
    console.log(item);
  };

  return (
    <div>
      <section className="mt-8 mx-4 md:mx-7">
        <TableHeader header="Transactions History" />

        <div className="mt-2">
          <Table
            data={data}
            columns={columns}
            onClick={(item) => goToDetailPage(item)}
            // onClick={(item) => goToSinglePage(item?.id?.props?.children)}
          />
        </div>
      </section>
    </div>
  );
};

export { TermDeposit };

// <tbody {...getTableBodyProps()}>
// {rows.map((row) => {
//   prepareRow(row);
//   return (
//     <tr
//       {...row.getRowProps()}
//       className="text-left"
//       // onClick={() => onClick(row.original)}
//     >
//       {row.cells.map((cell) => {
//         return (
//           <td
//             {...cell.getCellProps()}
//             className="whitespace-nowrap font-normal py-3 text-base"
//           >
//             {cell.render("Cell")}
//           </td>
//         );
//       })}
//     </tr>
//   );
// })}
// </tbody>
