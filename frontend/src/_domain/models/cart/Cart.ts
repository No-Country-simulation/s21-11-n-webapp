import { CardItem } from './CartItem';

export interface Cart {
  id: string;
  userId: string;
  cartStatus: 'ACTIVE';
  totalAmount: number;
  items: CardItem[];
  createdAt: Date;
  updatedAt: Date;
}