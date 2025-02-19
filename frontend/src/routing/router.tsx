import ThemeProvider from "@/infraestructure/ui/components/layout/ThemeProvider";
import { PrivateRoutes, PublicRoutes } from "@/routing/routes";
import { createBrowserRouter, RouterProvider } from "react-router";

const generateRoutes = () => {
  const { admin, user } = PrivateRoutes;
  return [...PublicRoutes, ...user, ...admin];
};

const router = createBrowserRouter(generateRoutes());

const AppRouter = () => {
  return (
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  );
};

export default AppRouter;
