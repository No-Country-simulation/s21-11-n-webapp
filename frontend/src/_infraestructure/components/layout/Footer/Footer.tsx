import { Panel } from "primereact/panel";
import { FooterSection } from "./FooterSection";
import { FooterContactSection } from "./FooterContactSection";
import { FooterSocialSection } from "./FooterSocialSection";
import { FooterOtherSection } from "./FooterOtherSection";

export const Footer = () => {
  return (
    <>
      <div className="max-w-6xl rounded-t mx-auto">
        <Panel className="border-none">
          <div
            className="
              grid grid-cols-1 gap-5 
              sm:grid-cols-3
            "
          >
            {/* CONTACTO */}
            <FooterSection
              title="Contacto"
              children={<FooterContactSection />}
            />
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
