import { transformCostToString } from '@/_infraestructure/utils/others/transformCostToString';
import { Icon } from '@iconify/react/dist/iconify.js'
import { Button } from 'primereact/button'

interface ProductCardFooter {
  price: number;
}

export const ProductCardFooter = (
  { price }: ProductCardFooter
) => {
  return (
    <>
      <div className='flex justify-between items-center'>
        <div className='text-primary'>
          ${transformCostToString(price)}
        </div>
        <div>
          <Button type='button'>
            <Icon className='pr-2 text-3xl' icon="f7:cart-badge-plus" />
            Agregar
          </Button>
        </div>
      </div>
    </>
  )
}
