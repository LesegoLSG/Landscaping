import React from "react";
import BannerImage from "../../assets/Images/BannerImages/BannerImg.jpg";
import ChooseUsCard from "./ChooseUsCard";
import ChooseUsList from "./ChooseUsList";
import ChooseUsImage from "../../assets/Images/ChooseUsImages/ChooseUsImage.jpg";

const ChooseUs = () => {
  return (
    <section id="" className="w-full min-h-screen my-24">
      {/* Main div */}
      <div className="max-w-7xl mx-auto bg-gray-100">
        {/* First row with image and content */}
        <div className="w-full flex flex-col-reverse  md:flex-row ">
          {/* Image */}
          <div className="w-full md:w-2/3">
            <img
              src={ChooseUsImage}
              alt="chooseUsImage"
              className="w-full h-96"
            />
          </div>
          {/* Content */}
          <div className="w-full md:w-1/3 space-y-2 p-4">
            <h2 className="h2">Why Choose Us</h2>
            <h1 className="h1 ">
              Both the heart and the garden may bloom with beauty
            </h1>
            <p>
              From lush gardens to serene landscapes, our projects bring harmony
              between nature and design. Explore our work and be inspired.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
              natus aperiam recusandae quod voluptatibus ad voluptate debitis
              esse, non voluptates voluptas odio, est incidunt ab. Non sed
              consequatur beatae enim!
            </p>
            <button className="btn">See Pricing</button>
          </div>
        </div>
        {/* Second row with image and cards */}
        <div className="w-full h-auto flex flex-col-reverse  md:flex-row ">
          {/* Content */}
          <div className="w-full md:w-2/3 flex flex-col md:flex-row p-4 gap-4 mt-2">
            {ChooseUsList.map((chooseUsItem, index) => (
              <ChooseUsCard key={index} chooseUsItem={chooseUsItem} />
            ))}
          </div>
          {/* Image */}
          <div className="w-full md:w-1/3 bg-backgroundAlt flex flex-col justify-center items-center gap-2 p-4 md:p-6">
            <h1 className="text-3xl font-semibold  text-white">
              Best Gardening & Landscaping Services In Town
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
              vitae in consectetur
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChooseUs;
