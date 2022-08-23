import React from "react";

import { Outlet } from "react-router-dom";
import { DashboardHeader } from "../atoms";
import { Sidebar } from "../molecules";

const DashboardLayout = () => {
  return (
    <>
      <div>
        <DashboardHeader />
        <div className="w-full h-full flex gap-1">
          <div className="mt-[88px] lg:w-[16%] h-full fixed lg:block hidden sidebar-bg">
            <Sidebar />
          </div>

          <div className="mt-[88px] lg:ml-[16%] lg:w-[84%] w-full dashboard-bg h-screen">
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
};

export { DashboardLayout };
