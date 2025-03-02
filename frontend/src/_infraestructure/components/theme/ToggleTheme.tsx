import { useContext } from "react";
import { InputSwitch } from "primereact/inputswitch";
import { ThemeContext } from "./ThemeProvider";
import { Icon } from "@iconify/react/dist/iconify.js";

const ToggleTheme = () => {
  const { theme, toggle } = useContext(ThemeContext);

  return (
    <div className="flex justify-center p-1 items-center">
      <Icon icon="bitcoin-icons:sun-filled" width="24" height="24" />
      <InputSwitch
        tooltip="Cambiar tema"
        tooltipOptions={{ position: "bottom" }}
        checked={theme === "dark"}
        onChange={toggle}
      />
      <Icon icon="bitcoin-icons:moon-filled" width="24" height="24" />
    </div>
  );
};

export default ToggleTheme;
