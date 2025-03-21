import { Icon } from "@iconify/react/dist/iconify.js";
import { MenuItem } from "primereact/menuitem";
import { useNavigate } from "react-router";

const useMenuBarState = () => {
  const navigate = useNavigate();

  const baseItems: MenuItem[] = [
    {
      label: "Inicio",
      icon: <Icon icon="iconamoon:home-duotone" className="mr-1" />,
      command: () => navigate("/"),
    },
    {
      label: "Productos",
      icon: <Icon icon="iconamoon:box-duotone" className="mr-1" />,
      command: () => navigate("/productos"),
    },
  ];

  const ProfileItem: MenuItem = {
    label: "Perfil",
    icon: <Icon icon="iconamoon:profile-circle-duotone" className="mr-1" />,
    command: () => navigate("/perfil"),
  };

  const adminItems: MenuItem[] = [
    {
      label: "Panel",
      icon: (
        <Icon
          icon="mage:dashboard-bar"
          width="20"
          height="20"
          className="mr-1"
        />
      ),
      command: () => navigate("/panel"),
    },
    ProfileItem,
  ];

  const userItems: MenuItem[] = [
    {
      label: "Historial",
      icon: (
        <Icon
          icon="iconamoon:history-duotone"
          width="20"
          height="20"
          className="mr-1"
        />
      ),
      command: () => navigate("/historial"),
    },
    ProfileItem,
  ];
  return {
    adminMenuItems: [...baseItems, ...adminItems],
    userMenuItems: [...baseItems, ...userItems],
    unauthenticatedMenuItems: [...baseItems],
  };
};

export default useMenuBarState;
