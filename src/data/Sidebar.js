import { ReactComponent as homeIcon } from "../icons/homeIcon.svg";
import { ReactComponent as wallet } from "../icons/wallet.svg";
import { ReactComponent as support } from "../icons/support.svg";
import { ReactComponent as profile } from "../icons/dashboardProfile.svg";
import { ReactComponent as logout } from "../icons/logout.svg";

export const SidebarMenuItems = [
  {
    id: "1",
    menuItem: "Home",
    // Image: "/assets/icons/homeIcon.svg",
    Image: homeIcon,
    path: "/dashboard",
    useStroke: false,
  },
  {
    id: "2",
    menuItem: "Wallet",
    Image: wallet,
    path: "/wallet",
    useStroke: false,
  },
  {
    id: "3",
    menuItem: "Support",
    Image: support,
    path: "/wallet",
    useStroke: false,
    // subMenu: [
    //   // {
    //   //   id: "1",
    //   //   item: "Oystr smart customers",
    //   //   path: "/customers/oystr-smart-costumers",
    //   // },
    //   {
    //     id: "2",
    //     item: "Data Consumers",
    //     path: "/customers/data-consumers",
    //   },
    //   {
    //     id: "3",
    //     item: "Data Givers",
    //     path: "/customers/data-givers",
    //   },
    // ],
  },
  {
    id: "4",
    menuItem: "Profile",
    Image: profile,
    path: "/wallet",
    useStroke: false,
  },
  {
    id: "5",
    menuItem: "Logout",
    Image: logout,
    path: "/wallet",
    useStroke: false,
  },
  // {
  //   id: "6",
  //   menuItem: "Change Pin",
  //   Image: process.env.PUBLIC_URL + "assets/icons/pin.svg",
  //   path: "/settings",
  //   useStroke: false,
  // },
  // {
  //   id: "7",
  //   menuItem: "Update Security Question",
  //   Image: process.env.PUBLIC_URL + "assets/icons/security.svg",
  //   path: "/settings",
  //   useStroke: false,
  // },
  // {
  //   id: "7",
  //   menuItem: "Logout",
  //   Image: process.env.PUBLIC_URL + "assets/icons/logout.svg",
  //   path: "/settings",
  //   useStroke: false,
  // },
];
