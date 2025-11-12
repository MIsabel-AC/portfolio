import Underline from "../Underline";
import { useTranslation } from "react-i18next";
import { useState, useEffect, useRef } from "react";
import "../../i18n";
import { motion } from "framer-motion";

function Contact() {
  const { t } = useTranslation();
  const checkRepo = t("contact.checkRepo");
  const [displayedRepo, setDisplayedRepo] = useState("");
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;

    let index = 0;
    let interval;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (interval) clearInterval(interval);

            interval = setInterval(() => {
              setDisplayedRepo(checkRepo.slice(0, index + 1));
              index++;
              if (index >= checkRepo.length) {
                clearInterval(interval);
              }
            }, 90);

            observer.disconnect();
          }
        });
      },
      { threshold: 0.1 }
    );

    observer.observe(containerRef.current);

    return () => {
      observer.disconnect();
      if (interval) clearInterval(interval);
    };
  }, [checkRepo]);

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
              className="flex items-center space-x-2 bg-teal-500 text-white px-4 py-2 rounded-full w-fit hover:bg-teal-600 transition transform duration-300 hover:scale-105 hover:shadow-xl"
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
              className="flex items-center space-x-2 bg-teal-500 text-white px-4 py-2 rounded-full w-fit hover:bg-teal-600 transition transform duration-300 hover:scale-105 hover:shadow-xl"
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
              className="flex items-center space-x-2 bg-teal-500 text-white px-4 py-2 rounded-full w-fit hover:bg-teal-600 transition transform duration-300 hover:scale-105 hover:shadow-xl"
            >
              <img
                src="./icons/emailicon.png"
                alt="Email"
                className="h-7 w-7"
              />
              <span>Isabel.arocac@gmail.com</span>
            </a>
          </div>
          <a
            href="https://github.com/MIsabel-AC/portfolio"
            target="_blank"
            rel="noopener noreferrer"
          >
            <p
              ref={containerRef}
              className="mt-10 leading-relaxed max-w-xs text-2xl font-spaceGrotesk text-gray-800 italic underline decoration-[#E5F3E0] decoration-5 hover:text-gray-600 transition-colors"
            >
              {displayedRepo}
            </p>
          </a>
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
              className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800 transform transition duration-300 hover:scale-105 hover:shadow-xl"
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
