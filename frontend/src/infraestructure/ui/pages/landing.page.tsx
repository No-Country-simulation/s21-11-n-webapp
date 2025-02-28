import LandingHero from "../components/landing/Hero/LandingHero";
import LandingFeaturedProducts from "../components/landing/LandingFeaturedProductList";
import LandingPromotionProducts from "../components/landing/LandingPromotionProductList";

function LandingPage() {
  return (
    <>
      <div className=" flex flex-col mb-20 px-5 md:px-0">
        <LandingHero />
        <LandingFeaturedProducts />
        <LandingPromotionProducts />
      </div>
    </>
  );
}

export default LandingPage;
