import { useTranslation } from "react-i18next";

function ProjectCard({ image, projectIndex, repo }) {
  const { t, i18n } = useTranslation();
  const title = t(`projects.items.${projectIndex}.name`);
  const description = t(`projects.items.${projectIndex}.description`);

  return (
    <a href={repo} target="_blank" rel="noopener noreferrer"
      className="p-4 border rounded shadow-sm flex flex-col items-center text-center font-inter transform transition duration-300 hover:scale-105 hover:shadow-xl hover:bg-[#FDE1AF]">
      <div className="mb-4 w-[300px] h-[300px] overflow-hidden rounded">
        <img src={image} alt={title} className="w-[300px] h-[300px] object-contain" />
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-sm text-gray-700 flex-grow">{description}</p>
    </a>
  );
}

export default ProjectCard;


