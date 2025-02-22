import { FooterItem } from './FooterItem'

const addressString = 'Lorem ipsum dolor sit amet';
const phoneString = '846516156321';
const availableTimeString = 'Todos los días';


export const FooterContactSection = () => {

  return (
    <>
      <FooterItem content={`Dirección: ${addressString}`}/>
      <FooterItem content={`Teléfono: ${phoneString}`}/>
      <FooterItem content={`Horario: ${availableTimeString}`}/>
    </>
  )
}
