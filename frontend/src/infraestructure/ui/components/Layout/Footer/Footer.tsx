import { Panel } from 'primereact/panel'
import { FooterSection } from './FooterSection'
import { FooterContactSection } from './FooterContactSection'
import { FooterSocialSection } from './FooterSocialSection'
import { FooterProductSection } from './FooterProductSection'
import { FooterOtherSection } from './FooterOtherSection'

export const Footer = () => {
  return (
    <>
      <Panel >
        <div className='
          grid grid-cols-1 gap-5
          sm:grid-cols-2
          md:grid-cols-4
        '>
          {/* CONTACTO */}
          <FooterSection title='Contacto' children={<FooterContactSection />} />
          {/* REDES */}
          <FooterSection title='Redes Sociales' children={<FooterSocialSection />} />
          {/* PRODUCTOS */}
          <FooterSection title='Productos' children={<FooterProductSection />} />
          {/* OTROS */}
          <FooterSection title='Otros' children={<FooterOtherSection />} />

        </div>
      </Panel>
    </>
  )
}
