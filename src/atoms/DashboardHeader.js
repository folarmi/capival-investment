import React from "react";
import { useSelector } from "react-redux";

import { SearchBar } from "./SearchBar";

const DashboardHeader = () => {
  const userObject = useSelector((state) => state.auth.login.user.user);
  const test = useSelector((state) => state.auth.login);
  console.log(test);

  return (
    <header
      className="hidden w-full fixed md:flex items-start lg:items-center bg-white py-4 shadow-md"
      style={{
        zIndex: 9999,
      }}
    >
      <div className="ml-6 w-[10%] mr-[10%]">
        <img
          src="/assets/icons/logo.svg"
          alt="capival-logo"
          className="hidden md:block"
        />
      </div>

      <div className="flex whitespace-nowrap items-center mr-[3%]">
        <img src="/assets/icons/avatar.svg" alt="avatar" />
        <p className="text-base text-blueTwo font-normal pl-4">
          Hi,{" "}
          <span className="font-semibold">
            {userObject?.customer_data?.Firstname}
          </span>{" "}
        </p>
      </div>

      <div className="flex items-center mr-[42%]">
        <p className="text-[15pxs] text-blueTwo font-normal w-fit">Show BVN</p>
        <img src="/assets/icons/rightArrow.svg" alt="avatar" />
      </div>

      <div className="flex items-center  justify-self-end">
        {/* <SearchBar /> */}

        <div className="flex items-center ml-[5%] cursor-pointer">
          <a
            href="https://instagram.com/capivalinvestment?igshid=YmMyMTA2M2Y="
            target="_blank"
          >
            <img
              src="/assets/icons/instagram.svg"
              alt="avatar"
              className="mr-4"
            />
          </a>
          <a href="https://twitter.com/capivalinvest" target="_blank">
            <img
              src="/assets/icons/twitter.svg"
              alt="avatar"
              className="mr-4"
            />
          </a>
          <a href="https://facebook.com/CapivalInvestment/" target="_blank">
            <img src="/assets/icons/facebook.svg" alt="avatar" />
          </a>
        </div>
      </div>
    </header>
  );
};

export { DashboardHeader };
