import React, { useState } from "react";
import { useSelector } from "react-redux";
import ModalPopup from "../components/ModalPopup";
import { SidebarMenuItems } from "../data/Sidebar";
import { SubMenu } from "../molecules";
import { BvnModal } from "./BvnModal";

const MobileSidebar = ({ setSidebar, sidebar }) => {
  const [showBVN, setShowBVN] = useState(false);

  const userObject = useSelector((state) => state.auth.login?.user?.user);
  const userAvatar = useSelector(
    (state) => state.auth?.login?.user?.authorisation?.user_data?.passport
  );

  const toggleSidebar = () => {
    setSidebar(!sidebar);
  };

  const toggleBVNModal = () => {
    setShowBVN(!showBVN);
  };

  return (
    <div className="fixed z-40 sidebar-bg w-[60%] min-h-screen">
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
        return <SubMenu item={item} key={index} />;
      })}

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
