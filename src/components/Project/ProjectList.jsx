import React, { useState } from "react";
import Image1 from "../../assets/Images/ProjectImages/Image1.jpg";
import Image2 from "../../assets/Images/ProjectImages/Image2.jpg";
import Image3 from "../../assets/Images/ProjectImages/Image3.jpg";
import Image4 from "../../assets/Images/ProjectImages/Image4.jpg";
import Image5 from "../../assets/Images/ProjectImages/Image5.jpg";
import video1 from "../../assets/Images/ProjectImages/video1.mp4";
import video2 from "../../assets/Images/ProjectImages/video2.mp4";

// Sample image and video data (replace with real data or API calls)
const mediaData = [
  {
    id: 1,
    type: "image",
    category: "gardens",
    src: Image1,
    alt: "Beautiful Garden",
  },
  {
    id: 2,
    type: "image",
    category: "landscaping",
    src: Image2,
    alt: "Landscape Design",
  },
  {
    id: 3,
    type: "image",
    category: "landscaping",
    src: Image3,
    alt: "Landscape Design",
  },
  {
    id: 4,
    type: "image",
    category: "landscaping",
    src: Image4,
    alt: "Landscape Design",
  },
  {
    id: 5,
    type: "image",
    category: "landscaping",
    src: Image5,
    alt: "Landscape Design",
  },
  {
    id: 6,
    type: "video",
    category: "videos",
    src: video1,
    alt: "Videos",
  },
  {
    id: 7,
    type: "video",
    category: "videos",
    src: video2,
    alt: "Videos",
  },
];

export default mediaData;
