import { useEffect } from "react";
import Cookies from "js-cookie";
import { AuthRoles } from "@/_domain/models/auth/RolesAuthModel";
import { jwtDecode } from "jwt-decode";
import {
  useAuthStore,
  useUserEmail,
} from "@/_infraestructure/store/auth/authStore";
import { toast } from "sonner";

export const useAuth = (): void => {
  const { setRole } = useAuthStore();
  const { setEmail } = useUserEmail();
  useEffect(() => {
    const validateToken = () => {
      const token = Cookies.get("token");

      if (!token) {
        setRole(AuthRoles.ROLE_NULL);
        return;
      }

      try {
        const { roles, sub } = jwtDecode<PayloadJwt>(token);
        setRole(roles?.[0] ?? AuthRoles.ROLE_NULL);
        setEmail(sub);
      } catch {
        toast.error("Token inválido o corrupto");
        setRole(AuthRoles.ROLE_NULL);
      }
    };

    validateToken();
  }, [setRole]);
};

export interface PayloadJwt {
  roles: AuthRoles[];
  sub: string;
  iat: number;
  exp: number;
}
