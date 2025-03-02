import { Icon } from "@iconify/react/dist/iconify.js";

export const useAuthTabs = () => [
  {
    label: "Inicio de sesión",
    icon: <Icon icon="basil:login-outline" width="24" height="24" />,
  },
  {
    label: "Registro",
    icon: <Icon icon="mdi:register" width="24" height="24" />,
  },
];
