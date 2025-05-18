import React from "react";
import { motion } from "framer-motion";
import ServiceMainImage from "../../assets/Images/ServiceImages/ServiceMainImage.jpg";
import ServiceCard from "./ServiceCard";
import serviceList from "./ServiceList";
import { containerStagger } from "../Reusables/motionVariants";

const Services = () => {
  return (
    <section
      id="service"
      className="w-full bg-backgroundAlt  flex flex-col md:flex-row gap-8 text-white"
    >
      {/* Content Section (Left side) */}
      <div className="md:w-3/5 p-4 lg:pl-36 lg:p-12">
        <div className="mb-6">
          <h2 className="h2">What We Offer</h2>
          <h1 className="h1 text-white leading-relaxed ">
            Our services are designed to bring life to your outdoor spaces.
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
            mollitia nam numquam,
          </p>
        </div>

        <motion.div
          variants={containerStagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          className="w-full grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {serviceList.map((service, index) => (
            <ServiceCard key={index} service={service} index={index} />
          ))}
        </motion.div>
      </div>

      {/* Image Section (Right side) */}
      <div className="md:w-2/5 w-full">
        <img
          src={ServiceMainImage}
          alt="Service Image"
          className="w-full h-[36rem] shadow-lg"
        />
      </div>
    </section>
  );
};

export default Services;
