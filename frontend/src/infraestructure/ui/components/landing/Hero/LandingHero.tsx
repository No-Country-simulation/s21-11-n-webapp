import LandingHeroPattern from "./LandingHeroPattern";
import LandingHeroPatternMobile from "./LandingHeroPatternMobile";

const LandingHero = () => {
  return (
    <section
      id="LandingHero"
      style={{ height: "calc(100dvh - 61px)" }}
      className="h-screen scroll-mt-[61px] pt-5 md:pt-10"
    >
      <div className="max-w-6xl py-20 mx-auto relative">
        <div className="z-10 text-center">
          <span className="text-6xl text-prime-400 font-primary">
            Panaderia La Macarena
          </span>
          <p className="text-xl max-w-2xl mx-auto">
            En nuestra panadería, cada bocado es una experiencia única, hecha
            con ingredientes de calidad y mucho amor. Desde crujientes
            croissants hasta esponjosos panes artesanales, horneamos cada día
            para brindarte frescura y sabor inigualable. ¡Ven y déjate tentar!"
          </p>
        </div>
        <LandingHeroPattern />
        <LandingHeroPatternMobile />
      </div>
    </section>
  );
};

export default LandingHero;
