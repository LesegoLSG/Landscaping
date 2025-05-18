import React from "react";
import { motion } from "framer-motion";
import { FaLongArrowAltRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { fadeUpCard } from "../Reusables/motionVariants";

const ServiceCard = ({ service, index }) => {
  const navigate = useNavigate();
  return (
    <motion.div
      variants={fadeUpCard}
      custom={index}
      className="relative w-full min-h-48 border border-white p-6 pt-12"
    >
      <div className="absolute top-[-20px] left-1/6 transform -translate-x-1/2 bg-secondary p-3 rounded-full shadow-md bg-backgroundAlt ">
        {service.icon && <service.icon className="text-2xl text-accent" />}
      </div>
      <div className="space-y-2">
        <p className="text-lg font-semibold">{service.title}</p>
        <p>{service.description}</p>
        <p
          className=" flex items-center gap-1 text-text cursor-pointer hover:underline hover:text-accent font-bold border border-primary"
          onClick={() => navigate(`/service/${service.id}`)}
        >
          Read More <FaLongArrowAltRight className="w-2.5" />
        </p>
      </div>
    </motion.div>
  );
};

export default ServiceCard;
