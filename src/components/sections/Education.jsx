import Underline from '../Underline';
function Education() {
  return (
    <section id="education" className="p-10 font-inter">
     <Underline>Education</Underline>
            <div className="font-inter leading-relaxed space-y-6 text-justify max-w-4xl">
        <div>
          <h3 className="flex items-center font-semibold text-lg space-x-3">
            <span className="w-2.5 h-2.5 rounded-full bg-teal-400"></span>
            <span>Java Web Programming Course - 631h</span>
        </h3>


          <p className="text-sm text-gray-600">School of Industrial Organization, Generation Spain · 2025</p>
         <div className="text-gray-700 font-inter leading-relaxed space-y-6 text-justify max-w-4xl">
          <p className="mt-2">
            Trained to develop desktop and web applications, both on the client side (Frontend) and on the server side (Backend). 
          </p>
          <p>
            In addition, other key related aspects were addressed, such as development tools, databases, HTML, and optimizing the relationship with the client, learning to analyze and evaluate application requirements from their perspective.
          </p>
          </div> 
        </div>
        <div>
          <h3 className="flex items-center font-semibold text-lg space-x-3">
            <span className="w-2.5 h-2.5 rounded-full bg-teal-400"></span>
            <span>Specialist Technician in Cybersecurity</span>
          </h3>
          <p className="text-sm text-gray-600">
            IES Leonardo Da Vinci. Albacete, Castilla-La Mancha · 2023 - 2024.
          </p>
          <div className="text-gray-700 font-inter leading-relaxed space-y-6 text-justify max-w-4xl">
          <p className="mt-2">
            Intensive training focused on protecting systems, networks, and data against digital threats. Gained skills in vulnerability analysis, ethical hacking, secure system configuration, incident management, and the use of tools such as Wireshark or Metasploit.
          </p>
          </div>
        </div>
        <div>
          <h3 className="flex items-center font-semibold text-lg space-x-3">
            <span className="w-2.5 h-2.5 rounded-full bg-teal-400"></span>
            <span>Advanced Vocational Training in Cross-Platform Application Development</span>
          </h3>
          <p className="text-sm text-gray-600">
            IES Leonardo Da Vinci. Albacete, Castilla-La Mancha · 2021 - 2023.
          </p>
          <div className="text-gray-700 font-inter leading-relaxed space-y-6 text-justify max-w-4xl">
          <p className="mt-2">
            I learned to design and build software for desktop, mobile, and web platforms. I gained strong skills in programming (mainly Java), databases, systems, and development environments. I also trained in Agile project management, secure coding, and teamwork. Finally, I completed an internship in a company to apply my knowledge in real projects.
          </p>
          </div>
        </div>
      </div>



    </section>
  )
}
export default Education