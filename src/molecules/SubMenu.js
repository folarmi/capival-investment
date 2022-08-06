import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";

import { NavLink } from "react-router-dom";
// import { Text } from "../components";
// import sideArrowUp from "../assets/icons/sideArrowUp.svg";
// import sideArrowDown from "../assets/icons/sideArrowDown.svg";

const SubMenu = ({ item }) => {
  // const navigate = useNavigate();

  const [dropDown, setDropDown] = useState(false);
  const [activeTab, setActiveTab] = useState("Data Consumers");

  const toggleDropDown = () => {
    setDropDown(!dropDown);
  };

  // const goToPath = (item) => {
  //   navigate(item?.path, { replace: true });
  // };

  const changeActive = (item) => {
    console.log(item?.icon, "dododo");
    setActiveTab(item?.item);
    // console.log(activeTab);
  };

  // const changeStroke = (item) => {
  //   item.useStroke = !item?.useStroke;
  //   // console.log("yyyy", item.useStroke);
  // };

  return (
    <div>
      {item?.subMenu ? (
        <>
          {item?.subMenu ? (
            <div
              className="flex items-center mt-6 hover:text-lighterBlue cursor-pointer px-8 lg:px-4 xl:px-6 2xl:px-12"
              key={item?.id}
            >
              <item.Image
                className={`mr-4  ${
                  item?.useStroke ? "stroke-current" : "fill-current"
                }`}
              />
              <p className="font-normal pr-3 text-sm text-white ">
                {item?.menuItem}
              </p>
              {dropDown ? (
                <img
                  src="/assets/icons/whiteArrowDown.svg"
                  alt="arrowDown"
                  className="pr-9 cursor-pointer"
                  onClick={toggleDropDown}
                />
              ) : (
                <img
                  src="/assets/icons/whiteArrowDown.svg"
                  alt="arrowDown"
                  className="pr-9 cursor-pointer"
                  onClick={toggleDropDown}
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

      <div className="mt-3">
        {dropDown &&
          item?.subMenu.map((item) => {
            return (
              <div className="py-4">
                <div
                  // onClick={() => goToPath(item)}
                  key={item?.item}
                  className="cursor-pointer px-8 lg:px-4 xl:px-6 2xl:px-12"
                >
                  <div className="flex items-center">
                    <img src={item?.icon} className="mr-2" alt="" />
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
};

export { SubMenu };

// flex items-center mt-6 text-white px-8 lg:px-4 xl:px-6 2xl:px-12 when selected
// flex items-center mt-6 text-white px-8 lg:px-4 xl:px-6 2xl:px-12
// bg-white py-2 rounded-tr-2xl rounded-br-2xl mr-10 flex items-center mt-6 text-blueTwo
