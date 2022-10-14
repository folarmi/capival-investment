import React, { useCallback, useEffect, useState } from "react";
import CurrencyFormat from "react-currency-format";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
// import { Loader } from "..";
import { TargetCard } from "./TargetCard";
import { getSingleTargetSavingAsync } from "../../../../slices/investments";
import { QuickTopUp } from "./QuickTopUp";
import ModalPopup from "../../../../components/ModalPopup";
import { Loader } from "../../../../atoms";
import { ExtendSavings } from "./ExtendSavings";
import { ChangeFundingSource } from "./ChangeFundingSource";
import { BreakSavings } from "./BreakSavings";
import { Table, TableHeader } from "../../../../components";
import { FormattedCurrency } from "../../../../atoms/FormattedCurrency";

const TargetSavingsDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { getSingleTargetSavingLoading, singleTargetDetails } = useSelector(
    (state) => state.investments
  );

  const [quickTopUpModal, setQuickTopUpModal] = useState(false);
  const [extendModal, setExtendModal] = useState(false);
  const [changeSource, setChangeSource] = useState(false);
  const [breakSavingsModal, setBreakSavingsModal] = useState(false);

  const toggleQuickTopUpModal = () => {
    setQuickTopUpModal(!quickTopUpModal);
  };

  const toggleExtendModal = () => {
    setExtendModal(!extendModal);
  };

  const toggleChangeSourceModal = () => {
    setChangeSource(!changeSource);
  };

  const toggleBreakSavingsModal = () => {
    setBreakSavingsModal(!breakSavingsModal);
  };

  useEffect(() => {
    dispatch(getSingleTargetSavingAsync(id));
  }, []);

  const getData = useCallback(() => {
    const result =
      singleTargetDetails?.transactions &&
      singleTargetDetails?.transactions?.map((item, i) => {
        return {
          transType: (
            <div className="flex items-center">
              {item?.tran_type === "credit" ? (
                <img
                  src="/assets/icons/greenArrow.svg"
                  alt="redArrow"
                  loading="lazy"
                />
              ) : (
                <img
                  src="/assets/icons/redArrow.svg"
                  alt="greenArrow"
                  loading="lazy"
                />
              )}
              {item?.tran_type === "credit" ? (
                <p className="text-sm text-greenOne pl-2 font-normal">Credit</p>
              ) : (
                <p className="text-sm text-redTwo pl-2 font-normal">Debit</p>
              )}
            </div>
          ),
          amount: (
            <p className="text-sm text-blueTwo font-medium">
              <FormattedCurrency value={item?.amount} />
            </p>
          ),
          paymentSource: (
            <p className="text-sm text-blueTwo font-medium">
              {item?.payment_source}
            </p>
          ),
          date: (
            <p className="text-sm text-blueTwo font-medium">
              {" "}
              {item?.created_at &&
                new Date(item?.created_at)?.toISOString().substring(0, 10)}
            </p>
          ),
          narration: (
            <p className="text-sm text-blueTwo font-medium">
              {item?.narration}
            </p>
          ),
        };
      });
    return [...(result || [])];
  }, [singleTargetDetails?.transactions]);

  const columns = React.useMemo(
    () => [
      {
        Header: "Transaction Type",
        accessor: "transType",
      },
      {
        Header: "Amount",
        accessor: "amount",
      },
      {
        Header: "Payment Source",
        accessor: "paymentSource",
      },
      {
        Header: "Date",
        accessor: "date",
      },
      {
        Header: "Narration",
        accessor: "narration",
      },
    ],
    []
  );

  const data = React.useMemo(() => getData(), [getData]);

  return (
    <>
      {getSingleTargetSavingLoading ? (
        <Loader />
      ) : (
        <>
          <div className="flex flex-col justify-center items-center mt-8">
            <div className="h-full text-white flex flex-col justify-center items-center investment-bg rounded-xl shadow-md cursor-pointer">
              <section className="flex items-center">
                <p className="bg-[#644031] uppercase py-3 px-5 rounded-lg">
                  {singleTargetDetails?.title}
                </p>
                <div className="flex items-center ml-4">
                  <div className="bg-[#00FF00] w-[10px] h-[10px] rounded-full"></div>
                  <p className="font-medium text-lg pl-2">
                    {singleTargetDetails?.status}
                  </p>
                </div>
              </section>

              <p className="font-medium text-sm">Balance</p>
              <p className="text-white font-medium px-10 text-3xl text-center">
                <CurrencyFormat
                  value={singleTargetDetails?.totalPayment}
                  displayType={"text"}
                  thousandSeparator={true}
                  prefix={"₦"}
                />
              </p>

              <div class="flex w-full my-2 justify-end">
                <span class="text-xs font-normal pr-4">
                  {singleTargetDetails?.progress}% complete
                </span>
              </div>
              <div class="w-[80%] mx-10 bg-white rounded-full h-1.5 mb-2">
                <div
                  class="bg-[#111127] h-1.5 rounded-full"
                  style={{ width: singleTargetDetails?.progress }}
                ></div>
              </div>

              <p
                onClick={toggleQuickTopUpModal}
                className="uppercase bg-[#644031] rounded-3xl text-xs px-5 py-1.5"
              >
                Quick Top up
              </p>

              <section className="flex items-center justify-around mt-2 cursor-pointer">
                <div
                  className="flex items-center bg-[#43272c] px-3 py-1 mr-3"
                  onClick={toggleExtendModal}
                >
                  <img src="/assets/icons/extend.svg" alt="" />
                  <p className="text-xs uppercase pl-2">Extend</p>
                </div>

                <div
                  onClick={toggleBreakSavingsModal}
                  className="flex items-center bg-[#43272c] px-3 py-1 mr-3"
                >
                  <img src="/assets/icons/break.svg" alt="" />
                  <p className="text-xs uppercase pl-2">Break</p>
                </div>

                <div
                  onClick={toggleChangeSourceModal}
                  className="flex items-center bg-[#43272c] px-3 py-1"
                >
                  <img src="/assets/icons/changeTarget.svg" alt="" />
                  <p className="text-xs uppercase pl-2">Change Source</p>
                </div>
              </section>
            </div>

            <section className="flex items-center gap-6 justify-around mt-6">
              <TargetCard
                title="My Target"
                value={` ₦${singleTargetDetails?.target_amount}`}
              />
              <TargetCard
                title="Frequency"
                value={singleTargetDetails?.frequency_amount}
                ifSecondValue
                secondValue={singleTargetDetails?.savings_frequency}
              />
              <TargetCard
                title="Interest"
                value={`${singleTargetDetails?.interestAccrued}% per annum`}
              />
              <TargetCard
                title="Withdrawal Date"
                value={singleTargetDetails?.withdrawal_date}
              />
            </section>

            <ModalPopup
              modalHeight="400px"
              modalWidth="400px"
              children={
                <QuickTopUp
                  toggleQuickTopUpModal={toggleQuickTopUpModal}
                  savingsId={id}
                />
              }
              isOpen={quickTopUpModal}
            />

            <ModalPopup
              modalHeight="600px"
              modalWidth="500px"
              children={
                <ExtendSavings
                  toggleExtendModal={toggleExtendModal}
                  savingsId={id}
                />
              }
              isOpen={extendModal}
            />

            <ModalPopup
              modalHeight="300px"
              modalWidth="400px"
              children={
                <ChangeFundingSource
                  toggleChangeSourceModal={toggleChangeSourceModal}
                  savingsId={id}
                />
              }
              isOpen={changeSource}
            />

            <ModalPopup
              modalHeight="600px"
              modalWidth="500px"
              children={
                <BreakSavings
                  toggleBreakSavingsModal={toggleBreakSavingsModal}
                  savingsId={id}
                  withdrawal_date={singleTargetDetails?.withdrawal_date}
                />
              }
              isOpen={breakSavingsModal}
            />
          </div>

          <section className="mt-8 mx-4 md:mx-7">
            <TableHeader
              header="Transactions History"
              // pageNumber={`Showing 1-${datedTransactionHistory.length} of ${datedTransactionHistory.length} transactions`}
            />

            <div className="mt-2">
              <Table data={data} columns={columns} />
            </div>
          </section>
        </>
      )}
    </>
  );
};

export { TargetSavingsDetails };
