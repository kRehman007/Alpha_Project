import React from "react";
import Home from "./Components/HomePage/Home";
import { Route, Routes } from "react-router-dom";
import About from "./Components/AboutPage/About";
import Services from "./Components/ServicePage/Services";
import Blog from "./Components/BlogPage/Blog";
import Ideas from "./Components/IdeasPage/Ideas";
import CaseStudy from "./Components/CaseStudyPage/CaseStudy";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/services" element={<Services />} />
      <Route path="/blogs" element={<Blog />} />
      <Route path="/innovative" element={<Ideas />} />
      <Route path="/CaseStudy" element={<CaseStudy />} />
    </Routes>
  );
}

export default App;
