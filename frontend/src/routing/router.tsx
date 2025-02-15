import { PrivateRoutes, PublicRoutes } from '@/routing/routes'
import { createBrowserRouter, RouterProvider } from "react-router";

const generateRoutes = () => {
  const { admin, user } = PrivateRoutes
  return [...PublicRoutes, ...user, ...admin]
}

const router = createBrowserRouter(generateRoutes());

const AppRouter = () => {
  return <RouterProvider router={router} />;
};

export default AppRouter;