import { useGetMenuItems } from "@/infraestructure/ui/hooks/useGetMenuItems";
import { Menubar } from "primereact/menubar";
import { memo, useState } from "react";
import Imagotipo from "../../logo/Imagotipo";
import AuthModal from "../../auth/AuthModal";
import { Button } from "primereact/button";
import { Icon } from "@iconify/react/dist/iconify.js";
import { useMenuItems } from "@/aplication/useCases/useMenuItems";

export const Navbar = memo(() => {
  // console.log('Navbar Rendered');
  const { menuItems } = useGetMenuItems();
  const [visible, setVisible] = useState(false);

  const isAuthenticated = false;
  const menuItemx = useMenuItems(isAuthenticated); // <- revisar para manejar la logica de items en sesiones

  return (
    <>
      <Menubar
        className="sticky top-0 z-10 border-none rounded-none"
        model={menuItems}
        start={
          <div className="w-40 mr-2">
            <Imagotipo />
          </div>
        }
        end={
          isAuthenticated ? null : ( // <- agregar componente que abra o redirija a perfil
            <Button
              label="Iniciar Sesión"
              icon={<Icon icon="cuida:login-outline" width="20" height="20" />}
              className="p-button-text p-button-sm"
              onClick={() => setVisible(true)}
            />
          )
        }
      />
      <AuthModal visible={visible} visibleOff={() => setVisible(false)} />
    </>
  );
});
