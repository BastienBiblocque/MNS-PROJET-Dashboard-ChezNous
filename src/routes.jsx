import {
  HomeIcon,
  ArrowRightOnRectangleIcon,
  UserPlusIcon,
  ShoppingBagIcon,
  UserIcon,
} from "@heroicons/react/24/solid";
import { Home, Client, Shop } from "@/pages/dashboard";
import { SignIn, SignUp } from "@/pages/auth";

const icon = {
  className: "w-5 h-5 text-inherit",
};

export const routes = [
  {
    layout: "dashboard",
    pages: [
      {
        icon: <HomeIcon {...icon} />,
        name: "dashboard",
        path: "/home",
        element: <Home />,
      },
      {
        icon: <ShoppingBagIcon {...icon} />,
        name: "Boutiques",
        path: "/boutique",
        element: <Shop />,
      },
      {
        icon: <UserIcon {...icon} />,
        name: "Clients",
        path: "/client",
        element: <Client />,
      },
    ],
  },
  {
    title: "Connexion",
    layout: "auth",
    pages: [
      {
        icon: <ArrowRightOnRectangleIcon {...icon} />,
        name: "login",
        path: "/login",
        element: <SignIn />,
      },
    ],
  },
];

export default routes;
