import "@/styles/App.css";
import "@/styles/tailwind.css";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import AppRouter from "@/routing/router";
import { PrimeReactProvider } from "primereact/api";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <PrimeReactProvider value={{ ripple: true }}>
      <AppRouter />
    </PrimeReactProvider>
  </StrictMode>
);
