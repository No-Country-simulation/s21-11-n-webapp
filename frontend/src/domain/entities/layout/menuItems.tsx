import { Icon } from "@iconify/react/dist/iconify.js";
import { MenuItem } from "primereact/menuitem";

export const authenticatedMenuItems: MenuItem[] = [
  {
    label: "Dashboard",
    icon: <Icon icon="mage:dashboard-bar" width="20" height="20" className="mr-1" />,
    command: () => console.log("Ir al dashboard"),
  },
  {
    label: "Profile",
    icon: <Icon icon="iconamoon:profile-duotone" width="20" height="20" className="mr-1" />,
    command: () => console.log("Ir al profile"),
  },
];

export const unauthenticatedMenuItems: MenuItem[] = [
  {
    label: "Iniciar sesión",
    icon: "mynaui:login",
    command: () => console.log("Abrir modal de login"),
  },
];
