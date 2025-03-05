import { Route } from "react-router";
import AdminLayout from "@/_infraestructure/components/navigation/AdminLayout";
import DashboardPage from "@/_infraestructure/pages/admin/DashboardPage";
import ProfilePage from "@/_infraestructure/pages/shared/ProfilePage";

const AdminRoutes = (
  <>
    <Route element={<AdminLayout />}>
      <Route path="/panel" element={<DashboardPage />} />
      <Route path="/perfil" element={<ProfilePage />} />
    </Route>
  </>
);

export default AdminRoutes;
