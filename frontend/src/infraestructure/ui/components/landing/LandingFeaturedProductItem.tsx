import { Button } from "primereact/button";
import { ProductData } from "./productsMockup";

function LandingFeaturedProductItem({ id, name, src, price }: ProductData) {
  const handleBuy = () => {
    console.log("Comprando el producto: " + id);
  };
  return (
    <div className="surface-border border-round flex flex-col items-center m-2 text-center py-5 px-3">
      <img
        className="object-contain aspect-square w-auto max-w-72 drop-shadow-3xl"
        src={src}
      />
      <span className="font-bold text-3xl">{name}</span>
      <span className="text-prime-600 text-xl dark:text-prime-400 font-semibold">
        ${price}.00
      </span>
      <hr className="w-40 border-zinc-500/15 my-5" />
      <Button
        onClick={handleBuy}
        label="Comprar"
        className="text-prime-600 dark:text-prime-400"
        outlined
      />
    </div>
  );
}

export default LandingFeaturedProductItem;
