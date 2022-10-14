import React, { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Loader } from "../../../../atoms";
import { FormattedCurrency } from "../../../../atoms/FormattedCurrency";
import { Table, TableHeader } from "../../../../components";
import { getAllTermDepositTenureAsync } from "../../../../slices/investments";

const TermDepositAll = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { allTermDepositTenure, getAllTermDepositTenureLoading } = useSelector(
    (state) => state.investments
  );

  const goToSinglePage = (item) => {
    navigate(
      `/dashboard/wallet/investments/saving-type/term-deposit/${item?.id}`,
      {
        state: item,
      }
    );
  };

  const getData = useCallback(() => {
    const result =
      allTermDepositTenure &&
      allTermDepositTenure?.map((item, i) => {
        return {
          amount: (
            <p className="text-sm text-blueTwo font-normal">
              {" "}
              <FormattedCurrency value={item?.amount} />
            </p>
          ),
          interest_rate: (
            <p className="text-sm text-orange font-medium">{`${item?.rate}% per annum`}</p>
          ),
          maturity_date: (
            <p className="text-sm text-blueTwo font-medium">
              {item?.maturity_date}
            </p>
          ),
          view: (
            <p
              onClick={() => goToSinglePage(item)}
              className="text-sm text-blueTwo font-medium cursor-pointer"
            >
              View Details
            </p>
          ),
        };
      });
    return [...(result || [])];
  }, [allTermDepositTenure]);

  const data = React.useMemo(() => getData(), [getData]);

  const columns = React.useMemo(
    () => [
      {
        Header: "Amount Saved",
        accessor: "amount",
      },
      {
        Header: "Interest Rate",
        accessor: "interest_rate",
      },
      {
        Header: "Maturity Date",
        accessor: "maturity_date",
      },
      {
        Header: "",
        accessor: "view",
      },
    ],
    []
  );

  useEffect(() => {
    dispatch(getAllTermDepositTenureAsync());
  }, []);

  return (
    <div>
      {getAllTermDepositTenureLoading ? (
        <Loader />
      ) : (
        <section className="mt-8 mx-4 md:mx-7">
          <TableHeader header="Term Deposit" />

          <div className="mt-2">
            <Table data={data} columns={columns} />
          </div>
        </section>
      )}
    </div>
  );
};

export { TermDepositAll };
