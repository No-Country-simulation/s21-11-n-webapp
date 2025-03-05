import { AuthRoles } from "@/_domain/models/auth/RolesAuthModel";
import { useAuthStore } from "@/_infraestructure/store/auth/authStore";
import { Navigate, Outlet } from "react-router";

const UserLayout = () => {
  const { userRole } = useAuthStore();
  if (userRole !== AuthRoles.ROLE_USER)
    return <Navigate to="/?error=auth" replace />;
  return <Outlet />;
};

export default UserLayout;
