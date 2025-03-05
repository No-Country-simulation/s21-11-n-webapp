import { LoginAuthModel } from "@/_domain/models/auth/LoginAuthModel";
import { ErrorResponse } from "@/_domain/models/http/LoginHttpModel";
import Cookies from "js-cookie";
import { postLogin } from "@/_infraestructure/http/auth/LoginHTTP";
import { AxiosError } from "axios";
import { useState } from "react";
import { toast } from "sonner";
import { jwtDecode } from "jwt-decode";
import { AuthRoles } from "@/_domain/models/auth/RolesAuthModel";
import { PayloadJwt } from "./useAuth";
import { useAuthStore } from "@/_infraestructure/store/auth/authStore";

export const useAuthLogin = () => {
  const [isSuccess, setIsSuccess] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { setRole } = useAuthStore();

  const loginResponse = async (loginData: LoginAuthModel) => {
    setIsLoading(true);
    toast.promise(postLogin(loginData), {
      loading: "Cargando...",
      success: ({ refreshToken, token }) => {
        Cookies.set("token", token);
        Cookies.set("refreshToken", refreshToken);
        setIsSuccess(true);
        const { roles } = jwtDecode<PayloadJwt>(token);
        setRole(roles?.[0] ?? AuthRoles.ROLE_NULL);
        return "Inicio de sesión exitoso";
      },
      error: (error: AxiosError<ErrorResponse>) => {
        return error.response?.data.message;
      },
      finally: () => {
        setIsLoading(false);
      },
    });
  };

  return { loginResponse, isSuccess, isLoading };
};
