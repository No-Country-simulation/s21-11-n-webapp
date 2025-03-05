import { Route } from "react-router";
import UserLayout from "@/_infraestructure/components/navigation/UserLayout";
import HistoryPage from "@/_infraestructure/pages/user/HistoryPage";
import ProfilePage from "@/_infraestructure/pages/shared/ProfilePage";

const UserRoutes = (
  <>
    <Route element={<UserLayout />}>
      <Route path="/historial" element={<HistoryPage />} />
      <Route path="/perfil" element={<ProfilePage />} />
    </Route>
  </>
);

export default UserRoutes;
