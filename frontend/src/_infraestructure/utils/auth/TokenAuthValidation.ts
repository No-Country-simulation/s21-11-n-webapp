import Cookies from "js-cookie";
import { AuthRoles } from "@/_domain/models/auth/RolesAuthModel";

export const getUserRoleFromToken = (): AuthRoles => {
  const token = Cookies.get("token");

  if (!token) return AuthRoles.NULL;

  try {
    console.log("wllcome");
    return AuthRoles[token as keyof typeof AuthRoles] ?? AuthRoles.NULL;
  } catch (error) {
    console.error("Token inválido:", error);
    return AuthRoles.NULL;
  }
};
