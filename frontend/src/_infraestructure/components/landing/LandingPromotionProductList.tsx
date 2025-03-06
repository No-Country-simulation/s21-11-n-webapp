import { Icon } from "@iconify/react";
import { products } from "./productsMockup";
import { Carousel } from "primereact/carousel";
import LandingPromotionProductItem from "./LandingPromotionProductItem";

function LandingPromotionProducts() {
  return (
    <section
      style={{ height: "calc(100svh - 61px)" }}
      className="h-screen scroll-mt-[61px] pt-5 md:pt-10"
      id="LandingPromotionProducts"
    >
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col gap-2 items-center text-center mb-5">
          <Icon
            icon="lsicon:badge-promotion-outline"
            className="text-primary"
            width="48"
            height="48"
          />
          <span className="font-primary text-5xl">Productos en Promoción</span>
        </div>
        <div className="pt-12 rounded-md bg-light-secondary-c dark:bg-dark-secondary-c shadow-2xl">
          <Carousel
            value={products}
            numVisible={1}
            numScroll={1}
            itemTemplate={LandingPromotionProductItem}
          />
        </div>
      </div>
    </section>
  );
}

export default LandingPromotionProducts;
