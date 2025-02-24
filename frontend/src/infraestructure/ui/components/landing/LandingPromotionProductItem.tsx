import { Button } from "primereact/button";
import { ProductData } from "./productsMockup";
import { Icon } from "@iconify/react/dist/iconify.js";

function LandingPromotionProductItem({ id, name, price }: ProductData) {
  const handleBuy = () => {
    console.log("Comprando el producto: " + id);
  };
  return (
    <div className="flex flex-col md:grid md:grid-cols-2">
      <div className="md:col-span-1 grid place-content-center">
        <img
          className="w-full aspect-square object-cover rounded-t md:rounded-tr-none md:rounded-l "
          src="https://www.cookingchoice.com.ec/wp-content/uploads/2023/09/2500X1667-1-1024x683.png"
          alt="pan de ajo"
        />
      </div>
      <div className="h-full md:col-span-1 flex flex-col justify-end md:justify-center md:items-start relative overflow-hidden rounded-b md:rounded-r md:rounded-b-none">
        <div className="flex flex-col z-10 p-5  md:p-10">
          <Icon
            icon="emojione-monotone:baguette-bread"
            width="64"
            height="64"
            className="opacity-50 hidden md:block"
          />
          <span className="text-3xl md:text-5xl font-primary">{name}</span>
          <span className="text-xl italic text-prime-600 dark:text-prime-400 md:font-semibold md:text-2xl">
            ${price}.00
          </span>
          <hr className="w-full border-zinc-600/25 dark:border-zinc-400/25 my-5" />
          <div className="mb-10 flex items-center justify-center md:justify-start gap-3">
            <div className="flex items-center gap-1">
              <Icon
                icon="icon-park-outline:baby-taste"
                width="24"
                height="24"
              />
              <span>Salado</span>
            </div>
            <div className="flex items-center gap-1">
              <Icon icon="hugeicons:weight-scale" width="24" height="24" />
              <span>200g</span>
            </div>
            <div className="flex items-center gap-1">
              <Icon icon="fluent-mdl2:product" width="24" height="24" />
              <span>3 Disp.</span>
            </div>
          </div>
          <Button
            onClick={handleBuy}
            label="Comprar"
            className="text-prime-600 dark:text-prime-400"
            outlined
          />
        </div>
        <img
          className="absolute inset-0 w-full aspect-square object-cover blur-sm opacity-25 rounded-b md:rounded-r"
          src="https://www.cookingchoice.com.ec/wp-content/uploads/2023/09/2500X1667-1-1024x683.png"
          alt="pan de ajo"
        />
      </div>
      {/* <div className=" rounded relative lg:grid lg:grid-cols-2 items-center overflow-hidden">
        <div className="z-10 absolute lg:relative inset-0 flex flex-col justify-end items-center p-3">
          <div className="flex flex-col bg-zinc-200/50 backdrop-blur w-fit px-2 py-1 rounded dark:bg-zinc-900/50">
            <span className="text-2xl lg:text-6xl font-semibold">{name}</span>
          </div>
        </div>
        <img
          className="w-full rounded z-10"
          src="https://www.cookingchoice.com.ec/wp-content/uploads/2023/09/2500X1667-1-1024x683.png"
          alt="pan de ajo"
        />
        <img
          className="w-full rounded absolute inset-0"
          src="https://www.cookingchoice.com.ec/wp-content/uploads/2023/09/2500X1667-1-1024x683.png"
          alt="pan de ajo"
        />
      </div> */}
    </div>
  );
}

export default LandingPromotionProductItem;
