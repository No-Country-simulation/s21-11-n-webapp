import { Card } from 'primereact/card'
import { ProductCardHeader } from './ProductCardHeader'
import { ProductCardFooter } from './ProductCardFooter'
import { ProductCard } from '@/_domain/models/products/ProductCard'

export const ProductCardComponent = (
  { description, image, price, title }: ProductCard
) => {
  return (
    <>
      <Card
        title={title}
        header={<ProductCardHeader image={image} />}
        footer={<ProductCardFooter price={price} />}
      >
        <p className="m-0 text-justify">
          {description}
        </p>
      </Card>
    </>
  )
}
