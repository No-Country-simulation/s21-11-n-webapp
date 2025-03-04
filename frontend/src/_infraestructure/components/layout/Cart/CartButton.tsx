import { Icon } from "@iconify/react/dist/iconify.js";
import { Button } from "primereact/button";
import { Sidebar } from "primereact/sidebar";
import { useState } from "react";

const CartButton = () => {
  const [visibleRight, setVisibleRight] = useState(false);
  return (
    <>
      <Button
        badge="5"
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
        <h2>Carrito de compras</h2>
        <p>carrito component</p>
      </Sidebar>
    </>
  );
};

export default CartButton;
