import { AuthRoles } from "@/_domain/models/auth/RolesAuthModel";
import { Button } from "primereact/button";
import { Icon } from "@iconify/react/dist/iconify.js";
import SigninButton from "./SigninButton";
import { useAuthStore } from "@/_infraestructure/store/auth/authStore";
import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import LogOutButton from "./LogOutButton";
import { useNavigate } from "react-router";

const AuthButton = () => {
  const { userRole } = useAuthStore();
  const [visible, setVisible] = useState(false);
  const nav = useNavigate();
  const toggleMenu = () => setVisible(!visible);
  const closeMenu = () => setVisible(false);
  const goProfile = () => {
    nav("/perfil");
    closeMenu();
  };
  if (userRole === AuthRoles.NULL) return <SigninButton />;
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
              onClick={goProfile}
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
