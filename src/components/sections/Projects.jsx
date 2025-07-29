import ProjectCard from "../ProjectCard";

function Projects() {
  const projectList = [
    {
      image: "./placeholder.jpg",
      title: "Project 1",
      description: "Lorem ipsum",
    },
    {
      image: "./placeholder.jpg",
      title: "Project 2",
      description: "Lorem ipsum",
    },
    {
      image: "./placeholder.jpg",
      title: "Project 3",
      description: "Lorem ipsum",
    },
  ];

  return (
    <section id="projects" className="p-8 font-inter ">
      <h1 className="text-2xl font-bold mb-6 text-center md:text-left">Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projectList.map((project, index) => (
          <ProjectCard
            key={index}
            image={project.image}
            title={project.title}
            description={project.description}
          />
        ))}
      </div>
    </section>
  )
}
export default Projects