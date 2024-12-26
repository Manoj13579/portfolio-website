import "./App.css";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";4
import Certifications from "./components/Certifications";
import WorkEx from "./components/WorkEx";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="bg-gradient-to-r from-stone-950 to-indigo-950">
      <Navbar />
      <Home />
      <About />
      <Skills />
      <WorkEx />
      <Projects />
      <Certifications />
      <Footer />
    </div>
  );
}

export default App;