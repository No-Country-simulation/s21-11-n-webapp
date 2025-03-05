import { BrowserRouter } from "react-router";
import ThemeProvider from "@/_infraestructure/components/theme/ThemeProvider";
import { useAuth } from "@/_infraestructure/hooks/auth/useAuth";
import AnimatedRoutes from "./AnimatedRoutes";
import { Navbar } from "@/_infraestructure/components/layout/Navbar/Navbar";

const AppRouter = () => {
  useAuth();
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Navbar />
        <AnimatedRoutes />
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default AppRouter;
