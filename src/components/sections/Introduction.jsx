import { useTranslation } from "react-i18next";
import "../../i18n";

function Introduction() {
    const { t } = useTranslation();
  return (
    <section
      id="introduction"
      className="px-10 py-10 shadow-md"
      style={{ backgroundColor: '#E5F3E0' }}
    >
      <div className="flex flex-col md:flex-row items-center">
        
        <div className="w-60 h-60 mb-6 md:mb-0 md:ml-4 shrink-0 order-1 md:order-2">
          <img
            src="./pics/Isa_Foto_CV.jpg"
            alt="Isabel"
            className="w-full h-full object-cover rounded-full border-4 border-white"
          />
        </div>

        <div className="flex-1 min-w-[100px] md:pr-8 order-2 md:order-1 text-center md:text-left">
          <p className="mb-2 font-interItalic text-6xl">{t("introduction.greeting")}</p>
          <h1 className="text-6xl font-spaceGrotesk font-bold leading-tight">
            Mª Isabel Aroca Cifuentes
          </h1>
          <p className="text-gray-600 mt-2 text-base font-inter">{t("introduction.subtitle")}</p>
        </div>
      </div>
    </section>
  )
}

export default Introduction;
