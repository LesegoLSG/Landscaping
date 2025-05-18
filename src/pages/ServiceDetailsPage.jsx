import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import BannerImg from "../assets/Images/BannerImages/BannerImg.jpg";
import discountImg from "../assets/Images/ServiceImages/discountImg.jpg";
import serviceList from "../components/Services/ServiceList";

const ServiceDetailsPage = () => {
  const { id } = useParams();
  const service = serviceList.find((item) => item.id.toString() === id);

  // Scroll to the top of the page when the component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!service) {
    return <p className="text-center text-red-500">Service not found.</p>;
  }

  return (
    <section className="w-full">
      {/* Top section with image and title */}
      <div
        className="w-full h-80 flex justify-center items-center text-white"
        style={{ backgroundImage: `url(${BannerImg})` }}
      >
        <div className="w-full flex flex-col justify-center items-center text-center">
          <h1 className="h1">{service.title}</h1>
          <p>{service.description}</p>
        </div>
      </div>

      {/* Content section */}
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-4 mt-6">
        {/* Left section with details */}
        <div className="w-full md:w-2/3 px-4 flex flex-col gap-6">
          {/* Service Image */}
          {service.mainImage && (
            <img
              src={service.mainImage}
              alt={service.title}
              className="w-full rounded-lg shadow-md"
            />
          )}

          {/* Description */}
          <div className="space-y-4">
            <h1 className="h1">Description</h1>
            <p>{service.description}</p>
            <p>
              Our {service.title} service ensures the best quality and
              reliability. Whether you're looking for professional assistance or
              a customized experience, we've got you covered. With years of
              expertise in this field, we guarantee outstanding results.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Reprehenderit quasi, porro fuga soluta voluptatibus laudantium
              illum ipsum! Commodi suscipit animi alias voluptate voluptas
              explicabo nemo recusandae laborum necessitatibus. Magni, ad.
            </p>
          </div>

          {/* Features */}
          {service.features && service.features.length > 0 && (
            <div className="space-y-4">
              <h1 className="h1">Features</h1>
              <ul className="list-disc list-inside space-y-2">
                {service.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>
          )}

          {/* More Images */}
          {service.images && service.images.length > 0 && (
            <div className="w-full grid grid-cols-2 md:grid-cols-3 gap-2">
              {service.images.map((img, index) => (
                <img
                  key={index}
                  src={img.image}
                  alt={`Service image ${index + 1}`}
                  className="w-full h-40 object-cover rounded-lg shadow-md"
                />
              ))}
            </div>
          )}
        </div>

        {/* Right section */}
        <div className="w-full md:w-1/3 space-y-6">
          {/* Other services */}
          <div className="bg-secondary p-6 rounded-lg shadow-md text-white">
            <h1 className="text-xl font-semibold">Other Services</h1>
            <ul className="mt-3 space-y-2">
              {serviceList
                .filter((item) => item.id.toString() !== id)
                .map((item) => (
                  <li
                    key={item.id}
                    className="hover:text-gray-300 cursor-pointer"
                  >
                    {item.title}
                  </li>
                ))}
            </ul>
          </div>

          {/* Discount section */}
          <div
            className="relative h-60 rounded-lg shadow-lg bg-cover bg-center flex items-center justify-center"
            style={{ backgroundImage: `url(${discountImg})` }}
          >
            <div className="absolute inset-0 bg-opacity-90 rounded-lg"></div>
            <div className="relative text-center text-white p-6">
              <h1 className="text-xl font-bold">
                DISCOUNT 10% FOR THIS MONTH!!!
              </h1>
              <p className="text-gray-200 mt-2">Why wait?</p>
              <button className="mt-4 px-4 py-2 bg-primary text-white rounded-md hover:bg-opacity-90 transition">
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceDetailsPage;
