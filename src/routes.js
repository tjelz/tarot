import { lazy } from "react";

const routes = [
  {
    component: lazy(() => import("./pages/Home")),
    label: "Home",
    path: "/",
    title: "Home"
  },
  {
    component: lazy(() => import("./pages/AboutMe")),
    label: "About me",
    path: "/about-me",
    title: "About me"
  },
  {
    component: lazy(() => import("./pages/Services")),
    label: "Services",
    path: "/services",
    title: "Services"
  }
];

export default routes;
