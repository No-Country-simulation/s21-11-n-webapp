import { Card } from 'primereact/card'
import { ProductCardHeader } from './ProductCardHeader'
import { ProductCardFooter } from './ProductCardFooter'
import { ProductCard } from '@/_domain/models/products/ProductCard'
import { useCartStore } from '@/_infraestructure/store/cart/cartStore'
import { memo } from 'react'
import { usePostCartItem } from '@/_infraestructure/hooks/query/cart/usePostCartItem'
import { useUserData } from '@/_infraestructure/store/auth/authStore'

export const ProductCardComponent = memo((
  { description, image, price, title, productId }: ProductCard
) => {
  const { createOrAddOne } = useCartStore();
  const { userID } = useUserData();
  const { postCartItem } = usePostCartItem();

  const handleAddProductToCart = async (productId: number) => {
    console.log(productId);

    // createOrAddOne({ description, image, price, title, productId });
    try {
      const userId = userID || '';
      console.log(userID);
      const response = await postCartItem(
        { cardItemBody: { productId: '3fa85f64-5717-4562-b3fc-2c963f66afa6', quantity: 1 }, userId }
      );
      console.log(response);
    } catch (error) {
      console.log(error);
    }
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
