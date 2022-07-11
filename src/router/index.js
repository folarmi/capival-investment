import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import { Dashboard, Loans, Login, Register, Wallet } from "../pages";
import { RequiredAuthDashboard } from "./RequiredAuth";

const Index = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/create-profile" element={<Register />} />
        <Route element={<RequiredAuthDashboard />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/wallet" element={<Wallet />} />
          <Route path="dashboard/loans" element={<Loans />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default Index;
