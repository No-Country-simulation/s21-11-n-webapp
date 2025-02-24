import { Icon } from "@iconify/react";
import { products } from "./productsMockup";
import { Carousel } from "primereact/carousel";
import LandingPromotionProductItem from "./LandingPromotionProductItem";

function LandingPromotionProducts() {
  return (
    <div>
      <div className="flex flex-col gap-2 items-center text-center mb-5">
        <Icon
          icon="lsicon:badge-promotion-outline"
          className="text-prime-400"
          width="48"
          height="48"
        />
        <span className="font-primary text-5xl">Productos en Promoción</span>
      </div>
      <div className="pt-12 rounded-md bg-zinc-100 dark:bg-zinc-800 shadow-2xl">
        <Carousel
          value={products}
          numVisible={1}
          numScroll={1}
          itemTemplate={LandingPromotionProductItem}
        />
      </div>
    </div>
  );
}

export default LandingPromotionProducts;
