import { useCartStore } from '@/_infraestructure/store/cart/cartStore'
import { CartCardComponent } from './CartCardComponent'
import { CartCard } from '@/_domain/models/cart/CartCard';
import { transformCostToString } from '@/_infraestructure/utils/history';

const getTotalCartCost = (cartStore: CartCard[]) => {
  let cost = 0;
  cartStore.forEach(cartcard => {
    const price = Number(cartcard.productCard.price.toFixed(2));
    const quantity = cartcard.quantity;
    cost = cost + (price * quantity);
  });
  return Number(cost.toFixed(2));
}

export const CartPanel = () => {
  const { cartStore } = useCartStore();
  
  return (
    <>
      <div>
        <h2 className='my-0'>Carrito de compras</h2>
        <div className='py-5'>
          Total: ${transformCostToString(getTotalCartCost(cartStore))}
        </div>
        {
          cartStore.length
            ? cartStore.map(card => <CartCardComponent key={card.productCard.productId} {...card} />)
            : <span>No ha elegido ningún producto aún</span>
        }
      </div>
    </>
  )
}
