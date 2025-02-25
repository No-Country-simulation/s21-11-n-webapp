import { MenuItem } from "primereact/menuitem";
import { useNavigate } from "react-router";
import { GenericNavbarItem } from "../components/Layout/Navbar/GenericNavbarItem";
import { useState } from "react";
import { ThemeNavbarItem } from "../components/Layout/Navbar/ThemeNavbarItem";

export const useGetMenuItems = () => {
  const [isUserLogged /*setIsUserLogged*/] = useState(false);
  const [isAdminUser /*setIsAdminUser*/] = useState(true);
  const navigate = useNavigate();

  const menuItems: MenuItem[] = [
    {
      label: "Inicio",
      icon: "mynaui:home",
      visible: true,
      command: () => {
        navigate("/");
      },
      template: (item, options) => (
        <GenericNavbarItem item={item} options={options} />
      ),
    },
    {
      label: "Recetas",
      icon: "hugeicons:rolling-pin",
      visible: true,
      command: () => {
        navigate("/recipes");
      },
      template: (item, options) => (
        <GenericNavbarItem item={item} options={options} />
      ),
    },
    {
      label: "Productos",
      icon: "fluent-mdl2:product-variant",
      visible: true,
      command: () => {
        navigate("/products");
      },
      template: (item, options) => (
        <GenericNavbarItem item={item} options={options} />
      ),
    },
    {
      label: "Administración",
      icon: "pajamas:admin",
      visible: isAdminUser,
      command: () => {
        navigate("/products");
      },
      template: (item, options) => (
        <GenericNavbarItem item={item} options={options} />
      ),
    },
    {
      label: "Iniciar Sesión",
      visible: isUserLogged ? false : true,
      icon: "tabler:key",
      command: () => {
        navigate("/products");
      },
      template: (item, options) => (
        <GenericNavbarItem item={item} options={options} />
      ),
    },
    {
      label: "Registrarse",
      visible: isUserLogged ? false : true,
      icon: "tabler:flare-filled",
      command: () => {
        navigate("/products");
      },
      template: (item, options) => (
        <GenericNavbarItem item={item} options={options} />
      ),
    },
    {
      label: "Salir",
      visible: isUserLogged ? true : false,
      icon: "icomoon-free:exit",
      command: () => {
        navigate("/products");
      },
      template: (item, options) => (
        <GenericNavbarItem item={item} options={options} />
      ),
    },
    {
      label: "Tema",
      visible: true,
      template: (item, options) => (
        <ThemeNavbarItem item={item} options={options} />
      ),
    },
  ];

  return {
    menuItems,
  };
};
