import { Carousel } from "primereact/carousel";
import { Icon } from "@iconify/react";

import { products, responsiveOptions } from "./productsMockup";
import LandingFeaturedProductItem from "./LandingFeaturedProductItem";

function LandingFeaturedProducts() {
  return (
    <section
      style={{ height: "calc(100dvh - 61px)" }}
      className="h-screen scroll-mt-[61px] pt-5 md:pt-10"
      id="LandingFeaturedProducts"
    >
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col gap-2 items-center text-center">
          <Icon
            icon="hugeicons:bread-01"
            className="text-primary"
            width="48"
            height="48"
          />
          <span className="font-primary text-5xl">Productos Destacados</span>
        </div>
        <Carousel
          value={products}
          numVisible={3}
          numScroll={1}
          responsiveOptions={responsiveOptions}
          itemTemplate={LandingFeaturedProductItem}
        />
      </div>
    </section>
  );
}

export default LandingFeaturedProducts;
