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
import GetQuote from "./Components/GetQuote/GetQuote";
import SuccessMsg from "./Components/GetQuote/SuccessMsg";
import ContactUs from "./Components/ContactUs/Contactus";

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
      <Route path="/quote" element={<GetQuote />} />
      <Route
        path="/SuccessMsg"
        element={
          <SuccessMsg
            heading="Request Sent"
            btn1="Request Another"
            btn2="Go to Home"
            text="Your request to get a quote has been sent successfully, You will get a
          response soon, Thanks"
            link="quote"
          />
        }
      />
      <Route path="/contactUs" element={<ContactUs />} />
      <Route
        path="/querySuccess"
        element={
          <SuccessMsg
            heading="Query Sent"
            btn1="Send Again"
            btn2="Go to Home"
            text="Your query has been sent successfully, One of our team members will contact your very soon. Thanks"
            link="contactUs"
          />
        }
      />
    </Routes>
  );
}

export default App;
