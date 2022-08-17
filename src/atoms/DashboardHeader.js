import React from "react";
import { useSelector } from "react-redux";

import { SearchBar } from "./SearchBar";

const DashboardHeader = () => {
  const userObject = useSelector((state) => state.auth.login.user.user);

  return (
    <header className="hidden md:flex items-start lg:items-center bg-blueOne py-4">
      <div className="ml-6 w-[10%] mr-[10%]">
        <img
          src="/assets/icons/logo.svg"
          alt="capival-logo"
          className="hidden md:block"
        />
      </div>

      <div className="flex whitespace-nowrap items-center mr-[3%]">
        <img src="/assets/icons/avatar.svg" alt="avatar" />
        <p className="text-base text-blueTwo font-normal">
          Hi,{" "}
          <span className="font-semibold">
            {userObject?.accounts?.AccountTitle}
          </span>{" "}
        </p>
      </div>

      <div className="flex items-center mr-[22%]">
        <p className="text-[15pxs] text-blueTwo font-normal w-fit">Show BVN</p>
        <img src="/assets/icons/rightArrow.svg" alt="avatar" />
      </div>

      <div className="flex items-center">
        <SearchBar />

        <div className="flex items-center ml-[5%]">
          <img src="/assets/icons/instagram.svg" alt="avatar" />
          <img src="/assets/icons/twitter.svg" alt="avatar" />
          <img src="/assets/icons/facebook.svg" alt="avatar" />
        </div>
      </div>
    </header>
  );
};

export { DashboardHeader };
