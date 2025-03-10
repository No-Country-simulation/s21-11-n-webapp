import { Icon } from "@iconify/react/dist/iconify.js";
import { Button } from "primereact/button";
import { Sidebar } from "primereact/sidebar";
import { useState } from "react";
import { CartPanel } from './CartPanel';
import { useCartStore } from '@/_infraestructure/store/cart/cartStore';

const CartButton = () => {
  const [visibleRight, setVisibleRight] = useState(false);
  const { cartStore } = useCartStore();

  return (
    <>
      <Button
        badge={String(cartStore.length)}
        outlined
        label="Carrito"
        onClick={() => setVisibleRight(true)}
        icon={
          <Icon
            icon="solar:cart-large-2-bold-duotone"
            width="20"
            height="20"
            className="pr-1"
          />
        }
      />
      <Sidebar
        visible={visibleRight}
        position="right"
        onHide={() => setVisibleRight(false)}
      >
        <CartPanel />
      </Sidebar>
    </>
  );
};

export default CartButton;
