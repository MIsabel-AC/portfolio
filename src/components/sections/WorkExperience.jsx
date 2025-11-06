import Underline from '../Underline';
import { useTranslation } from "react-i18next";
import "../../i18n";

function WorkExperience() {
  const { t } = useTranslation();
  return (
     <section id="work-experience" className="p-10">
      <Underline>{t("workExperience.title")}</Underline>

      <div className="font-inter leading-relaxed space-y-6 text-justify max-w-4xl">
        
        <div>
          <h3 className="flex items-center font-semibold text-lg space-x-3">
            <span className="w-2.5 h-2.5 rounded-full bg-teal-400"></span>
            <span>{t("workExperience.experiences.0.role")}</span>
        </h3>

          <p className="text-sm text-gray-600">{t("workExperience.experiences.0.period")}</p>
         <div className="text-gray-700 font-inter leading-relaxed space-y-6 text-justify max-w-4xl">
          <p className="mt-2">
            {t("workExperience.experiences.0.description")}
          </p>

          </div> 
        </div>

        <div>
          <h3 className="flex items-center font-semibold text-lg space-x-3">
            <span className="w-2.5 h-2.5 rounded-full bg-teal-400"></span>
            <span><span>{t("workExperience.experiences.1.role")}</span></span>
          </h3>

          <p className="text-sm text-gray-600">{t("workExperience.experiences.1.period")}</p>
          <div className="text-gray-700 font-inter leading-relaxed space-y-6 text-justify max-w-4xl">
          <p className="mt-2">{t("workExperience.experiences.1.description")}</p>
          </div>
        </div>
      </div>
    </section>
  )
}
export default WorkExperience