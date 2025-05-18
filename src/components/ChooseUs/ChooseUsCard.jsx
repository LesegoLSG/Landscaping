import React from "react";
import { FaLongArrowAltRight } from "react-icons/fa";

const ChooseUsCard = ({ chooseUsItem }) => {
  return (
    <div className="relative w-full min-h-48  p-6 pt-12 shadow-lg">
      <div className="absolute top-[-20px] left-1/6 transform -translate-x-1/2  p-3 bg-secondary rounded-full shadow-md ">
        {chooseUsItem.icon && (
          <chooseUsItem.icon className="text-2xl text-accent" />
        )}
      </div>
      <div className="space-y-2">
        <p className="text-lg font-semibold">{chooseUsItem.title}</p>
        <p>{chooseUsItem.description}</p>
      </div>
    </div>
  );
};

export default ChooseUsCard;
