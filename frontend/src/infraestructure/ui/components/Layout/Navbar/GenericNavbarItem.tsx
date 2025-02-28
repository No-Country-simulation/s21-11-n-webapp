import { NavbarItemProps } from "@/domain/entities/NavbarItemProps";
import { Icon } from "@iconify/react/dist/iconify.js";
import { Button } from "primereact/button";
import { memo } from "react";

export const GenericNavbarItem = memo(
  ({ item: { icon, label } }: NavbarItemProps) => {
    return (
      <Button
       label={label}
        className="text-dark-secondary-b dark:text-light-secondary-b transition-none"
        icon={<Icon icon={icon} />}
        text
        key={label}
        autoFocus={false} 
      />
    );
  }
);
