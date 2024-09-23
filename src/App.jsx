import React from "react";
import Home from "./Components/HomePage/Home";
import { Route, Routes } from "react-router-dom";
import About from "./Components/AboutPage/About";
import Services from "./Components/ServicePage/Services";
import Blog from "./Components/BlogPage/Blog";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/services" element={<Services />} />
      <Route path="/blog" element={<Blog />} />
    </Routes>
  );
}

export default App;
