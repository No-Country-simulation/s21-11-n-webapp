import { useAuthStore } from '@/_infraestructure/store/auth/authStore';
import { transformCostToString } from '@/_infraestructure/utils/others/transformCostToString';
import { Icon } from '@iconify/react/dist/iconify.js'
import { Button } from 'primereact/button'

interface ProductCardFooter {
  productId: number;
  price: number;
  onAddProduct: (productId: number) => void;
}

export const ProductCardFooter = (
  { price, productId, onAddProduct }: ProductCardFooter
) => {
  const { getRole } = useAuthStore();

  const onClickAdd = () => {
    onAddProduct(productId);
  }

  return (
    <>
      <div className='flex justify-between items-center'>
        <div className='text-primary'>
          ${transformCostToString(price)}
        </div>
        <div>
          {
            getRole() === 'ROLE_ADMIN'
              ?
              <></>
              :
              <Button type='button' onClick={onClickAdd}>
                <Icon className='pr-2 text-3xl' icon="f7:cart-badge-plus" />
                Agregar
              </Button>
          }
        </div>
      </div>
    </>
  )
}
