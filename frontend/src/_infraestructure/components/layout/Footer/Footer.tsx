import { FooterSection } from "./FooterSection";
import { FooterContactSection } from "./FooterContactSection";
import { FooterSocialSection } from "./FooterSocialSection";
import { FooterOtherSection } from "./FooterOtherSection";

export const Footer = () => {
  return (
    <>
      <div className="bg-surface-a">
        <div color="primary" className="border-none mx-auto max-w-6xl px-5 pt-20 pb-5">
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
        </div>
      </div>
    </>
  );
};
