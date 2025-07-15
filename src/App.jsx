import './index.css'
import Header from "./components/Header";
import AboutMe from './pages/AboutMe'
import WorkExperience from './pages/WorkExperience'
import Education from './pages/Education'
import Projects from './pages/Projects'
import Contact from './pages/Contact'
import Footer from "./components/Footer";
import Introduction from './pages/Introduction';



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
