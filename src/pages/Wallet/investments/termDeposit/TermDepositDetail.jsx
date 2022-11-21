import React from "react";
import CurrencyFormat from "react-currency-format";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Button } from "../../../../atoms";
import {
  liquidateInvestmentAsync,
  requestInvestmentLetterAsync,
} from "../../../../slices/investments";

const TermDepositDetail = () => {
  const { state } = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { requestInvestmentLetterLoading, liquidateInvestmentLoading } =
    useSelector((state) => state?.investments);

  const getInvestmentLetter = () => {
    dispatch(requestInvestmentLetterAsync(state?.id))
      .unwrap()
      .then((res) => {
        if (res?.status === true) {
          console.log(res);
          toast("Investment Letter Sent");
        }
      })
      .catch((err) => {
        toast.error(err?.message);
      });
  };

  const liquidate = () => {
    dispatch(liquidateInvestmentAsync(state?.id))
      .unwrap()
      .then((res) => {
        if (res?.status === true) {
          toast(res?.message);
          navigate("/dashboard/wallet/investments");
        }
      })
      .catch((err) => {
        toast.error(err?.message);
      });
  };

  return (
    <div className="mt-4">
      <p className="text-2xl text-center py-6 text-blueTwo font-medium">
        Term Deposit
      </p>
      <p className="font-normal text-xl text-blueTwo pb-4 md:pb-8 pl-6 md:pl-12">
        Details
      </p>

      <main className=" bg-blueSix rounded-lg px-0 md:px-6 mx-7">
        <div className="w-full md:flex md:items-center border-b border-blueTwo/30 pt-8 pb-4">
          <p className="text-base font-medium text-blueTwo md:w-[40%] pl-[10%]">
            Investment Type:
          </p>
          <p className="pl-[10%] md:pl-0 text-base font-normal text-blueTwo md:w-[60%]">
            Term Deposit
          </p>
        </div>

        <div className="w-full md:flex md:items-center border-b border-blueTwo/30 pt-8 pb-4">
          <p className="text-base font-medium text-blueTwo md:w-[40%] pl-[10%]">
            Amount
          </p>
          <p className="pl-[10%] md:pl-0 text-base font-normal text-blueTwo md:w-[60%]">
            <CurrencyFormat
              value={state?.amount}
              displayType={"text"}
              thousandSeparator={true}
              prefix={"₦"}
            />
          </p>
        </div>

        <div className="w-full md:flex md:items-center border-b border-blueTwo/30 pt-8 pb-4">
          <p className="text-base font-medium text-blueTwo md:w-[40%] pl-[10%]">
            Maturity Amount
          </p>
          <p className="pl-[10%] md:pl-0 text-base font-normal text-blueTwo md:w-[60%]">
            <CurrencyFormat
              value={state?.maturity_amount}
              displayType={"text"}
              thousandSeparator={true}
              prefix={"₦"}
            />
          </p>
        </div>

        <div className="w-full md:flex md:items-center border-b border-blueTwo/30 pt-8 pb-4">
          <p className="text-base font-medium text-blueTwo md:w-[40%] pl-[10%]">
            Duration
          </p>
          <p className="pl-[10%] md:pl-0 text-base font-normal text-blueTwo md:w-[60%]">
            {`${state?.tenor} days`}
          </p>
        </div>

        <div className="w-full md:flex md:items-center border-b border-blueTwo/30 pt-8 pb-4">
          <p className="text-base font-medium text-blueTwo md:w-[40%] pl-[10%]">
            Interest
          </p>
          <p className="pl-[10%] md:pl-0 text-base font-normal text-blueTwo md:w-[60%]">
            {`${state?.interest_rate}`}
          </p>
        </div>

        <div className="w-full md:flex md:items-center  border-b border-blueTwo/30 pt-8 pb-4 ">
          <p className="text-base font-medium text-blueTwo md:w-[40%] pl-[10%]">
            Start Date
          </p>
          <p className="pl-[10%] md:pl-0 text-base font-normal text-blueTwo md:w-[60%]">
            {state?.booking_date}
          </p>
        </div>

        <div className="w-full md:flex md:items-center pt-8 pb-4 ">
          <p className="text-base font-medium text-blueTwo md:w-[40%] pl-[10%]">
            End Date
          </p>
          <p className="pl-[10%] md:pl-0 text-base font-normal text-blueTwo md:w-[60%]">
            {state?.maturity_date}
          </p>
        </div>
      </main>

      <div className="flex m-auto w-[60%] md:justify-center rounded- md:items-center mt-8">
        <Button
          onClick={liquidate}
          isLoading={liquidateInvestmentLoading}
          className="rounded-[50px] mr-10 w-1/2 mb-20"
          buttonText="Liquidate"
        />

        <Button
          onClick={getInvestmentLetter}
          isLoading={requestInvestmentLetterLoading}
          className="rounded-[50px] w-1/2 mb-20"
          buttonText="Request Investment Letter"
        />
      </div>
    </div>
  );
};

export { TermDepositDetail };
