import React from "react";
import Home from "./Components/HomePage/Home";
import { Route, Routes } from "react-router-dom";
import About from "./Components/AboutPage/About";
import Services from "./Components/ServicePage/Services";
import Blog from "./Components/BlogPage/Blog";
import Ideas from "./Components/IdeasPage/Ideas";
import CaseStudy from "./Components/CaseStudyPage/CaseStudy";
import Team from "./Components/TeamPage/Team";
import BlogDetail from "./Components/BlogDetailPage/BlogDetail";
import ContactUs from "./Components/Contact/ContactUs";
import SuccessMsg from "./Components/Contact/SuccessMsg";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/services" element={<Services />} />
      <Route path="/blogs" element={<Blog />} />
      <Route path="/innovative" element={<Ideas />} />
      <Route path="/CaseStudy" element={<CaseStudy />} />
      <Route path="/team" element={<Team />} />
      <Route path="/blogdetail" element={<BlogDetail />} />
      <Route path="/contact" element={<ContactUs />} />
      <Route path="/SuccessMsg" element={<SuccessMsg />} />
    </Routes>
  );
}

export default App;
