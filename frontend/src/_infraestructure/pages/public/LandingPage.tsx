import LandingHero from "@/_infraestructure/components/landing/Hero/LandingHero";
import LandingFeaturedProducts from "@/_infraestructure/components/landing/LandingFeaturedProductList";
import LandingPromotionProducts from "@/_infraestructure/components/landing/LandingPromotionProductList";
import AnimatedPage from "@/_infraestructure/components/layout/pages/AnimatedPage";

function LandingPage() {
  return (
    <AnimatedPage className=" flex flex-col mb-20 px-5 md:px-0">
      <LandingHero />
      <LandingFeaturedProducts />
      <LandingPromotionProducts />
    </AnimatedPage>
  );
}

export default LandingPage;
