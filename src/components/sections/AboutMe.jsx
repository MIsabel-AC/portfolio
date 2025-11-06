import Underline from '../Underline';
import { useTranslation } from "react-i18next";
import "../../i18n";

function AboutMe() {
  const { t } = useTranslation();

  return (
    <section id="about-me" className="p-10">
     <Underline>{t("aboutMe.title")}</Underline>

      <div className="text-gray-700 font-inter leading-relaxed space-y-6 text-justify max-w-4xl">
        <p>{t("aboutMe.intro")}</p>
        <p>{t("aboutMe.specialization")}</p>
        <p>{t("aboutMe.values")}</p>
        <p>{t("aboutMe.designing")}</p>
        <p>{t("aboutMe.skillsTitle")}</p>
      </div>

<br />
      <div className="flex flex-wrap gap-2 font-medium max-w-4xl">
        {[
          "Java", "Spring", "MySQL", "Jira", "Figma", "ERP", "Odoo", "PL/SQL",
          "PostgreSQL", "HTML5", "CSS", "JavaScript", "Bootstrap", "TailwindCSS",
          "React", "Python", "Django"
        ].map((tech) => (
          <span key={tech} className="bg-teal-400 text-white px-3 py-1 rounded-full text-sm">
            {tech}
          </span>
        ))}
      </div>
    </section>
  )
}

export default AboutMe