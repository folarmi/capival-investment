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
} from "../pages";
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
        <Route path="dashboard/bill-payment/cable" element={<CableTV />} />
        <Route path="dashboard/mobile-top-up" element={<MobileTopUp />} />
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
        <Route path="dashboard/capival-pension" element={<CapivalPension />} />
      </Route>
    </Routes>
  );
};

export default Index;
