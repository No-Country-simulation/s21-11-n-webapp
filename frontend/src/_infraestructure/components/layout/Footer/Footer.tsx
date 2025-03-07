import { FooterSection } from "./FooterSection";
import { FooterContactSection } from "./FooterContactSection";
import { FooterSocialSection } from "./FooterSocialSection";
import { FooterOtherSection } from "./FooterOtherSection";

export const Footer = () => {
  return (
    <>
      <div className="bg-surface-a md:h-60">
        <div
          color="primary"
          className="mx-auto max-w-6xl h-full flex items-center justify-center p-5 md:p-0"
        >
          <div
            className="
            w-full
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
