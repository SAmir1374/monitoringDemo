import { renderRoutes } from "./generate-routes";

// Layouts
import AnonymousLayout from "../layouts/AnonymousLayout";
import WallImagesLayout from "../layouts/WallImagesLayout";
import ReportsLayout from "../layouts/ReportsLayout";

// Pages
import Login from "../pages/Login";
import Contact from "../pages/Contact";
import AboutUs from "../pages/AboutUs";
import NotFound from "../pages/NotFound";
import MonitoringPage from "../pages/MonitoringPage";
import ReportsPage from "../pages/Reports";
import ReportPage from "../pages/Report";

/* -------------------------------------------------------------------------- */
/*                                    Types                                   */
/* -------------------------------------------------------------------------- */

export const routes = [
  {
    layout: AnonymousLayout,
    routes: [
      {
        name: "login",
        title: "Login page",
        component: Login,
        path: "/",
        isPublic: true,
      },
      {
        name: "contact",
        title: "Contact page",
        component: Contact,
        path: "/ContactUs",
        isPublic: true,
      },
      {
        name: "aboutUs",
        title: "AboutUs page",
        component: AboutUs,
        path: "/AboutUs",
        isPublic: true,
      },
      {
        name: "notFound",
        title: "NotFound page",
        component: NotFound,
        path: "/*",
        isPublic: true,
      },
    ],
  },
  {
    layout: WallImagesLayout,
    routes: [
      {
        name: "MonitoringPage",
        title: "Monitoring page",
        component: MonitoringPage,
        path: "/ImageWall",
        isPublic: true,
      },
    ],
  },
  {
    layout: ReportsLayout,
    routes: [
      {
        name: "ReportingPage",
        title: "Reporting Page",
        component: ReportsPage,
        path: "/reports",
        isPublic: true,
      },
      {
        name: "ReportingPage",
        title: "Reporting Page",
        component: ReportPage,
        path: "/reports/*",
        isPublic: true,
      },
    ],
  },
];

export const Routes = renderRoutes(routes);
