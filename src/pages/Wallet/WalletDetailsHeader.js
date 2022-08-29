import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { WalletCard } from "../../components";
import { SearchBar } from "../../components/SearchBar";
import walletBg from "../../icons/walletBg.svg";
import { getWalletBalanceAsync } from "../../slices/utils";

const WalletDetailsHeader = ({ ifSearchBar, ifTransaction = true }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [accountBalance, setAccountBalance] = useState("");
  const accountNumber = useSelector(
    (state) => state.auth.login?.user?.user?.accounts?.AccountNo
  );

  const getWalletBalance = async (num) => {
    const data = await dispatch(getWalletBalanceAsync());
    setAccountBalance(data?.payload?.balance);
  };

  const goToTransactionPage = () => {
    navigate("/dashboard/transaction-history");
  };

  const goToGenerateStatementPage = () => {
    navigate("/dashboard/generate-statement");
  };

  useEffect(() => {
    getWalletBalance();
  }, []);

  return (
    <div className="flex flex-col justify-center items-center">
      <WalletCard
        title="Wallet"
        ifAccountName
        cardName="Account Name"
        amount={accountBalance}
        bgImage={walletBg}
        ifAccountNumber
        accountNumber={accountNumber}
      />

      {ifTransaction && (
        <section className="flex items-center mt-5 px-4 md:px-0">
          <div
            className="flex whitespace-nowrap items-center cursor-pointer"
            onClick={goToTransactionPage}
          >
            <img
              src="/assets/icons/refresh.svg"
              alt="refresh"
              className="mr-1"
              loading="lazy"
            />
            <p className="text-sm md:text-base font-normal md:font-medium text-blueTwo">
              Transaction History
            </p>
          </div>

          <div
            className="whitespace-nowrap flex items-center ml-5 cursor-pointer"
            onClick={goToGenerateStatementPage}
          >
            <img
              src="/assets/icons/downloadIcon.svg"
              alt="refresh"
              className="mr-1"
              loading="lazy"
            />
            <p className="text-sm md:text-base font-normal md:font-medium text-blueTwo">
              Download Statement
            </p>
          </div>
        </section>
      )}

      {ifSearchBar && <SearchBar placeholder="Search for transactions" />}
    </div>
  );
};

export default WalletDetailsHeader;
