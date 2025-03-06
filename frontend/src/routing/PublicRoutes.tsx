import { Outlet, Route } from "react-router";
import LandingPage from "@/_infraestructure/pages/public/LandingPage";
import ProductsPage from "@/_infraestructure/pages/public/ProductsPage";
import NotFoundPage from "@/_infraestructure/pages/public/NotFoundPage";
import { Footer } from "@/_infraestructure/components/layout/Footer/Footer";
import HistoryPage from '@/_infraestructure/pages/user/HistoryPage';

const PublicRoutes = (
  <>
    <Route
      element={
        <>
          <Outlet />
          <Footer />
        </>
      }
    >
      <Route path="/" element={<LandingPage />} />
      <Route path="/productos" element={<ProductsPage />} />
      {/* TODO: DELETE FROM HERE historial route */}
      <Route path="/historial" element={<HistoryPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Route>
  </>
);

export default PublicRoutes;
