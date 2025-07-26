import "./styles/styles.scss";
import { ReactLenis, useLenis } from "lenis/react";
import "lenis/dist/lenis.css";
import "@fontsource/plus-jakarta-sans/400.css";
import "@fontsource/plus-jakarta-sans/500.css";
import "@fontsource/plus-jakarta-sans/600.css";
import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import About from "./Components/About";
import Contact from "./Components/Contact";
import CaseStudy from "./Components/CaseStudy";
import Navigation from "./Components/Navigation";

function App() {
  const lenis = useLenis((lenis) => {
    // called every scroll
    console.log(lenis);
  });

  return (
    <>
      <ReactLenis root />
      <main>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/case-study/:id" element={<CaseStudy />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
