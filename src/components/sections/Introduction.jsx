import { useTranslation } from "react-i18next";
import { useState, useEffect } from "react";
import "../../i18n";
import { motion } from "framer-motion";

function Introduction() {
  const { t } = useTranslation();
  const fullName = "Mª Isabel Aroca Cifuentes";
  const [displayedName, setDisplayedName] = useState("");
   const [rotate, setRotate] = useState(0);

    useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setDisplayedName(fullName.slice(0, index + 1));
      index++;
      if (index === fullName.length) clearInterval(interval);
    }, 130);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="introduction"
      className="px-10 py-10 shadow-md"
      style={{ backgroundColor: "#E5F3E0" }}
    >
      <div className="flex flex-col md:flex-row items-center">
        <div className="w-60 h-60 mb-6 md:mb-0 md:ml-4 shrink-0 order-1 md:order-2">
          <motion.img
            src="./pics/Isa_Foto_CV.jpg"
            alt="Isabel"
            className="w-full h-full object-cover rounded-full border-4 border-white cursor-pointer"
            animate={{ rotateY: rotate }}
            transition={{ duration: 0.7, ease: "easeInOut" }}
            onClick={() => setRotate(rotate + 360)}
          />
        </div>

        <div className="flex-1 min-w-[100px] md:pr-8 order-2 md:order-1 text-center md:text-left">
          <p className="mb-2 font-interItalic text-6xl">
            {t("introduction.greeting")}
          </p>
           <h1 className="text-6xl font-spaceGrotesk font-bold leading-tight">
            {displayedName}
          </h1>
          <p className="text-gray-600 mt-2 text-base font-inter">
            {t("introduction.subtitle")}
          </p>
        </div>
      </div>
    </section>
  );
}

export default Introduction;
