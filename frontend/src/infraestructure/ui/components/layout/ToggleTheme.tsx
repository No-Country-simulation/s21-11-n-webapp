import { useContext } from "react";
import { ThemeContext } from "./ThemeProvider";
import { InputSwitch } from "primereact/inputswitch";

const ToggleTheme = () => {
  const { theme, toggle } = useContext(ThemeContext);

  return (
    <div className="card flex justify-between w-40 items-center">
      <span>Modo oscuro</span>
      <InputSwitch checked={theme === "dark"} onChange={toggle} />
    </div>
  );
};

export default ToggleTheme;
