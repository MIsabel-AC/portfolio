import "./index.css";
import Header from "./components/Header";
import Introduction from "./components/sections/Introduction";
import AboutMe from "./components/sections/AboutMe";
import WorkExperience from "./components/sections/WorkExperience";
import Education from "./components/sections/Education";
import Projects from "./components/sections/Projects";
import AdditionalInfo from "./components/sections/AdditionalInfo";
import Contact from "./components/sections/Contact";
import Footer from "./components/Footer";
import Layout from "./components/Layout";
import "./i18n";
import MotionSection from "./MotionSection";

function App() {
  return (
    <div className="min-h-screen flex flex-col justify-between bg-[url('/src/assets/bg.png')] bg-cover bg-center">
      <div className="max-w-7xl mx-auto px-4 w-full flex flex-col">
        <Header />

        <Layout>
          <MotionSection delay={0}><Introduction /></MotionSection>
          <MotionSection delay={0.1}><AboutMe /></MotionSection>
          <MotionSection delay={0.2}><WorkExperience /></MotionSection>
          <MotionSection delay={0.3}><Education /></MotionSection>
          <MotionSection delay={0.4}><Projects /></MotionSection>
          <MotionSection delay={0.5}><AdditionalInfo /></MotionSection>
          <MotionSection delay={0.6}><Contact /></MotionSection>
        </Layout>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 w-full">
      <MotionSection delay={0.7}>
        <Footer />
      </MotionSection>
    </div>
    </div>
  );
}


export default App;
