import Underline from '../Underline';
function Education() {
  return (
    <section id="education" className="p-10 font-inter">
     <Underline>Education</Underline>
            <div className="font-inter leading-relaxed space-y-6 text-justify max-w-4xl">
        <div>
          <h3 className="flex items-center font-semibold text-lg space-x-3">
            <span className="w-2.5 h-2.5 rounded-full bg-teal-400"></span>
            <span>Junior Developer</span>
        </h3>


          <p className="text-sm text-gray-600">Freelance · 2025 – Present</p>
         <div className="text-gray-700 font-inter leading-relaxed space-y-6 text-justify max-w-4xl">
          <p className="mt-2">
            My latest project has been development and programming in Java for the project 'ConchaCrítica,' a web platform for movie, series, and video game reviews.
          </p>
          <p>
            I am consistently developing my skills to become an even better programmer, and I plan to continue working on new projects that challenge me and allow me to grow as a software developer.
          </p>
          </div> 
        </div>
        <div>
          <h3 className="flex items-center font-semibold text-lg space-x-3">
            <span className="w-2.5 h-2.5 rounded-full bg-teal-400"></span>
            <span>Junior Developer · Internship</span>
          </h3>
          <p className="text-sm text-gray-600">
            Institute for Research in Computer Science of Albacete · 2023
          </p>
          <div className="text-gray-700 font-inter leading-relaxed space-y-6 text-justify max-w-4xl">
          <p className="mt-2">
            Web scraping with Django. 
            Design, development, and programming of web applications. 
            Management of relational databases.
          </p>
          </div>
        </div>
      </div>



    </section>
  )
}
export default Education