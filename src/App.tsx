import "./App.css";
import Home from "./Components/Home";
import { Route, Routes } from "react-router-dom";
import About from "./Components/About";
import Contact from "./Components/Contact";
import CaseStudy from "./Components/CaseStudy";
import Navigation from "./Components/Navigation";

function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/case-study/:id" element={<CaseStudy />} />
      </Routes>
    </>
  );
}

export default App;
