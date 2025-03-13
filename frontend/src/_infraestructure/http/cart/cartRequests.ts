import { CardItemBody } from '@/_domain/models/cart/CartItemBody';
import http from '../http';

interface PutCartItemProps {
  itemId: string;
  userId: string;
  cardItemBody: CardItemBody;
}

interface PostCartItemProps {
  userId: string;
  cardItemBody: CardItemBody;
}

interface UserIdProps {
  userId: string;
}
interface ItemIdProps {
  itemId: string;
}
interface orderStatusProps {
  orderStatus: string;
}


export const putCartItem = async (
  { itemId, userId, cardItemBody }: PutCartItemProps
) => {
  const { data } = await http.put(
    `/carts/user/${userId}/items/${itemId}`, { ...cardItemBody },
  );
  return data;
};

export const deleteCartItem = async (
  { itemId, userId }: UserIdProps & ItemIdProps
) => {
  const { data } = await http.delete(`/carts/user/${userId}/items/${itemId}`);
  return data;
};

export const postCartItem = async (
  { userId, cardItemBody }: PostCartItemProps
) => {
  const { data } = await http.post(`/carts/user/${userId}/items`, { ...cardItemBody });
  return data;
};

export const getCart = async (
  { userId }: UserIdProps,
) => {
  const { data } = await http.get(`/carts/user/${userId}`);
  return data;
};

export const getCartAll = async (
  { userId }: UserIdProps,
) => {
  const { data } = await http.get(`/carts/user/${userId}/all`);
  return data;
};

export const getCartByOrderStatus = async (
  { orderStatus }: orderStatusProps,
) => {
  const { data } = await http.get(`/carts/orderStatus/${orderStatus}`);
  return data;
};

export const clearCart = async (
  { userId }: UserIdProps,
) => {
  const { data } = await http.delete(`/carts/user/${userId}/clear`);
  return data;
};
