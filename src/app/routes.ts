import { createBrowserRouter } from "react-router";
import Home from "./pages/Home";
import Services from "./pages/Services";
import ScheduleService from "./pages/ScheduleService";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Home,
  },
  {
    path: "/services",
    Component: Services,
  },
  {
    path: "/schedule",
    Component: ScheduleService,
  },
]);
