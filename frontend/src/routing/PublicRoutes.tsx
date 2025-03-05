import { Outlet, Route } from "react-router";
import LandingPage from "@/_infraestructure/pages/public/LandingPage";
import ProductsPage from "@/_infraestructure/pages/public/ProductsPage";
import NotFoundPage from "@/_infraestructure/pages/public/NotFoundPage";
import { Footer } from "@/_infraestructure/components/layout/Footer/Footer";

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
      <Route path="*" element={<NotFoundPage />} />
    </Route>
  </>
);

export default PublicRoutes;
