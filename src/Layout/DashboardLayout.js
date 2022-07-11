import React from "react";
import { Outlet } from "react-router-dom";
import { DashboardHeader } from "../atoms";
import { Sidebar } from "../molecules";

const DashboardLayout = () => {
  return (
    <>
      <DashboardHeader />
      <div className="w-full h-full flex gap-1">
        <div className="lg:w-[16%] fixed lg:block hidden bg-blueTwo sidebar-bg">
          <Sidebar />
        </div>

        <div className="lg:ml-[16%] lg:w-[84%] w-full dashboard-bg ">
          <div className="m-auto w-[60%] text-center mt-6 border border-blueTwo rounded-3xl py-2">
            <p className="font-normal text-base text-blueTwo">
              Congratulation, you are eligible to higher loan this month{" "}
              <span className="text-redOne font-semibold">View Status</span>
            </p>
          </div>
          <Outlet />
        </div>
        {/* </div> */}
      </div>
    </>
  );
};

export { DashboardLayout };
