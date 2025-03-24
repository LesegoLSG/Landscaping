import React from "react";
import AboutMainImage from "../../assets/Images/AboutImages/AboutMainImage.png";
import { FaLeaf, FaHandHoldingHeart } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const AboutUs = () => {
  const navigate = useNavigate();

  return (
    <section className="w-full md:pt-48 px-4">
      <div className="max-w-7xl mx-auto h-auto grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Image section */}
        <div className="w-full flex justify-center items-center">
          <img src={AboutMainImage} alt="about-image" className="w-[32rem]" />
        </div>
        {/* Content section */}
        <div className="w-full ">
          <h2 className="h2">About Us</h2>
          <h1 className="h1">Transforming Spaces, Enriching Lives</h1>
          <p className="mt-4 leading-relaxed">
            We believe in creating outdoor spaces that inspire and bring harmony
            to your surroundings. With expert landscaping, innovative designs,
            and sustainable gardening solutions, we turn ordinary yards into
            breathtaking landscapes. Let us bring your vision to life and make
            nature a part of your home.
          </p>

          {/* Small Containers (Icons with Text) */}
          <div className="my-8 flex flex-col md:flex-row gap-6">
            {/* First container */}
            <div className="flex items-center p-4 rounded-lg shadow-md  w-full md:w-1/2">
              <FaLeaf className="text-accent text-6xl mr-4" />
              <div>
                <h3 className="text-lg font-semibold">Eco-Friendly Designs</h3>
                <p className="text-base text-neutral-800">
                  Our solutions blend beauty with sustainability, ensuring a
                  greener future.
                </p>
              </div>
            </div>

            {/* Second container */}
            <div className="flex items-center p-4 rounded-lg shadow-md w-full md:w-1/2">
              <FaHandHoldingHeart className="text-accent text-6xl mr-4" />
              <div>
                <h3 className="text-lg font-semibold">
                  Customer-Centric Approach
                </h3>
                <p className="text-base text-neutral-800">
                  Your vision drives our creativity, making every project unique
                  and personal.
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
