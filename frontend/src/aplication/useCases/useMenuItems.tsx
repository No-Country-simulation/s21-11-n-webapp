import { useMemo } from "react";
import { MenuItem } from "primereact/menuitem";
import {
  authenticatedMenuItems,
  unauthenticatedMenuItems,
} from "@/domain/entities/layout/menuItems";

export const useMenuItems = (isAuthenticated: boolean): MenuItem[] => {
  return useMemo(
    () => (isAuthenticated ? authenticatedMenuItems : unauthenticatedMenuItems),
    [isAuthenticated]
  );
};
