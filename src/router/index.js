import { Route, Routes } from "react-router-dom";

import { Dashboard, Loans, Login, Register, Wallet } from "../pages";
import { Investments } from "../pages/Wallet/Investments";
import { WalletDetails } from "../pages/Wallet/WalletDetails";
import { WalletTransactionDetails } from "../pages/Wallet/WalletTransactionDetails";
import { RequiredAuthDashboard } from "./RequiredAuth";

const Index = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/create-profile" element={<Register />} />
      <Route element={<RequiredAuthDashboard />}>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/wallet" element={<Wallet />} />
        <Route path="/wallet/details" element={<WalletDetails />} />
        <Route path="/wallet/investments" element={<Investments />} />
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
