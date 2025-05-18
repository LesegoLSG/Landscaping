import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import BgImage from "../../assets/Images/TestimonialImages/BgImage.jpg";
// import required modules
import { Navigation } from "swiper/modules";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import TestimonialCard from "./TestimonialsCard";
import testimonialList from "./TestimonialsList";

const Testimonials = () => {
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);
  const swiperRef = useRef(null);

  const breakpointsResponsive = {
    "@0.00": {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    "@0.75": {
      slidesPerView: 1.5,
      spaceBetween: 20,
    },
    "@1.00": {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    "@1.50": {
      slidesPerView: 3,
      spaceBetween: 30,
    },
  };

  const handleSwiperEvents = () => {
    if (swiperRef.current) {
      setIsBeginning(swiperRef.current.isBeginning);
      setIsEnd(swiperRef.current.isEnd);
    }
  };

  return (
    <section id="testimonials" className="h-auto w-full ">
      <div className="w-full min-h-80  border border-accent  p-1 rounded-lg">
        <div
          className="bg-fixed  bg-center bg-cover rounded-lg"
          style={{ backgroundImage: `url(${BgImage})` }}
        >
          <div className="h-12/12 bg-opacity-75 flex flex-col justify-center items-center space-y-6">
            {/* Swiper */}
            <section
              className="relative w-full h-auto  text-white space-y-5 py-8 lg:px-24 md:px-16 sm:px-7 px-4 flex justify-center items-center flex-col"
              id="testimonials"
            >
              <div className="w-full max-w-7xl mx-auto space-y-4">
                <div className="">
                  <h3 className="h2">Testimonials</h3>
                  <h1 className="h1 text-white leading-relaxed">
                    Hear it for yourself
                  </h1>
                </div>
                {/* Custom buttons */}
                <div className="w-full max-w-7xl flex justify-end items-center gap-6">
                  <button
                    className={`custom-prev text-white bg-action hover:bg-action/50 p-2 rounded-full z-10 ${
                      isBeginning
                        ? "opacity-50 cursor-not-allowed"
                        : "cursor-pointer"
                    }`}
                    disabled={isBeginning}
                    onClick={() => swiperRef.current?.slidePrev()} // Go to previous slide
                  >
                    <FaChevronLeft size={20} />
                  </button>
                  <button
                    className={`custom-next text-white bg-action hover:bg-action/50 p-2 rounded-full z-10 ${
                      isEnd ? "opacity-50 cursor-not-allowed" : "cursor-pointer"
                    }`}
                    disabled={isEnd}
                    onClick={() => swiperRef.current?.slideNext()} // Go to next slide
                  >
                    <FaChevronRight size={20} />
                  </button>
                </div>
                {/* Testimonial content display */}
                <div className="w-full py-2">
                  <Swiper
                    ref={swiperRef}
                    slidesPerView={1}
                    spaceBetween={5}
                    navigation={{
                      nextEl: ".custom-next",
                      prevEl: ".custom-prev",
                    }}
                    breakpoints={breakpointsResponsive}
                    onSlideChange={handleSwiperEvents}
                    onInit={handleSwiperEvents}
                    modules={[Navigation]}
                    className="mySwiper p-1"
                  >
                    {testimonialList.map((item) => (
                      <SwiperSlide key={item.id}>
                        <TestimonialCard
                          name={item.name}
                          description={item.description}
                          image={item.image}
                          role={item.role}
                          rating={item.rating}
                        />
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
