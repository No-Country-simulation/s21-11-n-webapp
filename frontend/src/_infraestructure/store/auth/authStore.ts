import { AuthRoles } from "@/_domain/models/auth/RolesAuthModel";
import { create } from "zustand";

type AuthStore = {
  userRole: AuthRoles;
  setRole: (role: AuthRoles) => void;
  getRole: () => AuthRoles;
};

export const useAuthStore = create<AuthStore>((set, get) => ({
  userRole: AuthRoles.ROLE_NULL,
  setRole: (role) => set({ userRole: role }),
  getRole: () => get().userRole,
}));
