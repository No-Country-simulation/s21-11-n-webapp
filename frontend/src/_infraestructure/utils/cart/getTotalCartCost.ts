import { CartCard } from '@/_domain/models/cart/CartCard';

export const getTotalCartCost = (cartStore: CartCard[]) => {
  let cost = 0;
  cartStore.forEach(cartcard => {
    const price = Number(cartcard.productCard.price.toFixed(2));
    const quantity = cartcard.quantity;
    cost = cost + (price * quantity);
  });
  return Number(cost.toFixed(2));
}