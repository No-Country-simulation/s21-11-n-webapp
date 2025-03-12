import { AuthRoles } from "@/_domain/models/auth/RolesAuthModel";
import { create } from "zustand";

type AuthStore = {
  userRole: AuthRoles;
  setRole: (role: AuthRoles) => void;
  getRole: () => AuthRoles;
};

type UserData = {
  email: string | null;
  userID: string | null;
  setEmail: (email: string) => void;
  setUserID: (userID: string) => void;
};

export const useAuthStore = create<AuthStore>((set, get) => ({
  userRole: AuthRoles.ROLE_NULL,
  setRole: (role) => set({ userRole: role }),
  getRole: () => get().userRole,
}));

export const useUserData = create<UserData>((set) => ({
  email: null,
  userID: null,
  setEmail: (email) => set({ email }),
  setUserID: (userID) => set({ userID }),
}));
