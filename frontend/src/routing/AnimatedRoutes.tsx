import { useAuthStore } from "@/_infraestructure/store/auth/authStore";
import { AuthRoles } from "@/_domain/models/auth/RolesAuthModel";
import { AnimatePresence } from "framer-motion";
import { Route, Routes, useLocation } from "react-router";
import PublicRoutes from "./PublicRoutes";
import AdminRoutes from "./AdminRoutes";
import UserRoutes from "./UserRoutes";
import PublicLayout from "@/_infraestructure/components/navigation/PublicLayout";
import { useEffect } from "react";

const AnimatedRoutes = () => {
  const { userRole } = useAuthStore();
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location]);

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route element={<PublicLayout />}>
          {PublicRoutes}
          {userRole === AuthRoles.ROLE_ADMIN && AdminRoutes}
          {userRole === AuthRoles.ROLE_USER && UserRoutes}
        </Route>
      </Routes>
    </AnimatePresence>
  );
};

export default AnimatedRoutes;
