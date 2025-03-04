import { useAuthStore } from "@/_infraestructure/store/auth/authStore";
import { AuthRoles } from "@/_domain/models/auth/RolesAuthModel";
import { LoginAuthModel } from "@/_domain/models/auth/LoginAuthModel";
import Cookies from "js-cookie";
// import { postLogin } from "@/_infraestructure/http/auth/LoginHTTP"; //peticion lista para usar con backend

interface useLoginResponse {
  message: string;
  success: boolean;
}

export const useAuthLogin = () => {
  const { setRole } = useAuthStore();
  
  // Esto es temporal aqui hay que hacer la logica con el backend

  const login = (data: LoginAuthModel): useLoginResponse => {
    const { email, password } = data;
    if (email === "test@admin.com" && password === "@Admin12345") {
      setRole(AuthRoles.ADMIN);
      Cookies.set("token", "ADMIN", { secure: true, sameSite: "Strict" });
      return {
        success: true,
        message: "Bienvenido administrador",
      };
    } else if (email === "test@user.com" && password === "@User12345") {
      setRole(AuthRoles.USER);
      Cookies.set("token", "USER", { secure: true, sameSite: "Strict" });
      return {
        success: true,
        message: "Bienvenido usuario",
      };
    } else {
      return {
        success: false,
        message: "Credenciales incorrectas",
      };
    }
  };

  return { login };
};
