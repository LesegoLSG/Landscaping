import React, { useState } from "react";
import { motion } from "framer-motion";
import mediaData from "./ProjectList";
import {
  itemVariants,
  imageVideoVariants,
  containerStagger,
} from "../Reusables/motionVariants";

const Project = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  // Filter images/videos based on the selected category
  const filteredMedia = mediaData.filter(
    (item) => selectedCategory === "all" || item.category === selectedCategory
  );

  // Calculate the number of pages
  const totalPages = Math.ceil(filteredMedia.length / itemsPerPage);

  // Get the media items for the current page
  const currentMedia = filteredMedia.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="w-full bg-white p-4 md-p-0">
      <div className="max-w-7xl mx-auto min-h-screen ">
        <div className="flex flex-col justify-center items-center">
          <h2 className="h2">Our Work</h2>
          <h1 className="h1  leading-relaxed ">
            {" "}
            Nature’s Beauty, Designed for You
          </h1>
          <p>
            From lush gardens to serene landscapes, our projects bring harmony
            between nature and design. Explore our work and be inspired.
          </p>

          {/* Filter buttons */}
          <div className="mt-8 flex space-x-4">
            <button
              className="text-primary font-semibold hover:underline cursor-pointer"
              onClick={() => setSelectedCategory("all")}
            >
              All
            </button>
            <button
              className="text-primary font-semibold hover:underline cursor-pointer"
              onClick={() => setSelectedCategory("gardens")}
            >
              Gardens
            </button>
            <button
              className="text-primary font-semibold hover:underline cursor-pointer"
              onClick={() => setSelectedCategory("landscaping")}
            >
              Landscaping
            </button>
            <button
              className="text-primary font-semibold hover:underline cursor-pointer"
              onClick={() => setSelectedCategory("videos")}
            >
              Videos
            </button>
          </div>

          {/* Display filtered media */}
          <motion.div
            className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerStagger} // Container with staggered animation
            initial="hidden"
            animate="visible"
          >
            {currentMedia.map((media) => (
              <motion.div
                key={media.id}
                className="w-full"
                variants={itemVariants} // Individual item animation
              >
                {media.type === "image" ? (
                  <motion.img
                    variants={imageVideoVariants} // Image-specific animation
                    src={media.src}
                    alt={media.alt}
                    className="w-full h-80 object-cover rounded-lg shadow-lg"
                  />
                ) : (
                  <motion.video
                    variants={imageVideoVariants} // Video-specific animation
                    controls
                    src={media.src}
                    className="w-full h-80 object-cover rounded-lg shadow-lg"
                    alt={media.alt}
                  />
                )}
              </motion.div>
            ))}
          </motion.div>

          {/* Pagination Controls */}
          <div className="mt-8 flex justify-center space-x-4">
            <button
              onClick={() =>
                setCurrentPage(currentPage > 1 ? currentPage - 1 : 1)
              }
              className="text-primary font-semibold hover:underline cursor-pointer"
            >
              Previous
            </button>
            <span className="text-primary font-semibold">
              Page {currentPage} of {totalPages}
            </span>
            <button
              onClick={() =>
                setCurrentPage(
                  currentPage < totalPages ? currentPage + 1 : totalPages
                )
              }
              className="text-primary font-semibold hover:underline cursor-pointer"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
