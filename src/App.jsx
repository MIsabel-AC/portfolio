import './index.css'
import Index from './pages/Index'
import AboutMe from './pages/AboutMe'
import Projects from './pages/Projects'
import Contact from './pages/Contact'

function App() {
   return (
    <div className="min-h-screen font-sans bg-gray-100 text-gray-300-800">
      <Index />
      <AboutMe />
      <Projects />
      <Contact />
    </div>
  )
}

export default App
