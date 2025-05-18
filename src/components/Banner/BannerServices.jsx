import React from "react";
import gardener from "../../assets/Images/BannerImages/gardener.png";
import landscape from "../../assets/Images/BannerImages/landscape.png";
import landscapedesign from "../../assets/Images/BannerImages/landscapedesign.png";
import maintenance from "../../assets/Images/BannerImages/maintenance.png";

// Sample data for banner services
const bannerData = [
  {
    icon: landscape,
    header: "Indoor Cleaning",
    subheader:
      "Comprehensive cleaning for offices, restrooms, kitchens, and all interior spaces.",
  },
  {
    icon: landscape,
    header: "Outdoor Cleaning",
    subheader:
      "Exterior care including tidying, pathway sweeping, and pressure washing.",
  },
  {
    icon: gardener,
    header: "Gardening",
    subheader: "We do garden for outdoors services",
  },
  {
    icon: landscape,
    header: "Landscaping",
    subheader: "We create and maintain beautiful landscapes for your yard",
  },
];

const BannerServices = () => {
  return (
    <div className="w-full bg-backgroundAlt flex flex-col md:flex-row justify-center gap-6 px-2 py-2">
      {bannerData.map((service, index) => (
        <div
          key={index}
          className="text-center p-2 rounded-lg  w-full sm:w-1/3"
        >
          <div className="w-full flex justify-center items-center">
            <img src={service.icon} alt={service.header} className="" />
          </div>

          <h3 className="text-white text-xl font-semibold">{service.header}</h3>
          <p className="text-white">{service.subheader}</p>
        </div>
      ))}
    </div>
  );
};

export default BannerServices;
