import React from "react";
import {
  FaSeedling,
  FaLeaf,
  FaGlobeAmericas,
  FaHandHoldingHeart,
  FaTools,
  FaRecycle,
} from "react-icons/fa";
import grass1 from "../assets/Images/SectionImages/grass1.jpg";
import grass from "../assets/Images/SectionImages/grass.jpg"; // Replace with your actual image

const AboutDetails = () => {
  return (
    <section className="w-full mb-20">
      {/* Hero Section */}
      <div
        className="w-full h-72 md:h-96 flex justify-center items-center bg-cover bg-center relative"
        style={{ backgroundImage: `url(${grass1})` }}
      >
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
          <h1 className="text-2xl md:text-4xl font-bold text-center">
            Our Story: Passion for Nature & Sustainability
          </h1>
          <p className="mt-3 text-lg text-center md:text-xl max-w-2xl">
            Transforming outdoor spaces with sustainable landscaping and
            innovative gardening solutions.
          </p>
        </div>
      </div>
      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 mt-20 grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left Side - Text Content */}
        <div className="flex flex-col justify-center">
          <h2 className="h2">Who We Are</h2>
          <p className="mt-4 text-gray-700 leading-relaxed">
            With a passion for nature, we specialize in sustainable landscaping
            solutions that transform outdoor spaces into breathtaking,
            eco-friendly environments. From lush gardens to innovative green
            designs, we strive to create spaces that enhance well-being while
            preserving nature.
          </p>
          <p className="mt-4 text-gray-700 leading-relaxed">
            Our team brings expertise, creativity, and dedication to every
            project, ensuring that each design reflects the unique vision of our
            clients while incorporating sustainable elements.
          </p>

          {/* Key Features */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Eco-Friendly Solutions */}
            <div className="flex items-center">
              <FaSeedling className="text-accent text-5xl mr-4" />
              <div>
                <h3 className="text-xl font-semibold ">
                  Eco-Friendly Solutions
                </h3>
                <p className="text-gray-600">
                  We prioritize sustainability in all our designs.
                </p>
              </div>
            </div>

            {/* Global Standards */}
            <div className="flex items-center">
              <FaGlobeAmericas className="text-accent text-5xl mr-4" />
              <div>
                <h3 className="text-xl font-semibold">Global Standards</h3>
                <p className="text-gray-600">
                  Our approach aligns with international best practices.
                </p>
              </div>
            </div>

            {/* Customer-Centric Approach */}
            <div className="flex items-center">
              <FaHandHoldingHeart className="text-accent text-5xl mr-4" />
              <div>
                <h3 className="text-xl font-semibold ">
                  Customer-Centric Approach
                </h3>
                <p className="text-gray-600">
                  Your vision drives our creativity, making every project
                  unique.
                </p>
              </div>
            </div>

            {/* Professional Tools */}
            <div className="flex items-center">
              <FaTools className="text-accent text-5xl mr-4" />
              <div>
                <h3 className="text-xl font-semibold ">Professional Tools</h3>
                <p className="text-gray-600">
                  We use top-of-the-line equipment for the highest quality
                  results.
                </p>
              </div>
            </div>

            {/* Recycling & Waste Reduction */}
            <div className="flex items-center">
              <FaRecycle className="text-accent text-5xl mr-4" />
              <div>
                <h3 className="text-xl font-semibold">
                  Recycling & Waste Reduction
                </h3>
                <p className="text-gray-600">
                  We aim to minimize waste and recycle wherever possible to
                  reduce environmental impact.
                </p>
              </div>
            </div>

            {/* Innovative Designs */}
            <div className="flex items-center">
              <FaLeaf className="text-accent text-5xl mr-4" />
              <div>
                <h3 className="text-xl font-semibold">Innovative Designs</h3>
                <p className="text-gray-600">
                  Our designs focus on creativity and innovation, ensuring your
                  outdoor space stands out.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Image Gallery */}
        <div className="grid grid-cols-2 gap-4">
          <img
            src={grass}
            alt="Beautiful Lawn"
            className="w-full h-52 md:h-64 object-cover rounded-lg shadow-md"
          />
          <img
            src={grass}
            alt="Garden Design"
            className="w-full h-52 md:h-64 object-cover rounded-lg shadow-md"
          />
          <img
            src={grass1}
            alt="Sustainable Gardening"
            className="w-full h-52 md:h-64 object-cover rounded-lg shadow-md col-span-2"
          />
        </div>
      </div>
      <div className="w-full flex justify-center items-center mt-12">
        <button className="btn">Contact us</button>
      </div>
    </section>
  );
};

export default AboutDetails;
