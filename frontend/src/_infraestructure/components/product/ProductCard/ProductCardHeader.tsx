import { Icon } from '@iconify/react/dist/iconify.js';

interface ProductCardHeaderProps {
  image?: string;
}

export const ProductCardHeader = (
  { image }: ProductCardHeaderProps
) => {
  return (
    <>
      <div className='h-50'>
        {
          image
            ? <img className='h-full' src={image} />
            :
            <div
              className='bg-surface-d h-full flex justify-center items-center'
            >
              <Icon className='text-5xl' icon="subway:image" />
            </div>
        }
      </div>
    </>
  )
}
