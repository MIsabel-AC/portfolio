import { useTranslation } from "react-i18next";
import "../i18n";
function Footer() {
  const { t } = useTranslation();
  return (
    <footer
      className="text-sm text-center text-gray-700 p-4 font-inter"
      style={{ backgroundColor: "#E5F3E0" }}
    >
      <p>© 2025 M Isabel Aroca Cifuentes</p>
      <div className="flex justify-center gap-4 mt-2">
        <a href="#">{t("navigation.menuItems.home")}</a>
        <a href="#about-me">{t("navigation.menuItems.aboutMe")}</a>
        <a href="#work-experience">
          {t("navigation.menuItems.workExperience")}
        </a>
        <a href="#education">{t("navigation.menuItems.education")}</a>
        <a href="#projects">{t("navigation.menuItems.projects")}</a>
        <a href="#additional-info">{t("navigation.menuItems.additionalInfo")}</a>
        <a href="#contact">{t("navigation.menuItems.contact")}</a>
      </div>
      <div className="flex justify-center gap-4 mt-4 text-black">
        <a
          href="https://github.com/MIsabel-AC"
          target="_blank"
          className="hover:text-teal-500"
        >
          MIsabel-AC
        </a>
        <a
          href="https://www.linkedin.com/in/mar%C3%ADa-isabel-aroca-cifuentes/"
          target="_blank"
          className="hover:text-teal-500"
        >
          María Isabel
        </a>
      </div>
      <div className="flex items-center space-x-2 justify-center">
        <p className="sacramento-size mt-3">{t("credits.title")}</p>
        <img src="../src/assets/react.svg" alt="React icon" className="w-7 h-7 translate-y-1" />
  </div>
    </footer>
  );
}
export default Footer;
