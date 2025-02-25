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
      <svg>
        <filter id="noise">
          <feTurbulence type="turbulence" baseFrequency="0.5" />
        </filter>
      </svg>
      <Footer />
    </>
  );
};
