import AnimatedPage from "@/_infraestructure/components/layout/pages/AnimatedPage";
import NotFoundSVG from "@/_infraestructure/components/svg/NotFoundSVG";
import { Button } from "primereact/button";
import { Link } from "react-router";

const NotFoundPage = () => {
  return (
    <AnimatedPage>
      <div className="flex flex-col gap-5 items-center justify-center mt-10">
        <NotFoundSVG />
        <span className="text-text">No encontramos lo que buscas</span>
        <Link className="no-underline text-surface" to="/">
          <Button>Volver</Button>
        </Link>
      </div>
    </AnimatedPage>
  );
};

export default NotFoundPage;
