import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { NavLink } from "react-router-dom";
// import { Text } from "../components";
// import sideArrowUp from "../assets/icons/sideArrowUp.svg";
// import sideArrowDown from "../assets/icons/sideArrowDown.svg";

const SubMenu = ({ item }) => {
  const navigate = useNavigate();

  const [dropDown, setDropDown] = useState(false);
  const [activeTab, setActiveTab] = useState("Data Consumers");

  const toggleDropDown = () => {
    setDropDown(!dropDown);
  };

  const goToPath = (item) => {
    navigate(item?.path, { replace: true });
  };

  const changeActive = (item) => {
    // console.log(item, "dododo");
    setActiveTab(item?.item);
    // console.log(activeTab);
  };

  const changeStroke = (item) => {
    item.useStroke = !item?.useStroke;
    console.log("yyyy", item.useStroke);
  };

  return (
    // <p>trtet</p>

    <NavLink
      to={item?.path}
      className={({ isActive }) =>
        isActive
          ? "bg-white py-2 rounded-tr-2xl rounded-br-2xl flex items-center mt-6 text-blueTwo"
          : "flex items-center mt-6 text-white"
      }
      key={item?.id}
      onClick={() => changeStroke(item)}
    >
      {/* <img src={item?.Image} alt={item?.menuItem} /> */}
      <item.Image
        className={`mr-4  ${
          item?.useStroke ? "stroke-blueTwo" : "stroke-white"
        }`}
      />
      <p className="font-normal text-[15px] pl-4">{item?.menuItem}</p>
    </NavLink>

    // <div>
    //   {item?.subMenu ? (
    //     <>
    //       {item?.subMenu ? (
    //         <div
    //           className="flex items-center mt-6 hover:text-lighterBlue cursor-pointer"
    //           key={item?.id}
    //         >
    //           <item.Image
    //             className={`mr-4  ${
    //               item?.useStroke ? "stroke-current" : "fill-current"
    //             }`}
    //           />
    //           <p className="font-normal pr-3 text-sm text-black-60">
    //             {item?.menuItem}
    //           </p>
    //           {/* {dropDown ? (
    //             <img
    //               src={sideArrowUp}
    //               alt="arrowDown"
    //               className="pr-9 cursor-pointer"
    //               onClick={toggleDropDown}
    //             />
    //           ) : (
    //             <img
    //               src={sideArrowDown}
    //               alt="arrowDown"
    //               className="pr-9 cursor-pointer"
    //               onClick={toggleDropDown}
    //             />
    //           )} */}
    //         </div>
    //       ) : null}
    //     </>
    //   ) : (
    //     <NavLink
    //       to={item?.path}
    //       onClick={() => setSidebar(false)}
    //       className={({ isActive }) =>
    //         isActive && window.location.pathname === item?.path
    //           ? "text-darkBlue flex items-center mt-6 2xl:text-lg xl:text-sm"
    //           : "flex items-center mt-6 hover:text-lighterBlue 2xl:text-lg xl:text-sm"
    //       }
    //       key={item?.id}
    //     >
    //       <item.Image
    //         className={`mr-4  ${
    //           item?.useStroke ? "stroke-current" : "fill-current"
    //         }`}
    //       />
    //       <p className="font-normal text-sm text-black-60">{item?.menuItem}</p>
    //     </NavLink>
    //   )}

    //   <div className="mt-4">
    //     {dropDown &&
    //       item?.subMenu.map((item) => {
    //         return (
    //           <div className="py-4">
    //             <div
    //               onClick={() => goToPath(item)}
    //               key={item?.id}
    //               className="cursor-pointer"
    //             >
    //               <div className="">
    //                 <p
    //                   onClick={() => changeActive(item)}
    //                   className={`font-normal text-sm text-black/60 ${
    //                     activeTab === item?.item ? "text-darkBlue" : ""
    //                   }`}
    //                 >
    //                   {console.log("fff", item?.item, "active", activeTab)}
    //                   {item?.item}
    //                 </p>
    //               </div>
    //             </div>
    //           </div>
    //         );
    //       })}
    //   </div>
    // </div>
  );
};

export { SubMenu };
