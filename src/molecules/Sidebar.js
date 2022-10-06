import React, { useState } from "react";
import logout from "../icons/logout.svg";
import { useDispatch, useSelector } from "react-redux";

// import { useNavigate } from "react-router-dom";
// import { NavLink } from "react-router-dom";

import { SidebarMenuItems } from "../data/Sidebar";
// import { Text } from "../components";
import { SubMenu } from "./SubMenu";
import { logoutAsync } from "../slices/auth";
import { NavLink, useNavigate } from "react-router-dom";
import { toggleDropDownState } from "../slices/dropdown";

const Sidebar = (props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { dropDownState } = useSelector((state) => state?.dropdown);

  const logoutUser = () => {
    dispatch(logoutAsync());
  };

  const [activeTab, setActiveTab] = useState("Data Consumers");

  const toggleDropDown = (item) => {
    // setDropDown(!dropDown);
    dispatch(toggleDropDownState(item?.id));
  };

  const goToPath = (item) => {
    navigate(item?.path, { replace: true });
  };

  const changeActive = (item) => {
    setActiveTab(item?.item);
  };

  return (
    <div
      className={`${props.className}flex flex-col overflow-auto min-h-[calc(100vh-88px)] no-scrollbar`}
    >
      <div className="mb-8 pb-12">
        {SidebarMenuItems.map((item, index) => {
          return (
            <div key={index}>
              {item?.subMenu ? (
                <>
                  {item?.subMenu ? (
                    <div
                      className="flex items-center mt-6 hover:text-lighterBlue cursor-pointer px-8 lg:px-4 xl:px-6 2xl:px-12"
                      key={item?.id}
                      onClick={() => toggleDropDown(item)}
                    >
                      <item.Image
                        className={`mr-4  ${
                          item?.useStroke ? "stroke-current" : "fill-current"
                        }`}
                      />
                      <p className="font-normal pr-3 text-sm text-white ">
                        {item?.menuItem}
                      </p>
                      {dropDownState?.show ? (
                        <img
                          src="/assets/icons/whiteArrowDown.svg"
                          alt="arrowDown"
                          className="pr-9 cursor-pointer"
                          loading="lazy"
                        />
                      ) : (
                        <img
                          src="/assets/icons/whiteArrowDown.svg"
                          alt="arrowDown"
                          className="pr-9 cursor-pointer"
                          // onClick={toggleDropDown}
                          loading="lazy"
                        />
                      )}
                    </div>
                  ) : null}
                </>
              ) : (
                <NavLink
                  end
                  to={item?.path}
                  className={({ isActive }) =>
                    isActive
                      ? "bg-white py-2 rounded-tr-2xl rounded-br-2xl mr-10 flex items-center mt-6 text-blueTwo px-8 lg:px-4 xl:px-6 2xl:px-12"
                      : "flex items-center mt-6 text-white px-8 lg:px-4 xl:px-6 2xl:px-12"
                  }
                  key={item?.id}
                >
                  <item.Image
                    className={`mr-4  ${
                      item?.useStroke ? "stroke-current" : "fill-current"
                    }`}
                  />
                  <p className="font-normal text-sm">{item?.menuItem}</p>
                </NavLink>
              )}

              <div className="mt-3 ml-4">
                {dropDownState?.show &&
                  dropDownState?.id === item?.id &&
                  item?.subMenu?.map((item) => {
                    return (
                      <div className="py-4">
                        <div
                          onClick={() => goToPath(item)}
                          key={item?.item}
                          className="cursor-pointer px-8 lg:px-4 xl:px-6 2xl:px-12"
                        >
                          <div className="flex items-center">
                            <img
                              src={item?.icon}
                              className="mr-2"
                              alt=""
                              loading="lazy"
                            />
                            <p
                              onClick={() => changeActive(item)}
                              className={`font-normal text-xs ${
                                activeTab === item?.item
                                  ? "bg-white py-2 rounded-tr-2xl rounded-br-2xl flex items-center text-blueTwo"
                                  : "text-white"
                              }`}
                            >
                              {item?.item}
                            </p>
                          </div>
                        </div>
                      </div>
                    );
                  })}
              </div>
            </div>
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
      </div>
    </div>
  );
};

export { Sidebar };
