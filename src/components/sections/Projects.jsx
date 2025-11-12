import ProjectCard from "../ProjectCard";
import Underline from "../Underline";
import { useTranslation } from "react-i18next";
import "../../i18n";

function Projects() {
  const { t, i18n } = useTranslation();
  const projectListRaw = [
  { repo: "https://github.com/grupo4EOI/Proyecto-Grupo4EOI" },
  { repo: "https://github.com/MIsabel-AC/Mocha-Petals" },
  { repo: "https://github.com/MIsabel-AC/diaryProject" }
];
const sectionTitle = t("projects.title");

  const projectImages = [
    "./pics/LaConcha.png",
    "./pics/MochaPetals.png",
    "./pics/diary_img.jpg",
  ];

  return (
  <section id="projects" className="p-8 font-inter">
    <Underline>{sectionTitle}</Underline>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-center">
      {projectListRaw.map((project, index) => (
        <ProjectCard 
          key={index} 
          image={projectImages[index]} 
          projectIndex={index} 
          repo={project.repo} 
        />
      ))}
    </div>
  </section>
);
}

export default Projects;

