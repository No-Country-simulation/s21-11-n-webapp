import { Icon } from "@iconify/react/dist/iconify.js";
import { useContext } from "react";
import { ThemeContext } from "../../theme/ThemeProvider";
import { Button } from "primereact/button";

export const ThemeNavbarItem = () => {
  const { theme, toggle } = useContext(ThemeContext);

  const selectedIcon =
    theme === "dark" ? (
      <Icon icon="bitcoin-icons:moon-filled" width="20" height="20" />
    ) : (
      <Icon icon="bitcoin-icons:sun-filled" width="20" height="20" />
    );
  return <Button outlined icon={selectedIcon} onClick={toggle} />;
};
