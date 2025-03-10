import { CartCard } from '@/_domain/models/cart/CartCard'
import { Card } from 'primereact/card'
import { ProductCardHeader } from '../../product/ProductCard/ProductCardHeader'
import { CartCardFooter } from './CartCardFooter'
import { useCartStore } from '@/_infraestructure/store/cart/cartStore'
import { useCallback } from 'react'

export const CartCardComponent = (
  {
    productCard,
    quantity,
  }: CartCard
) => {
  const { description, price, title, image, productId } = productCard;
  const { updateOrDelete } = useCartStore();
  const handleUpdateCartCard = useCallback((value: number) => {
    updateOrDelete({ productCard: { ...productCard }, quantity: value })
  }, [productCard, updateOrDelete])

  return (
    <>
      <Card
        title={title}
        header={<ProductCardHeader image={image} />}
        footer={
          <CartCardFooter
            cost={price}
            quantity={quantity}
            productId={productId || 0}
            onUpdateCartCard={handleUpdateCartCard}
          />
        }
      >
        <p className="m-0 text-justify">
          {description}
        </p>
      </Card>
    </>
  )
}
