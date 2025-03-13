import { useCartStore } from '@/_infraestructure/store/cart/cartStore'
import { CartCardComponent } from './CartCardComponent'
import { transformCostToString } from '@/_infraestructure/utils/history';
import { getTotalCartCost } from '@/_infraestructure/utils/cart/getTotalCartCost';

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
