import { AuthRoles } from "@/_domain/models/auth/RolesAuthModel";
import { Button } from "primereact/button";
import { Icon } from "@iconify/react";
import { useAuthStore } from "@/_infraestructure/store/auth/authStore";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import LogOutButton from "./authLogout";
import { useNavigate } from "react-router";
import SigninButton from "./authSignin";

const AuthButton = () => {
  const { userRole } = useAuthStore();
  const [visible, setVisible] = useState(false);
  const nav = useNavigate();

  const toggleMenu = () => setVisible((prev) => !prev);
  const closeMenu = () => setVisible(false);

  useEffect(() => {
    closeMenu();
  }, [userRole]);

  if (userRole === AuthRoles.ROLE_NULL) return <SigninButton />;

  return (
    <div className="relative">
      <Button
        icon={<Icon icon="iconamoon:settings-duotone" width="20" height="20" />}
        outlined
        onClick={toggleMenu}
      />
      <AnimatePresence>
        {visible && (
          <motion.div
            className="absolute right-0 mt-5 bg-surface-a rounded p-2 shadow"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.2 }}
          >
            <Button
              onClick={() => {
                nav("/perfil");
                closeMenu();
              }}
              text
              icon={
                <Icon
                  icon="iconamoon:profile-duotone"
                  width="20"
                  height="20"
                  className="pr-1"
                />
              }
              label="Perfil"
            />
            <LogOutButton />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default AuthButton;
