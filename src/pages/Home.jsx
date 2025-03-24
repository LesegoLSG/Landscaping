import React from "react";
import Banner from "../components/Banner/Banner";
import About from "../components/About/About";
import Services from "../components/Services/Services";

const Home = () => {
  return (
    <section className="w-full h-auto ">
      <Banner />
      <About />
      <Services />
    </section>
  );
};

export default Home;
