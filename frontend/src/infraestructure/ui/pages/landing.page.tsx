import LandingFeaturedProductList from "../components/landing/LandingFeaturedProductList";
import LandingPromotionProductList from "../components/landing/LandingPromotionProductList";
import ToggleTheme from "../components/layout/ToggleTheme";

function LandingPage() {
  return (
    <>
      <div className="max-w-6xl mx-auto flex flex-col gap-60">
        <LandingPromotionProductList />
        <LandingFeaturedProductList />
        <ToggleTheme />
      </div>
    </>
  );
}

export default LandingPage;
