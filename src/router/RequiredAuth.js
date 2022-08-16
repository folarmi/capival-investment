import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
// import { useSelector } from "react-redux";

import { DashboardLayout } from "../Layout";

export function RequiredAuthDashboard() {
  const isAuthenticated = useSelector((state) => state.auth?.login?.isLoggedIn);
  const token = window.sessionStorage.getItem("accessToken");

  // console.log("required auth", auth);
  return isAuthenticated && token ? (
    <DashboardLayout>
      <Outlet />
    </DashboardLayout>
  ) : (
    <Navigate to="/" replace />
  );
}
