import { AuthRoles } from "@/_domain/models/auth/RolesAuthModel";
import { useAuthStore } from "@/_infraestructure/store/auth/authStore";
import { Icon } from "@iconify/react/dist/iconify.js";
import Cookies from "js-cookie";
import { Button } from "primereact/button";
import { ConfirmDialog } from "primereact/confirmdialog";
import { confirmDialog } from "primereact/confirmdialog";
import { useNavigate } from "react-router";
import { toast } from "sonner";


const LogOutButton = () => {
  const nav = useNavigate();
  const { setRole } = useAuthStore();
  const confirmLogout = () => {
    confirmDialog({
      message: "¿Seguro que quieres cerrar sesión?",
      header: "Cerrar sesión",
      icon: (
        <Icon
          icon="streamline:emergency-exit-solid"
          width="20"
          height="20"
          className="pr-1"
        />
      ),
      acceptLabel: "Sí, salir",
      rejectLabel: "Cancelar",
      accept: () => {
        Cookies.remove("token");
        setRole(AuthRoles.NULL);
        toast.info("Sesión cerrada");
        nav("/");
      },
    });
  };

  return (
    <>
      <Button
      className="w-full"
        onClick={confirmLogout}
        label="Salir"
        text
        icon={
          <Icon
            icon="solar:exit-bold-duotone"
            width="20"
            height="20"
            className="pr-1"
          />
        }
        severity="danger"
      />

      <ConfirmDialog draggable={false} />
    </>
  );
};

export default LogOutButton;
