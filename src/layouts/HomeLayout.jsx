import React from "react";
import Hero from "../pages/Header/Hero";
import Contact from "../components/Contact";
import Faculty from "../components/Faculty";
import About from "../components/About";
import Research from "../components/Research";
import FAQ from "../components/FAQ";
import Programms from "../components/Programms";
import Testimonials from "../components/Testimonials";
import Events from "../components/Events";
import Achievements from "../components/Achievements";
import Partners from "../components/Partners";
import { Helmet } from "react-helmet";

const HomeLayout = () => {
  return (
    <div>
      <Helmet>
        <title>Homepage || CSEJU</title>
      </Helmet>
      <Hero></Hero>
      <About></About>
      <Faculty></Faculty>
      <Programms></Programms>
      <Research></Research>
      <Events></Events>
      <Achievements></Achievements>
      <Testimonials></Testimonials>
      <Partners></Partners>
      <FAQ></FAQ>
      <Contact></Contact>
    </div>
  );
};

export default HomeLayout;
