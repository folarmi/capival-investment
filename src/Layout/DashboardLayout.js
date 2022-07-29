import React from "react";
import { useSelector } from "react-redux";

import { Navigate, Outlet } from "react-router-dom";
import { DashboardHeader } from "../atoms";
import { Sidebar } from "../molecules";

const DashboardLayout = () => {
  const checkAuthStatus = useSelector((state) => state.auth.login);
  const isAuthenticated =
    checkAuthStatus?.isLoggedIn &&
    checkAuthStatus?.user?.authorisation[0]?.original?.token &&
    checkAuthStatus?.user?.status;

  return (
    <>
      {isAuthenticated ? (
        <div>
          <DashboardHeader />
          <div className="w-full h-full flex gap-1">
            <div className="lg:w-[16%] fixed lg:block hidden bg-blueTwo sidebar-bg">
              <Sidebar />
            </div>

            <div className="lg:ml-[16%] lg:w-[84%] w-full dashboard-bg h-screen">
              {/* <div className="m-auto w-[60%] text-center mt-6 border border-blueTwo rounded-3xl py-2">
                <p className="font-normal text-base text-blueTwo">
                  Congratulation, you are eligible to higher loan this month{" "}
                  <span className="text-redOne font-semibold">View Status</span>
                </p>
              </div> */}
              <Outlet />
            </div>
          </div>
        </div>
      ) : (
        <Navigate to="/" replace={true} />
      )}
    </>
  );
};

export { DashboardLayout };
