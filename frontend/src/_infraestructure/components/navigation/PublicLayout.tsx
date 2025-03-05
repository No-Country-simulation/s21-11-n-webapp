import { Outlet, useSearchParams } from "react-router";
import { Navbar } from "../layout/Navbar/Navbar";
import { Footer } from "../layout/Footer/Footer";
import { useAuthStore } from "@/_infraestructure/store/auth/authStore";
import { useEffect } from "react";
import { getUserRoleFromToken } from "@/_infraestructure/utils/auth/TokenAuthValidation";
import { toast, Toaster } from "sonner";

const PublicLayout = () => {
  const { setRole } = useAuthStore();
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    setRole(getUserRoleFromToken());
  }, [setRole]);

  useEffect(() => {
    const error = searchParams.get("error");
    if (error) {
      toast.error("No autorizado");
      setTimeout(() => {
        setSearchParams((prevParams) => {
          const newParams = new URLSearchParams(prevParams);
          newParams.delete("error");
          return newParams;
        });
      }, 500);
    }
  }, [searchParams, setSearchParams]);

  return (
    <>
      <Navbar />
      <main className="max-w-6xl mx-auto">
        <Outlet />
      </main>
      <svg className="hidden">
        <filter id="noise">
          <feTurbulence type="turbulence" baseFrequency="0.45" />
        </filter>
      </svg>
      <Footer />
      <Toaster richColors position="top-center" />
    </>
  );
};
export default PublicLayout;
