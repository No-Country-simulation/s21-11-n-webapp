import PanaderiaImage from '@/assets/panaderia-about.png';
import { Panel } from 'primereact/panel';

export const About = () => {
  return (
    <>
      <div className='flex flex-col-reverse
      sm:flex-row'>
        <div className='flex-1 flex items-center'>
          <Panel className='m-4 border border-prime-500 dark:text-prime-400 text-md text-justify'>
            <h1 className='m-0 text-xl text-prime-500 dark:text-prime-400 text-center'>
              Sobre Nosotros
            </h1>
            <p>
              En [Nombre de tu panadería], horneamos con amor desde [año de fundación], combinando tradición y calidad en cada pan, pastel y café. Usamos ingredientes frescos para ofrecerte sabores auténticos y una experiencia acogedora.
            </p>
            <p>
              Nos encanta ser parte de tu día con el aroma y el calor del pan recién horneado. ¡Ven y disfruta con nosotros!
            </p>
          </Panel>
        </div>
        <div
          className='flex-1 flex items-center p-4
          sm:pl-0 sm:pr-4 sm:py-4'
        >
          <img className='w-full' src={PanaderiaImage} alt="About our bakery" />
        </div>
      </div>
    </>
  )
}
