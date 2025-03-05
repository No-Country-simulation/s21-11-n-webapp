import { useAuthLogout } from "@/_infraestructure/hooks/auth/useLogout";
import { Icon } from "@iconify/react/dist/iconify.js";
import { Button } from "primereact/button";
import { ConfirmDialog } from "primereact/confirmdialog";
import { confirmDialog } from "primereact/confirmdialog";
import FullScreenLoading from "../layout/FullScreenLoading";
import { AnimatePresence } from "motion/react";

const LogOutButton = () => {
  const { acceptLogout, isLoading } = useAuthLogout();
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
      accept: acceptLogout,
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
      <AnimatePresence>{isLoading && <FullScreenLoading />}</AnimatePresence>
    </>
  );
};

export default LogOutButton;
