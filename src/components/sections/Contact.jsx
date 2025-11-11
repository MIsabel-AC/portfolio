import Underline from "../Underline";
import { useTranslation } from "react-i18next";
import "../../i18n";

function Contact() {
  const { t } = useTranslation();
  return (
    <section id="contact" className="p-10 font-inter">
      <div className="flex flex-col md:flex-row justify-between">
        <div>
          <Underline>{t("contact.title")}</Underline>

          <div className="space-y-3 mt-1">
            <a
              href="https://www.linkedin.com/in/mar%C3%ADa-isabel-aroca-cifuentes/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 bg-teal-500 text-white px-4 py-2 rounded-full w-fit hover:bg-teal-600 transition"
            >
              <img
                src="./icons/linkedinicon.png"
                alt="LinkedIn"
                className="h-7 w-7"
              />
              <span>María Isabel Aroca Cifuentes</span>
            </a>

            <a
              href="https://github.com/MIsabel-AC"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 bg-teal-500 text-white px-4 py-2 rounded-full w-fit hover:bg-teal-600 transition"
            >
              <img
                src="./icons/githubicon.png"
                alt="GitHub"
                className="h-7 w-7"
              />
              <span>MIsabel-AC</span>
            </a>

            <a
              href="mailto:Isabel.arocac@gmail.com"
              className="flex items-center space-x-2 bg-teal-500 text-white px-4 py-2 rounded-full w-fit hover:bg-teal-600 transition"
            >
              <img
                src="./icons/emailicon.png"
                alt="Email"
                className="h-7 w-7"
              />
              <span>Isabel.arocac@gmail.com</span>
            </a>
          </div>
        </div>

        <div className="md:ml-1">
          <h2 className="text-2xl font-bold mb-4 mt-10 lg:mt-0 text-left font-inter">
            {t("contact.subtitle")}
          </h2>

          <form
            action="https://formspree.io/f/mvgvedyg"
            className="flex-1 max-w-md border-2 border-black p-6 rounded shadow-md space-y-4"
            style={{ backgroundColor: "#FDE1AF" }}
            method="POST"
          >
            <input
              type="email"
              name="email"
              placeholder={t("contact.form.email")}
              required
              className="w-full border border-black p-2 rounded bg-white sacramento-size resize-none"
            />
            <input
              type="text"
              name="subject"
              placeholder={t("contact.form.subject")}
              required
              className="w-full border border-black p-2 rounded bg-white sacramento-size resize-none"
            />
            <textarea
              name="message"
              rows="4"
              placeholder={t("contact.form.message")}
              className="w-full border border-black p-2 rounded bg-white sacramento-size resize-none"
            ></textarea>
            <button
              type="submit"
              className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800"
            >
              {t("contact.form.send")}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
