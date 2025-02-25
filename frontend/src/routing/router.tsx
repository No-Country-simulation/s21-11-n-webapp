import ThemeProvider from "@/infraestructure/ui/components/Layout/ThemeProvider";
import { routeList } from "@/routing/routes";
import { createBrowserRouter, RouterProvider } from "react-router";

const generateRoutes = () => {
  return Object.values(routeList).map((list) => list);
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
