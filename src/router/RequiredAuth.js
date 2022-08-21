import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
// import { useSelector } from "react-redux";

import { DashboardLayout } from "../Layout";

export function RequiredAuthDashboard() {
  const isAuthenticated = useSelector((state) => state.auth?.login?.isLoggedIn);
  const token = window.sessionStorage.getItem("accessToken");

  // const test = useSelector((state) => state.auth?.login);
  // console.log("auth", isAuthenticated, "token", token);

  return (
    <>
      {isAuthenticated && token ? (
        <DashboardLayout>
          <Outlet />
        </DashboardLayout>
      ) : (
        <>
          <Navigate to="/" replace />
        </>
      )}
    </>
  );
}
