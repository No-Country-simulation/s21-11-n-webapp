import { Outlet, useSearchParams } from "react-router";
import { useEffect } from "react";
import { toast, Toaster } from "sonner";

const PublicLayout = () => {
  const [searchParams] = useSearchParams();

  useEffect(() => {
    const error = searchParams.get("error");
    if (error) {
      toast.error("No autorizado");
    }
  }, [searchParams]);

  return (
    <>
      <main className="">
        <Outlet />
      </main>
      <svg className="hidden">
        <filter id="noise">
          <feTurbulence type="turbulence" baseFrequency="0.45" />
        </filter>
      </svg>
      <Toaster richColors position="top-center" />
    </>
  );
};
export default PublicLayout;
