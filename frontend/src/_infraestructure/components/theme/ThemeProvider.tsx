import { createContext, ReactNode, useState } from "react";

const themes: Record<string, string> = {
  dark: "/themes/vela-orange/theme.css",
  light: "/themes/mira/theme.css",
};

const savedTheme = localStorage.getItem("theme") || "dark";
const link = document.querySelector("#theme-link") as HTMLLinkElement;
if (link) {
  link.href = themes[savedTheme];
  document.documentElement.setAttribute("data-theme", savedTheme);
}

interface ThemeContextProps {
  theme: string;
  toggle: () => void;
}
export const ThemeContext = createContext<ThemeContextProps>({
  theme: savedTheme,
  toggle: () => {},
});

export default function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<string>(savedTheme || "dark");

  const toggle = () => {
    link.href = theme === "dark" ? themes.light : themes.dark;
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
    link.setAttribute("data-theme", newTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggle }}>
      {children}
    </ThemeContext.Provider>
  );
}
