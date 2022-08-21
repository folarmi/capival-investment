import React from "react";
import { useTable } from "react-table";
import ReactPaginate from "react-paginate";

import { Loader } from "../atoms/Loader";

const Table = ({
  data,
  columns,
  isLoading,
  pageCount,
  handlePageClick,
  ifPagination,
}) => {
  // const paginationStyle = {
  //   backgroundColor: "red",
  // };

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data });

  function PaginatedItems() {
    return (
      <div className="mt-6">
        <ReactPaginate
          breakLabel="..."
          nextLabel="Next >"
          className="flex items-center justify-end mr-10 text-black/70"
          onPageChange={handlePageClick}
          pageRangeDisplayed={5}
          pageCount={pageCount}
          previousLabel="< Prev"
          renderOnZeroPageCount={null}
          activeClassName="text-white bg-darkBlue"
          pageClassName="flex justify-center items-center mx-2  rounded-[50%] w-[30px] h-[30px] border border-b/20"
        />
      </div>
    );
  }

  const emptyTable = () => {
    return (
      <div className="h-full font-thin">
        {data.length < 1 ? (
          <div className="fixed flex justify-center w-full">
            <div className="pt-[80px] md:pt-[200px] pr-16 md:pr-64">
              <div className="flex justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                </svg>
              </div>
              <p>Nothing to show here</p>
            </div>
          </div>
        ) : null}
      </div>
    );
  };

  return (
    <>
      {rows.length || isLoading ? (
        <>
          {isLoading ? (
            // <div className="flex justify-center items-center">
            <Loader />
          ) : (
            <table
              {...getTableProps()}
              className="w-full overflow-scroll bg-white border-collapse rounded-2xl"
            >
              <thead className="rounded-2xl">
                {headerGroups.map((headerGroup) => (
                  <tr {...headerGroup.getHeaderGroupProps()}>
                    {headerGroup.headers.map((column) => (
                      <th
                        {...column.getHeaderProps()}
                        className="font-medium text-sm whitespace-nowrap text-blueTwo py-4 text-left pl-4 bg-blueTwo/20"
                      >
                        {column.render("Header")}
                      </th>
                    ))}
                  </tr>
                ))}
              </thead>
              <tbody {...getTableBodyProps()} className="bg-blueTwo/5 ">
                {rows.map((row) => {
                  prepareRow(row);
                  return (
                    <tr {...row.getRowProps()} className="">
                      {row.cells.map((cell) => {
                        return (
                          <td
                            {...cell.getCellProps()}
                            className="font-normal py-2 xl:text-lg px-3"
                          >
                            {cell.render("Cell")}
                          </td>
                        );
                      })}
                    </tr>
                  );
                })}
              </tbody>
            </table>
          )}

          {ifPagination && <PaginatedItems itemsPerPage={4} />}
        </>
      ) : (
        <div>{emptyTable()}</div>
      )}{" "}
    </>
  );
};
export { Table };
