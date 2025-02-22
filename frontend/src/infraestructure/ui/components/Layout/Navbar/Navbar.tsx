import { useGetMenuItems } from '@/infraestructure/ui/hooks/useGetMenuItems';
import { Menubar } from 'primereact/menubar';
import { memo } from 'react';

export const Navbar = memo(() => {
  // console.log('Navbar Rendered');
  const { menuItems } = useGetMenuItems();

  return (
    <>
      <Menubar model={menuItems} />
    </>
  )
})
