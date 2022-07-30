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
} from "../pages";
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
        <Route path="/wallet" element={<Wallet />} />
        <Route path="/wallet/details" element={<WalletDetails />} />
        <Route path="/wallet/investments" element={<Investments />} />
        <Route path="/wallet/investments/new-saving" element={<Savings />} />
        <Route
          path="/wallet/investments/new-saving/confirm"
          element={<SavingsConfirmation />}
        />
        <Route
          path="/wallet/details/transaction-details"
          element={<WalletTransactionDetails />}
        />
        <Route path="dashboard/loans" element={<Loans />} />
      </Route>
    </Routes>
  );
};

export default Index;
