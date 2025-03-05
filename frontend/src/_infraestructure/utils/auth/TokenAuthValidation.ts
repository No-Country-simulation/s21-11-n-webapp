import Cookies from "js-cookie";
import { AuthRoles } from "@/_domain/models/auth/RolesAuthModel";
import { jwtDecode } from "jwt-decode";
import { useAuthStore } from "@/_infraestructure/store/auth/authStore";

export const getUserRoleFromToken = (): AuthRoles => {
  const token = Cookies.get("token");
  const { setRole } = useAuthStore();
  if (!token) return AuthRoles.ROLE_NULL;
  const { roles } = jwtDecode<PayloadJwt>(token);
  setRole(roles[0] || AuthRoles.ROLE_NULL);
  try {
    console.log("wllcome");
    return AuthRoles[token as keyof typeof AuthRoles] ?? AuthRoles.ROLE_NULL;
  } catch (error) {
    console.error("Token inválido:", error);
    return AuthRoles.ROLE_NULL;
  }
};

export interface PayloadJwt {
  roles: AuthRoles[];
  sub: string;
  iat: number;
  exp: number;
}
