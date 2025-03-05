import { AuthRoles } from "@/_domain/models/auth/RolesAuthModel";
import { useAuthStore } from "@/_infraestructure/store/auth/authStore";
import { Navigate, Outlet } from "react-router";

const AdminLayout = () => {
  const { getRole } = useAuthStore();

  if (getRole() !== AuthRoles.ROLE_ADMIN)
    return <Navigate to="/?error=auth" replace />;

  return <Outlet />;
};

export default AdminLayout;
