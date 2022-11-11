import React, { useState } from "react";
import { useSelector } from "react-redux";

import ModalPopup from "../components/ModalPopup";
import logout from "../icons/logout.svg";
import { SidebarMenuItems } from "../data/Sidebar";
import { SubMenu } from "../molecules";
import { logoutAsync } from "../slices/auth";
import { BvnModal } from "./BvnModal";
import { useDispatch } from "react-redux";

const MobileSidebar = ({ setSidebar, sidebar }) => {
  const dispatch = useDispatch();
  const [showBVN, setShowBVN] = useState(false);

  const userObject = useSelector((state) => state.auth.login?.user?.user);
  const userAvatar = useSelector(
    (state) => state.auth?.login?.user?.authorisation?.user_data?.passport
  );

  const logoutUser = () => {
    dispatch(logoutAsync());
  };

  const toggleSidebar = () => {
    setSidebar(!sidebar);
  };

  const toggleBVNModal = () => {
    setShowBVN(!showBVN);
  };

  return (
    <div className="fixed z-40 sidebar-bg w-[60%] h-full min-h-screen">
      <div
        className="flex justify-end cursor-pointer mr-4 mt-2"
        onClick={toggleSidebar}
      >
        <img src="/assets/icons/closeTwo.svg" alt="close" />
      </div>

      <div className="ml-[12%] flex whitespace-nowrap items-center mt-4">
        <img
          src={userAvatar}
          alt="avatar"
          className="w-12 md:h-12 rounded-full"
          loading="lazy"
        />
        <div className="pl-4 text-sm font-normal text-white">
          <p className="">
            Hi,{" "}
            <span className="font-normal">
              {userObject?.customer_data?.Firstname}
            </span>{" "}
          </p>
          <p className="cursor-pointer" onClick={toggleBVNModal}>
            Show BVN
          </p>
        </div>
      </div>
      {SidebarMenuItems.map((item, index) => {
        return (
          <SubMenu item={item} key={index} toggleSidebar={toggleSidebar} />
        );
      })}

      <div
        to="/"
        className="flex items-center mt-6 cursor-pointer 2xl:text-lg xl:text-sm px-8 lg:px-4 xl:px-6 2xl:px-12"
        key="logout"
        onClick={logoutUser}
      >
        <img src={logout} alt="logout" className="mr-4" loading="lazy" />
        <p className="font-normal text-sm text-white">Logout</p>
      </div>

      <ModalPopup
        modalHeight="150px"
        modalWidth="200px"
        children={<BvnModal toggleBVNModal={toggleBVNModal} />}
        isOpen={showBVN}
      />
    </div>
  );
};

export { MobileSidebar };
