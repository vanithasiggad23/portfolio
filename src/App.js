import Hero from "./components/Hero";
import Certifications from "./components/Certifications";
import Projects from "./components/Projects";
import Qualifications from "./components/Qualifications";
import Skills from "./components/Skills";
import Navbar from "./components/Navbar";
import "./App.css";
function App(){
  return(
    <>
    <Navbar/>
    <Hero/>
   <Qualifications/>
    <Projects/>
    <Skills/>
    <Certifications/>
    </>
  );
};
export default App;