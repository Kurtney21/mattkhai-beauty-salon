import {Home, About } from "@/pages";
import {
  HomeIcon,
  UserCircleIcon,
} from "@heroicons/react/24/solid";

export const routes = [
  {
    icon: HomeIcon,
    name: "home",
    path: "/home",
    element: <Home />,
  },
  {
    icon: UserCircleIcon,
    name: "about",
    path: "/about",
    element: <About />,
  }
  
];

export default routes;
