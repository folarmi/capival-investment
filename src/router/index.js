import { Route, Routes } from "react-router-dom";

import {
  Dashboard,
  ForgotPassword,
  Loans,
  Login,
  Register,
  Wallet,
  ForgotPasswordOTP,
  CreateNewPassword,
  NewLoan,
  Repayment,
  NextRepayment,
  LoanDetails,
  SettleLoan,
  BillPayment,
  CableTV,
  MobileTopUp,
  ConfirmationPage,
  Rewards,
  CapivalHomes,
  CapivalPension,
  TransactionHistory,
  BetsAndLotteries,
  DebitCard,
  OtherBanksTransfer,
  ChangePassword,
  ChangePin,
  TransferReceipt,
} from "../pages";
import { BetTransactionDetail } from "../pages/BetsAndLorries/BetTransactionDetail";
import CapivalTransfer from "../pages/CapivalTransfers";
import { FixedDeposits } from "../pages/Wallet/investments/fixedDeposit";
import { Confirmation } from "../pages/Wallet/investments/fixedDeposit/Confirmation";
import { Investments } from "../pages/Wallet/investments/Investments";
import { Savings } from "../pages/Wallet/investments/savings";
import { SavingsConfirmation } from "../pages/Wallet/investments/savings/SavingsConfirmation";
import { WalletDetails } from "../pages/Wallet/WalletDetails";
import { WalletTransactionDetails } from "../pages/Wallet/WalletTransactionDetails";
import { RequiredAuthDashboard } from "./RequiredAuth";

const Index = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/create-profile" element={<Register />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/forgot-password-otp" element={<ForgotPasswordOTP />} />
      <Route path="/create-new-password" element={<CreateNewPassword />} />
      <Route element={<RequiredAuthDashboard />}>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="dashboard/wallet" element={<Wallet />} />
        <Route path="dashboard/wallet/details" element={<WalletDetails />} />
        <Route path="dashboard/wallet/investments" element={<Investments />} />
        <Route
          path="dashboard/wallet/investments/new-saving"
          element={<Savings />}
        />
        <Route
          path="dashboard/wallet/investments/new-saving/confirm"
          element={<SavingsConfirmation />}
        />
        <Route
          path="dashboard/wallet/investments/new-fixed-deposits"
          element={<FixedDeposits />}
        />
        <Route
          path="dashboard/wallet/investments/new-fixed-deposits/confirm"
          element={<Confirmation />}
        />
        <Route
          path="dashboard/wallet/details/transaction-details"
          element={<WalletTransactionDetails />}
        />
        <Route path="dashboard/loans" element={<Loans />} />
        <Route path="dashboard/loans/new-loan" element={<NewLoan />} />
        <Route path="dashboard/loans/repayment" element={<Repayment />} />
        <Route
          path="dashboard/loans/next-repayment"
          element={<NextRepayment />}
        />
        <Route path="dashboard/loans/details" element={<LoanDetails />} />
        <Route path="dashboard/loans/settle-loan" element={<SettleLoan />} />
        <Route path="dashboard/bill-payment" element={<BillPayment />} />
        {/* <Route
          path="dashboard/bill-payment/Airtime__Data"
          element={<CableTV />}
        /> */}
        <Route path="dashboard/Airtime__Data" element={<MobileTopUp />} />
        <Route
          path="dashboard/bill-payment/Airtime__Data"
          element={<MobileTopUp />}
        />
        <Route
          path="dashboard/mobile-top-up/confirm"
          element={<ConfirmationPage />}
        />
        <Route path="dashboard/rewards" element={<Rewards />} />
        <Route path="dashboard/capival-homes" element={<CapivalHomes />} />
        <Route
          path="dashboard/capival-transfers"
          element={<CapivalTransfer />}
        />
        <Route
          path="dashboard/capival-transfers/receipt"
          element={<TransferReceipt />}
        />
        <Route path="dashboard/capival-pension" element={<CapivalPension />} />
        <Route
          path="dashboard/transaction-history"
          element={<TransactionHistory />}
        />
        <Route
          path="dashboard/bets-and-lotteries"
          element={<BetsAndLotteries />}
        />
        <Route
          path="dashboard/bets-and-lotteries/confirm"
          element={<BetTransactionDetail />}
        />
        <Route path="dashboard/debit-card" element={<DebitCard />} />
        <Route path="dashboard/other-banks" element={<OtherBanksTransfer />} />
        <Route
          path="dashboard/profile/change-password"
          element={<ChangePassword />}
        />
        <Route path="dashboard/profile/change-pin" element={<ChangePin />} />
      </Route>
    </Routes>
  );
};

export default Index;
