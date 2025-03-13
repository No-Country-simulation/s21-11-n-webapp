import "@/styles/tailwind.css";
import "@/styles/App.css";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import AppRouter from "@/routing/router";
import { PrimeReactProvider } from "primereact/api";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: 3,
    },
  },
});
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <PrimeReactProvider value={{ ripple: true }}>
        <AppRouter />
      </PrimeReactProvider>
    </QueryClientProvider>
  </StrictMode>
);
