import Underline from '../Underline';

function AboutMe() {
  return (
    <section id="about-me" className="p-10">
      <Underline>About me</Underline>
      <div className="text-gray-700 font-inter leading-relaxed space-y-6 text-justify max-w-4xl">
      <p>
        Throughout my academic journey, I always knew I wanted to build and create things, 
        which naturally led me to pursue programming as my main focus.
      </p>

      <p>
        I specialize in <span className="font-semibold">application development with Java</span> 
        , and also have a strong background in <span className="font-semibold">web development</span>. 
        My technical expertise covers both backend and frontend technologies, 
        allowing me to approach projects with a fullstack mindset.
      </p>

      <p>
        I’m passionate about solving problems through clean, efficient, and scalable code, 
        and I enjoy collaborating in team environments where I can both contribute and learn.
      </p>

      <p>
        Beyond coding, I value good design and usability, which is why I also explore tools like 
        Figma to bridge the gap between development and user experience.
      </p>

      <p>
        Core technologies and tools I am experienced with:
      </p>
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