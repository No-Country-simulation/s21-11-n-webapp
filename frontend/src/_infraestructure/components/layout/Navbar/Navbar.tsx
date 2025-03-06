import { Menubar } from "primereact/menubar";
import Imagotipo from "../../logo/Imagotipo";
import EndItems from "./EndItems";
import Isotipo from "../../logo/Isotipo";
import useMenuBarList from "@/_infraestructure/hooks/Menubar/useMenuBarList";

export const Navbar = () => {
  return (
    <Menubar
      className="sticky top-0 z-10 h-15 border-none rounded-none md:px-10"
      model={useMenuBarList()}
      start={
        <div className="mr-2">
          <div className="hidden md:block w-40 ">
            <Imagotipo />
          </div>
          <div className="md:hidden w-8">
            <Isotipo />
          </div>
        </div>
      }
      end={<EndItems />}
    />
  );
};
