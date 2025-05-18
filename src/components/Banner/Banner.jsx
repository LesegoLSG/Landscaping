import React from "react";
import { motion } from "framer-motion";
import BannerImg from "../../assets/Images/BannerImages/BannerImg.jpg";
import { GiGrass } from "react-icons/gi";
import BannerServices from "./BannerServices";
import {
  fadeIn,
  fadeInUp,
  leftToRight,
  rightToLeft,
} from "../Reusables/motionVariants";

const Banner = () => {
  return (
    <section
      id="home"
      className="relative w-full h-[80vh] bg-cover bg-center px-6 lg:px-24 mt-28"
      style={{ backgroundImage: `url(${BannerImg})` }}
    >
      {/* Overlay for opacity effect */}
      <div className="absolute inset-0 bg-black opacity-40 z-0"></div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto flex items-center justify-start h-full bg-opacity-50">
        <div className="max-w-3xl h-auto flex flex-col items-start justify-start gap-4">
          <motion.div
            variants={leftToRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.5 }}
            className="flex items-center gap-2"
          >
            <GiGrass className="text-accent" size={16} />
            <p className="text-white">
              Cleaning,Gardening & Landscaping Services
            </p>
          </motion.div>

          {/* Business Name */}
          <motion.h2
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.5 }}
            className="text-white text-xl font-semibold tracking-wide"
          >
            Ubuntu EcoTidy
          </motion.h2>

          <motion.h1
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.5 }}
            className="text-white text-5xl font-bold"
          >
            Transform Your Space with Expert Care
          </motion.h1>

          <motion.p
            variants={rightToLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.5 }}
            className="text-white"
          >
            We bring nature closer to you with professional landscaping and
            cleaning services. From lush gardens to spotless interiors, we make
            every space shine — the Ubuntu way.
          </motion.p>

          <button className="btn">Get Quote</button>

          <div className="hidden lg:block absolute -bottom-150 lg:-bottom-24 w-full mx-auto h-auto">
            <BannerServices />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
