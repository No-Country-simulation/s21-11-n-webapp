import { AuthRoles } from "@/_domain/models/auth/RolesAuthModel";
import { useAuthStore } from "@/_infraestructure/store/auth/authStore";
import { Navigate, Outlet } from "react-router";

const UserLayout = () => {
  const { getRole } = useAuthStore();
  if (getRole() !== AuthRoles.USER) return <Navigate to="/?error=auth" replace />;
  return <Outlet />;
};

export default UserLayout;
