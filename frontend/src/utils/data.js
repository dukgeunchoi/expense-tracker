import {
  LayoutDashboard,
  HandCoins,
  WalletMinimal,
  LogOut,
} from "lucide-react";
import { CgProfile } from "react-icons/cg";

export const SIDE_MENU_DATA = [
  {
    id: "01",
    label: "Dashboard",
    icon: LayoutDashboard,
    path: "/dashboard",
  },
  {
    id: "02",
    label: "Income",
    icon: WalletMinimal,
    path: "/income",
  },
  {
    id: "03",
    label: "Expense",
    icon: HandCoins,
    path: "/expense",
  },
  {
    id: "04",
    label: "Profile",
    icon: CgProfile,
    path: "/profile",
  },
  {
    id: "06",
    label: "Logout",
    icon: LogOut,
    path: "/logout",
  },
];
