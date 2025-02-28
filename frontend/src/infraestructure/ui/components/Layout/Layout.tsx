import { Outlet } from "react-router";
import { Navbar } from "./Navbar/Navbar";
import { Footer } from "./Footer/Footer";

export const Layout = () => {
  // console.log('Rendered Layout')

  return (
    <>
      <Navbar />

      <main>
        <Outlet />
      </main>
      <svg className="hidden">
        <filter id="noise">
          <feTurbulence type="turbulence" baseFrequency="0.45" />
        </filter>
      </svg>
      <Footer />
    </>
  );
};
