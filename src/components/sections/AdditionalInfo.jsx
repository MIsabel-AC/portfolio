import Underline from "../Underline";
import { useTranslation } from "react-i18next";
import "../../i18n";

function AdditionalInfo() {
  const { t } = useTranslation();
  return (
    <section id="additional-info" className="p-10 font-inter">
      <Underline>{t("additionalInfo.title")}</Underline>

      <div className="grid md:grid-cols-2 gap-8">
        
        <div
          className="group flex items-start gap-4 pl-4 hover:bg-rose-50/50 rounded-lg transition-all duration-300 p-4"
          style={{ borderLeft: "4px solid #f9caca" }}
        >
          <div className="text-rose-500 text-2xl mt-1 group-hover:scale-110 transition-transform duration-300">
            <i className="bi bi-translate"></i>
          </div>
          <div>
            <h3 className="font-semibold text-gray-800">
              {t("additionalInfo.items.0.name")}
            </h3>
            <p className="text-gray-600 text-sm">{t("additionalInfo.items.0.description")}</p>
          </div>
        </div>

     
        <div
          className="group flex items-start gap-4 border-l-4 pl-4 hover:bg-amber-50/50 rounded-lg transition-all duration-300 p-4"
          style={{ borderLeft: "4px solid #FDE1AF" }}
        >
          <div className="text-amber-500 text-2xl mt-1 group-hover:scale-110 transition-transform duration-300">
            <i className="bi bi-award"></i>
          </div>
          <div>
            <h3 className="font-semibold text-gray-800">
              {t("additionalInfo.items.1.name")}
            </h3>
            <p className="text-gray-600 text-sm">
              {t("additionalInfo.items.1.description")}
            </p>
          </div>
        </div>

       
        <div
          className="group flex items-start gap-4 pl-4 hover:bg-rose-50/50 rounded-lg transition-all duration-300 p-4"
          style={{ borderLeft: "4px solid #f9caca" }}
        >
          <div className="text-rose-500 text-2xl mt-1 group-hover:scale-110 transition-transform duration-300">
            <i className="bi bi-translate"></i>
          </div>
          <div>
            <h3 className="font-semibold text-gray-800">
              {t("additionalInfo.items.2.name")}
            </h3>
            <p className="text-gray-600 text-sm">
              {t("additionalInfo.items.2.description")}
            </p>
          </div>
        </div>

  
        <div
          className="group flex items-start gap-4 border-l-4 pl-4 hover:bg-amber-50/50 rounded-lg transition-all duration-300 p-4"
          style={{ borderLeft: "4px solid #FDE1AF" }}
        >
          <div className="text-amber-500 text-2xl mt-1 group-hover:scale-110 transition-transform duration-300">
            <i className="bi bi-award"></i>
          </div>
          <div>
            <h3 className="font-semibold text-gray-800">
              {t("additionalInfo.items.3.name")}
            </h3>
            <p className="text-gray-600 text-sm">
              {t("additionalInfo.items.3.description")}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AdditionalInfo;
