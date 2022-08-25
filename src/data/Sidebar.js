import { ReactComponent as homeIcon } from "../icons/homeIcon.svg";
import { ReactComponent as wallet } from "../icons/wallet.svg";
import { ReactComponent as support } from "../icons/support.svg";
import { ReactComponent as profile } from "../icons/dashboardProfile.svg";
import security from "../icons/security.svg";
import pin from "../icons/pin.svg";
import issue from "../icons/issue.svg";
import relationship from "../icons/relationship.svg";
import feedback from "../icons/feedback.svg";
import faq from "../icons/faq.svg";
import changePassword from "../icons/changePassword.svg";

export const SidebarMenuItems = [
  {
    id: "1",
    menuItem: "Home",
    // Image: "/assets/icons/homeIcon.svg",
    Image: homeIcon,
    path: "/dashboard",
    useStroke: true,
  },
  {
    id: "2",
    menuItem: "Wallet",
    Image: wallet,
    path: "dashboard/wallet",
    useStroke: true,
  },
  {
    id: "3",
    menuItem: "Support",
    Image: support,
    path: "/wallet",
    useStroke: false,
    subMenu: [
      {
        id: "1",
        item: "Relationship Officer",
        path: "dashboard/wallet/relationship-officer",
        icon: relationship,
      },
      {
        id: "2",
        item: "Report an Issue",
        path: "dashboard/wallet/report-an-issue",
        icon: issue,
      },
      // {
      //   id: "3",
      //   item: "Send Feedback",
      //   path: "/customers/oystr-smart-costumers",
      //   icon: feedback,
      // },
      {
        id: "4",
        item: "FAQ",
        path: "/customers/oystr-smart-costumers",
        icon: faq,
      },
    ],
  },
  {
    id: "4",
    menuItem: "Profile",
    Image: profile,
    path: "/wallet",
    useStroke: false,
    subMenu: [
      {
        id: "1",
        item: "Change Password",
        path: "dashboard/profile/change-password",
        icon: changePassword,
      },
      {
        id: "2",
        item: "Change Pin",
        path: "dashboard/profile/change-pin",
        icon: pin,
      },
      {
        id: "3",
        item: "Update KYC",
        path: "/customers/oystr-smart-costumers",
        icon: security,
      },
    ],
  },
];
