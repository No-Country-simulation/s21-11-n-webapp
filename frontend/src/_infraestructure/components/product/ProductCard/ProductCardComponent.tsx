import { Card } from 'primereact/card'
import { ProductCardHeader } from './ProductCardHeader'
import { ProductCardFooter } from './ProductCardFooter'
import { ProductCard } from '@/_domain/models/products/ProductCard'
import { useCartStore } from '@/_infraestructure/store/cart/cartStore'
import { memo } from 'react'

export const ProductCardComponent = memo((
  { description, image, price, title, productId }: ProductCard
) => {
  const { createOrAddOne } = useCartStore();

  const handleAddProductToCart = (productId: number) => {
    createOrAddOne({ description, image, price, title, productId });
  }

  return (
    <>
      <Card
        title={title}
        header={<ProductCardHeader image={image} />}
        footer={
          <ProductCardFooter
            price={price}
            productId={productId || 0}
            onAddProduct={handleAddProductToCart}
          />
        }
      >
        <p className="m-0 text-justify">
          {description}
        </p>
      </Card>
    </>
  )
})
