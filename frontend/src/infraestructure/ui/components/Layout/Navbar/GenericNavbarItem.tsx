import { NavbarItemProps } from '@/domain/entities/NavbarItemProps'
import { Icon } from '@iconify/react/dist/iconify.js'
import { memo } from 'react'

export const GenericNavbarItem = memo((
  { item: { icon, label } }: NavbarItemProps
) => {
  // console.log('Item Rendered: ' + label);

  return (
    <div
      className='p-menuitem-link flex items-center'
    >
      {
        icon ? <Icon icon={icon} /> : ''
      }
      <div className='pl-2'>
        {label}
      </div>
    </div>
  )
})
