import React from "react";
import Banner from "../components/Banner/Banner";
import About from "../components/About/About";
import Services from "../components/Services/Services";
import Project from "../components/Project/Project";
import ChooseUs from "../components/ChooseUs/ChooseUs";
import Testimonials from "../components/Testimonials/Testimonials";

const Home = () => {
  return (
    <section className="w-full h-auto ">
      <Banner />
      <About />
      <Services />
      <ChooseUs />
      <Testimonials />
      <Project />
    </section>
  );
};

export default Home;
