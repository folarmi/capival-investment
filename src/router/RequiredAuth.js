import React from "react";
import { Outlet } from "react-router-dom";
// import { useSelector } from "react-redux";

import { DashboardLayout } from "../Layout";

export function RequiredAuthDashboard() {
  //   const auth = useSelector((state) => state.auth);

  return (
    <DashboardLayout>
      <Outlet />
    </DashboardLayout>
    //   ) : (
    // <Navigate to="/" replace />
  );
}
