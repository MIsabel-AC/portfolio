function ProjectCard({ image, title, description }) {
  return (
    <div id="projects" className="p-4 border rounded shadow-sm flex flex-col items-center font-inter ">
      <div className="mb-4 w-[300px] h-[300px] overflow-hidden rounded">
      <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"/>
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-sm text-gray-700 flex-grow">{description}</p>
    </div>
  )
}
export default ProjectCard

