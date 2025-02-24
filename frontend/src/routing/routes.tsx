import LandingPage from "@/infraestructure/ui/pages/landing.page";

import { RouteList } from "@/domain/entities/RouteList";
import { Layout } from "@/infraestructure/ui/components/layout/Layout";

export const routeList: RouteList = {
  publicRoutes: {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <LandingPage />,
      },
      {
        path: "/login",
        element: <>login </>,
      },
      {
        path: "/register",
        element: <>register </>,
      },
      {
        path: "*",
        element: <>Not Found</>,
      },
    ],
  },

  userRoutes: {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/history",
        element: <>history </>,
      },
    ],
  },

  adminRoutes: {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/dashboard",
        element: <>dashboard </>,
      },
    ],
  },
};
