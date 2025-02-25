import LandingHero from "../components/landing/Hero/LandingHero";
import LandingFeaturedProducts from "../components/landing/LandingFeaturedProductList";
import LandingPromotionProducts from "../components/landing/LandingPromotionProductList";

function LandingPage() {
  return (
    <>
      <div className="max-w-6xl mx-auto flex flex-col gap-20 mb-20 px-5 md:px-0">
        <LandingHero />
        <LandingFeaturedProducts />
        <LandingPromotionProducts />
      </div>
    </>
  );
}

export default LandingPage;
