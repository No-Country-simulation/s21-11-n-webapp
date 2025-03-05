import { MenuItem } from "primereact/menuitem";
import useMenuBarState from "./useMenuBarState";
import { AuthRoles } from "@/_domain/models/auth/RolesAuthModel";
import { useAuthStore } from "@/_infraestructure/store/auth/authStore";

const useMenuBarList = (): MenuItem[] => {
  const { adminMenuItems, userMenuItems, unauthenticatedMenuItems } =
    useMenuBarState();
  const { userRole } = useAuthStore();

  if (userRole === AuthRoles.ROLE_NULL) return unauthenticatedMenuItems;
  return userRole === AuthRoles.ROLE_ADMIN ? adminMenuItems : userMenuItems;
};

export default useMenuBarList;
