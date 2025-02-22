import { Icon } from '@iconify/react/dist/iconify.js'
import { memo, useContext } from 'react'
import { ThemeContext } from '../ThemeProvider';
import { NavbarItemProps } from '@/domain/entities/NavbarItemProps';

export const ThemeNavbarItem = memo((
  { item: { label } }: NavbarItemProps
) => {
  // console.log('Item Rendered: ' + label);
  const { theme, toggle: toogleTheme } = useContext(ThemeContext);

  const onClickThemeToogle = () => {
    toogleTheme();
  }

  return (
    <div
      className='p-menuitem-link flex items-center'
      onClick={onClickThemeToogle}
    >
      <Icon icon={
        theme === 'dark'
          ? 'material-symbols:light-mode-outline-rounded'
          : 'material-symbols:light-mode-rounded'
      } />
      <div className='pl-2'>
        {label}
      </div>
    </div>
  )
})
