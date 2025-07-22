function AboutMe() {
  return (
    <section id="about-me" className="p-10">
      <h2 className="text-2xl font-bold mb-4">About me</h2>
      <p className="text-gray-700 mb-4">
        I specialize in application development using Java and have a solid foundation in web development.
        My technical experience includes working with technologies such as
      </p>
      <div className="flex flex-wrap gap-2">
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