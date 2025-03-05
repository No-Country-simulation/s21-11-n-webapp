import { AuthRoles } from "@/_domain/models/auth/RolesAuthModel";
import { postLogout } from "@/_infraestructure/http/auth/LogoutHTTP";
import { useAuthStore } from "@/_infraestructure/store/auth/authStore";
import Cookies from "js-cookie";
import { useState } from "react";
import { useNavigate } from "react-router";
import { toast } from "sonner";

export const useAuthLogout = () => {
  const nav = useNavigate();
  const { setRole } = useAuthStore();
  const [isLoading, setIsLoading] = useState(false);

  const logout = () => {
    Cookies.remove("token");
    Cookies.remove("refreshToken");
    setRole(AuthRoles.ROLE_NULL);
    nav("/");
  };

  const acceptLogout = () => {
    setIsLoading(true);
    const refreshToken = Cookies.get("refreshToken");
    toast.promise(postLogout(refreshToken!), {
      loading: "Cerrando sesión...",
      success: () => {
        logout();
        return "Sesión cerrada";
      },
      error: (err) => {
        logout();
        return err.response.data || "Error al cerrar sesión";
      },
      finally: () => {
        setIsLoading(false);
      },
    });
  };

  return { acceptLogout, isLoading };
};
