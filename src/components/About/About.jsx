import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../Reusables/motionVariants";
import AboutMainImage from "../../assets/Images/AboutImages/AboutMainImage.png";
import { FaLeaf, FaHandHoldingHeart } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const AboutUs = () => {
  const navigate = useNavigate();

  return (
    <section id="about" className="w-full md:pt-48 px-4">
      <div className="max-w-7xl mx-auto h-auto grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Image section */}
        <motion.div
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.5 }}
          className="w-full flex justify-center items-center"
        >
          <img src={AboutMainImage} alt="about-image" className="w-[32rem]" />
        </motion.div>
        {/* Content section */}
        <div className="w-full ">
          <h2 className="h2">About Us</h2>
          <h1 className="h1">Transforming Spaces, Inside and Out</h1>
          <p className="mt-4 leading-relaxed">
            At Ubuntu EcoTidy, we specialize in transforming environments
            through expert cleaning and landscaping services. From sparkling
            indoor office spaces to pristine outdoor landscapes, our mission is
            to create healthy, harmonious, and inspiring surroundings. Whether
            you need deep-cleaning for your interiors or beautifully maintained
            gardens, our dedicated team brings your vision to life with care and
            professionalism.
          </p>

          {/* Small Containers (Icons with Text) */}
          <div className="my-8 flex flex-col md:flex-row gap-6">
            {/* First container */}
            <div className="flex items-center p-4 rounded-lg shadow-md  w-full md:w-1/2">
              <FaLeaf className="text-accent text-6xl mr-4" />
              <div>
                <h3 className="text-lg font-semibold">
                  Eco-Friendly Clean & Green Solutions
                </h3>
                <p className="text-base text-neutral-800">
                  We combine eco-conscious cleaning methods and sustainable
                  landscaping to keep your spaces fresh, safe, and beautifully
                  green.
                </p>
              </div>
            </div>

            {/* Second container */}
            <div className="flex items-center p-4 rounded-lg shadow-md w-full md:w-1/2">
              <FaHandHoldingHeart className="text-accent text-7xl mr-4" />
              <div>
                <h3 className="text-lg font-semibold">
                  Tailored Service, Immaculate Results
                </h3>
                <p className="text-base text-neutral-800">
                  Every space is unique — that’s why we listen, adapt, and
                  deliver personalized cleaning and landscaping services that
                  exceed expectations.
                </p>
              </div>
            </div>
          </div>

          <button className="btn" onClick={() => navigate("/about-us")}>
            Get to know us
          </button>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
