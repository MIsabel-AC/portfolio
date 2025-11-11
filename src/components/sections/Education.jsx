import Underline from "../Underline";
import { useTranslation } from "react-i18next";
import "../../i18n";
function Education() {
  const { t } = useTranslation();
  return (
    <section id="education" className="p-10 font-inter">
      <Underline>{t("education.title")}</Underline>

      <div className="font-inter leading-relaxed space-y-6 text-justify max-w-4xl">
        <div>
          <h3 className="flex items-center font-semibold text-lg space-x-3">
            <span className="w-2.5 h-2.5 rounded-full bg-teal-400"></span>
            <span>{t("education.studies.0.degree")}</span>
          </h3>
          <p className="text-sm text-gray-600">
            {t("education.studies.0.institution")}
          </p>
          <div className="text-gray-700 font-inter leading-relaxed space-y-6 text-justify max-w-4xl">
            <p className="mt-2">{t("education.studies.0.description")}</p>
          </div>
        </div>

        <div>
          <h3 className="flex items-center font-semibold text-lg space-x-3">
            <span className="w-2.5 h-2.5 rounded-full bg-teal-400"></span>
            <span>{t("education.studies.1.degree")}</span>
          </h3>
          <p className="text-sm text-gray-600">
            {t("education.studies.1.institution")}
          </p>
          <div className="text-gray-700 font-inter leading-relaxed space-y-6 text-justify max-w-4xl">
            <p className="mt-2">{t("education.studies.1.description")}</p>
          </div>
        </div>

        <div>
          <h3 className="flex items-center font-semibold text-lg space-x-3">
            <span className="w-2.5 h-2.5 rounded-full bg-teal-400"></span>
            <span>{t("education.studies.2.degree")}</span>
          </h3>
          <p className="text-sm text-gray-600">
            {t("education.studies.2.institution")}
          </p>
          <div className="text-gray-700 font-inter leading-relaxed space-y-6 text-justify max-w-4xl">
            <p className="mt-2">{t("education.studies.2.description")}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Education;
