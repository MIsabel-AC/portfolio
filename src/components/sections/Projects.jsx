import ProjectCard from "../ProjectCard";
import Underline from '../Underline';

function Projects() {
  const projectList = [
    {
      image: "./pics/LaConcha.png",
      title: "La Concha Crítica",
      description: "Group project consisting of a review website for movies, series, and video games.",
    },
    {
      image: "./pics/MochaPetals.png",
      title: "Mocha Petals",
      description: "Coffee shop simulation game strictly made with Java.",
    },
    {
      image: "./pics/diary_img.jpg",
      title: "Coming soon!",
      description: "Currently working on a very cool project where you can personalize your diary as much as you want :).",
    },
  ];

  return (
    <section id="projects" className="p-8 font-inter ">
      {/* <h1 className="text-2xl font-bold mb-6 text-center md:text-left">Projects</h1> */}
      <Underline>Projects</Underline>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-center">
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