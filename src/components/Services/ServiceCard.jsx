import React from "react";
import { FaLongArrowAltRight } from "react-icons/fa";

const ServiceCard = ({ service }) => {
  return (
    <div className="relative w-full min-h-48 border border-white p-6 pt-12">
      <div className="absolute top-[-20px] left-1/6 transform -translate-x-1/2 bg-secondary p-3 rounded-full shadow-md ">
        {service.icon && <service.icon className="text-2xl text-accent" />}
      </div>
      <div className="space-y-2">
        <p className="text-lg font-semibold">{service.title}</p>
        <p>{service.description}</p>
        <p className=" flex items-center gap-1 text-primary cursor-pointer hover:underline">
          Read More <FaLongArrowAltRight className="w-2.5" />
        </p>
      </div>
    </div>
  );
};

export default ServiceCard;
