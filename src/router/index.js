import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import { Login, Register } from "../pages";

const Index = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/create-profile" element={<Register />} />
      </Routes>
    </Router>
  );
};

export default Index;
