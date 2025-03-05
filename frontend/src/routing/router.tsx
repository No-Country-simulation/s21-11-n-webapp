import { BrowserRouter, Routes, Route } from "react-router";
import { useAuthStore } from "@/_infraestructure/store/auth/authStore";
import PublicLayout from "@/_infraestructure/components/navigation/PublicLayout";
import { AuthRoles } from "@/_domain/models/auth/RolesAuthModel";
import DashboardPage from "@/_infraestructure/pages/admin/DashboardPage";
import HistoryPage from "@/_infraestructure/pages/user/HistoryPage";
import LandingPage from "@/_infraestructure/pages/public/LandingPage";
import ProductsPage from "@/_infraestructure/pages/public/ProductsPage";
import NotFoundPage from "@/_infraestructure/pages/public/NotFoundPage";
import ThemeProvider from "@/_infraestructure/components/theme/ThemeProvider";
import ProfilePage from "@/_infraestructure/pages/shared/ProfilePAge";
import AdminLayout from "@/_infraestructure/components/navigation/AdminLayout";
import UserLayout from "@/_infraestructure/components/navigation/UserLayout";

const AppRouter = () => {
  const { userRole } = useAuthStore();

  return (
    <ThemeProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<PublicLayout />}>
            <Route path="/" element={<LandingPage />} />
            <Route path="/productos" element={<ProductsPage />} />

            {userRole === AuthRoles.ADMIN && (
              <>
                <Route element={<AdminLayout />}>
                  <Route path="/panel" element={<DashboardPage />} />
                  <Route path="/perfil" element={<ProfilePage />} />
                </Route>
              </>
            )}

            {userRole === AuthRoles.USER && (
              <>
                <Route element={<UserLayout />}>
                  <Route path="/historial" element={<HistoryPage />} />
                  <Route path="/perfil" element={<ProfilePage />} />
                </Route>
              </>
            )}

            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default AppRouter;
