import { CartCard } from '@/_domain/models/cart/CartCard';
import { ProductCard } from '@/_domain/models/products/ProductCard';
import { create } from 'zustand';

interface CartStore {
  cartStore: CartCard[];
  clearCart: () => void;
  setCart: (cartcards: CartCard[]) => void;
  createOrAddOne: (productCard: ProductCard) => void;
  updateOrDelete: (cartCard: CartCard) => void;
  getCart: () => void;
}

const getExistingCartCardIndex = (cart: CartCard[], productId: number): number => {
  return cart.findIndex(
    card => card.productCard.productId == productId
  );
}


const createOrAddOne = (cartStorage: CartCard[], productCard: ProductCard): CartCard[] => {
  const existingCardIndex = getExistingCartCardIndex(cartStorage, productCard.productId || 0);
  if (existingCardIndex == -1) return [
    ...cartStorage, { productCard: { ...productCard }, quantity: 1 }
  ];
  cartStorage[existingCardIndex].quantity = ++cartStorage[existingCardIndex].quantity;
  return [...cartStorage]
}

const updateOrDelete = (cartStorage: CartCard[], cartCard: CartCard): CartCard[] => {
  const existingCardIndex = getExistingCartCardIndex(
    cartStorage, cartCard.productCard.productId || 0
  );
  if (existingCardIndex == -1) return [...cartStorage];
  cartStorage[existingCardIndex].quantity = cartCard.quantity;
  if (!cartStorage[existingCardIndex].quantity) cartStorage.splice(existingCardIndex, 1);
  return [...cartStorage]
}

export const useCartStore = create<CartStore>((set, get) => ({
  cartStore: [],
  setCart: (cartcards: CartCard[]) => set({ cartStore: cartcards }),
  clearCart: () => set({ cartStore: [] }),
  createOrAddOne: (productCard: ProductCard) => set({
    cartStore: createOrAddOne(get().cartStore, productCard)
  }),
  updateOrDelete: (cartCard: CartCard) => set({
    cartStore: updateOrDelete(get().cartStore, cartCard),
  }),
  getCart: () => [...get().cartStore],
}));
