import LandingHeroPattern from "./LandingHeroPattern";
import LandingHeroPatternMobile from "./LandingHeroPatternMobile";

const LandingHero = () => {
  return (
    <div className=" text-center py-20 relative mt-10 overflow-hidden">
      <div className="z-10">
        <span className="text-6xl text-prime-400 font-primary">
          Panaderia La Macarena
        </span>
        <p className="text-xl max-w-2xl mx-auto">
          En nuestra panadería, cada bocado es una experiencia única, hecha con
          ingredientes de calidad y mucho amor. Desde crujientes croissants
          hasta esponjosos panes artesanales, horneamos cada día para brindarte
          frescura y sabor inigualable. ¡Ven y déjate tentar!"
        </p>
      </div>
      <LandingHeroPattern />
      <LandingHeroPatternMobile />
    </div>
  );
};

export default LandingHero;
