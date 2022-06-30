import React from "react";
import { Outlet } from "react-router-dom";
import { DashboardHeader } from "../atoms";
import { Sidebar } from "../molecules";

const DashboardLayout = () => {
  return (
    <>
      <DashboardHeader />
      <div className="w-full h-full flex gap-1">
        <div className="lg:w-[16%] fixed lg:block hidden bg-blueTwo">
          <Sidebar />
        </div>
        <div className="lg:ml-[16%] lg:w-[84%] w-full">
          {/* <div className="w-full mt-[88px] p-6"> */}
          <Outlet />
        </div>
        {/* </div> */}
      </div>
    </>
  );
};

export { DashboardLayout };
