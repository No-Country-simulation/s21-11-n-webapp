import { FooterItem } from './FooterItem'

export const FooterOtherSection = () => {
  return (
    <>
      <FooterItem content='Sobre Nosotros' internalNavigationTo='/about' />
      <FooterItem content='Información de mi cuenta' />
      <FooterItem content='Cerrar Sesión' />
    </>
  )
}
