import { Panel } from "primereact/panel";
import { FooterSection } from "./FooterSection";
import { FooterContactSection } from "./FooterContactSection";
import { FooterSocialSection } from "./FooterSocialSection";
import { FooterOtherSection } from "./FooterOtherSection";

export const Footer = () => {
  return (
    <>
      <div
        className='
          mx-4 px-1.5 pt-1.5 bg-prime-500 rounded-t-md
          dark:bg-prime-400 dark:border-t-2 dark:border-x-2 dark:border-amber-700
        '>
        <Panel className="border-none">
          <div
            className="
              grid grid-cols-1 gap-5 
              sm:grid-cols-3
            "
          >
            {/* CONTACTO */}
            <FooterSection title="Contacto" children={<FooterContactSection />} />
            {/* REDES */}
            <FooterSection
              title="Redes Sociales"
              children={<FooterSocialSection />}
            />
            {/* OTROS */}
            <FooterSection title="Otros" children={<FooterOtherSection />} />
          </div>
        </Panel>
      </div>
    </>
  );
};
