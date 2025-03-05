import { Icon } from "@iconify/react/dist/iconify.js";
import { Button } from "primereact/button";
import AuthModal from "./authModal";
import { useState } from "react";

const SigninButton = () => {
  const [visible, setVisible] = useState(false);
  const toggleVisible = () => setVisible(!visible);

  return (
    <>
      <Button
        label="Entrar"
        outlined
        severity="info"
        icon={
          <Icon
            icon="cuida:login-outline"
            width="20"
            height="20"
            className="pr-1"
          />
        }
        onClick={toggleVisible}
      />
      <AuthModal visible={visible} visibleOff={toggleVisible} />
    </>
  );
};

export default SigninButton;
