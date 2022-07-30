import React from "react";
import logout from "../icons/logout.svg";
import { useDispatch } from "react-redux";

// import { useNavigate } from "react-router-dom";
// import { NavLink } from "react-router-dom";

import { SidebarMenuItems } from "../data/Sidebar";
// import { Text } from "../components";
import { SubMenu } from "./SubMenu";
import { logoutAsync } from "../slices/auth";

const Sidebar = (props) => {
  const dispatch = useDispatch();

  const logoutUser = () => {
    dispatch(logoutAsync());
  };

  // const navigate = useNavigate();

  // const [dropDown, setDropDown] = useState(false);
  // const [logoutModal, setLogoutModal] = useState(false);

  // const toggleLogoutModal = () => {
  //   // navigate("/logout", { replace: true });
  //   setLogoutModal(!logoutModal);
  // };

  return (
    <div
      className={`${props.className}flex flex-col overflow-auto min-h-[calc(100vh-88px)] no-scrollbar`}
    >
      <div className="mb-8 pb-12">
        {SidebarMenuItems.map((item, index) => {
          return <SubMenu item={item} key={index} props={props} />;
        })}

        <div
          to="/"
          className="flex items-center mt-6 cursor-pointer 2xl:text-lg xl:text-sm px-8 lg:px-4 xl:px-6 2xl:px-12"
          key="logout"
          onClick={logoutUser}
        >
          <img src={logout} alt="logout" className="mr-4" />
          <p className="font-normal text-sm text-white">Logout</p>
        </div>
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
