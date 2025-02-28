import { MenuItem } from "primereact/menuitem";
import { useNavigate } from "react-router";
import { ThemeNavbarItem } from "../components/layout/Navbar/ThemeNavbarItem";
import { GenericNavbarItem } from "../components/layout/Navbar/GenericNavbarItem";

export const useGetMenuItems = () => {
  const navigate = useNavigate();
  const handleNavigation = (id: string) => () => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const menuItems: MenuItem[] = [
    {
      label: "Inicio",
      icon: "mynaui:home",
      visible: true,
      command: handleNavigation("LandingHero"),
      template: (item, options) => (
        <GenericNavbarItem item={item} options={options} />
      ),
    },
    {
      label: "Destacados",
      icon: "hugeicons:rolling-pin",
      visible: true,
      command: handleNavigation("LandingFeaturedProducts"),
      template: (item, options) => (
        <GenericNavbarItem item={item} options={options} />
      ),
    },
    {
      label: "Promoción",
      icon: "fluent-mdl2:product-variant",
      visible: true,
      command: handleNavigation("LandingPromotionProducts"),
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
