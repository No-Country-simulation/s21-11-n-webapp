import { AuthRoles } from "@/_domain/models/auth/RolesAuthModel";
import { create } from "zustand";

type AuthStore = {
  userRole: AuthRoles;
  setRole: (role: AuthRoles) => void;
  getRole: () => AuthRoles;
};

type UserEmail = {
  email: string;
  setEmail: (email: string) => void;
  getEmail: () => string;
};

export const useAuthStore = create<AuthStore>((set, get) => ({
  userRole: AuthRoles.ROLE_NULL,
  setRole: (role) => set({ userRole: role }),
  getRole: () => get().userRole,
}));

export const useUserEmail = create<UserEmail>((set, get) => ({
  email: "",
  setEmail: (email) => set({ email }),
  getEmail: () => get().email,
}));
