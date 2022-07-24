import React from "react";
// import { useNavigate } from "react-router-dom";
// import { NavLink } from "react-router-dom";

import { SidebarMenuItems } from "../data/Sidebar";
// import { Text } from "../components";
import { SubMenu } from "./SubMenu";

const Sidebar = (props) => {
  console.log(props);
  // const navigate = useNavigate();

  // const [dropDown, setDropDown] = useState(false);
  // const [logoutModal, setLogoutModal] = useState(false);

  // const toggleLogoutModal = () => {
  //   // navigate("/logout", { replace: true });
  //   setLogoutModal(!logoutModal);
  // };

  return (
    <div
      className={`${props.className} px-8 lg:px-4 xl:px-6 2xl:px-12 flex flex-col overflow-auto min-h-[calc(100vh-88px)] no-scrollbar`}
    >
      <div className="mb-8 pb-12">
        {SidebarMenuItems.map((item, index) => {
          return <SubMenu item={item} key={index} props={props} />;
        })}

        {/* <div
          to="/"
          className="flex items-center mt-6 cursor-pointer 2xl:text-lg xl:text-sm"
          key="logout"
          onClick={toggleLogoutModal}
        ></div> */}
      </div>

      {/* <ModalPopup
        modalHeight="400px"
        children={<LogoutModal closeDetailsModal={toggleLogoutModal} />}
        isOpen={logoutModal}
      /> */}
    </div>
  );
};

export { Sidebar };
