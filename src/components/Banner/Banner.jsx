import React from "react";
import BannerImg from "../../assets/Images/BannerImages/BannerImg.jpg";
import { GiGrass } from "react-icons/gi";
import BannerServices from "./BannerServices";

const Banner = () => {
  return (
    <section
      className="relative w-full h-[80vh] bg-cover bg-center px-6 lg:px-24"
      style={{ backgroundImage: `url(${BannerImg})` }}
    >
      {/*Content*/}
      <div className="relative max-w-7xl mx-auto flex items-center justify-start h-full  bg-opacity-50">
        <div className="max-w-3xl h-auto flex flex-col items-start justify-start gap-4">
          <div className="flex items-center gap-2">
            <GiGrass className="text-accent" size={16} />
            <p className="text-white">Gardening & Landscaping Services</p>
          </div>

          <h1 className="text-white text-5xl font-bold">
            Transform Your Outdoor Space with Expert Care
          </h1>
          <p className="text-white">
            We bring nature closer to you with professional landscaping and
            garden care services. Whether it's a lush green lawn, vibrant flower
            beds, or beautifully designed outdoor spaces, we've got you covered.
          </p>
          <button className="btn">Get Quote</button>
          <div className="hidden lg:block absolute -bottom-150 lg:-bottom-24 w-full mx-auto  h-auto">
            <BannerServices />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
