import { useGetMenuItems } from "@/infraestructure/ui/hooks/useGetMenuItems";
import { Menubar } from "primereact/menubar";
import { memo } from "react";

export const Navbar = memo(() => {
  // console.log('Navbar Rendered');
  const { menuItems } = useGetMenuItems();

  return (
    <>
      <Menubar
        className="bg-zinc-50 dark:bg-zinc-800 sticky top-0 z-10 border-none rounded-none"
        model={menuItems}
      />
    </>
  );
});
