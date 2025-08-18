import './index.css'
import Header from "./components/Header";
import Introduction from './components/sections/Introduction';
import AboutMe from './components/sections/AboutMe'
import WorkExperience from './components/sections/WorkExperience'
import Education from './components/sections/Education'
import Projects from './components/sections/Projects'
import Contact from './components/sections/Contact'
import Footer from "./components/Footer";
import Layout from './components/Layout';


function App() {
   return (
    <div className="max-w-7xl mx-auto px-4">
      <Header />
       <Layout>
        <Introduction />
        <AboutMe />
        <WorkExperience />
        <Education />
        <Projects />
        <Contact />
      </Layout >
      <Footer />
    </div>
  )
}

export default App
