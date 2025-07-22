import './index.css'
import Header from "./components/Header";
import Introduction from './components/sections/Introduction';
import AboutMe from './components/sections/AboutMe'
import WorkExperience from './components/sections/WorkExperience'
import Education from './components/sections/Education'
import Projects from './components/sections/Projects'
import Contact from './components/sections/Contact'
import Footer from "./components/Footer";


function App() {
   return (
    <div className="min-h-screen font-sans bg-gray-100 text-gray-300-800">
      <Header />
      <Introduction />
      <AboutMe />
      <WorkExperience />
      <Education />
      <Projects />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
