import {
  FaLeaf,
  FaTree,
  FaSeedling,
  FaTint,
  FaLightbulb,
} from "react-icons/fa";
import discountImg from "../../assets/Images/ServiceImages/discountImg.jpg";

const serviceList = [
  {
    id: 0,
    title: "Landscape Design",

    description:
      "Transform your outdoor space with customized designs that bring beauty and functionality to your garden.",
    extendedDescription:
      "A well-designed landscape not only enhances the visual appeal of your home but also increases its value. Our expert designers take into account your personal style, environmental conditions, and space limitations to create a tailored solution that meets your needs. Whether you prefer a minimalist approach with modern hardscapes or a lush, vibrant garden filled with native plants, we bring your vision to life. \n\n" +
      "From selecting the perfect plants and arranging garden beds to integrating walkways, patios, and water features, our team ensures that every element complements your outdoor space. Our eco-friendly approach promotes sustainability, ensuring that your garden thrives while minimizing maintenance efforts. Let us help you craft an outdoor sanctuary that you and your family will love for years to come.",
    icon: FaTree,
    mainImage: discountImg,
    images: [
      { id: 1, image: discountImg },
      { id: 2, image: discountImg },
      { id: 3, image: discountImg },
    ],
    features: [
      "Custom garden layouts",
      "Plant selection and arrangement",
      "Patios and walkways integration",
      "Eco-friendly landscape solutions",
    ],
  },
  {
    id: 1,
    title: "Lawn Care & Maintenance",

    description:
      "Keep your lawn lush and healthy with regular mowing, fertilizing, and weed control services.",
    extendedDescription:
      "A well-maintained lawn is the foundation of a beautiful home exterior. Our lawn care services are designed to keep your grass green, thick, and free of weeds or pests throughout the year. Whether you need regular mowing, seasonal aeration, or soil enrichment, we have the expertise and tools to provide top-quality results. Our team evaluates your lawn's unique needs and customizes a maintenance plan that ensures optimal growth and health. \n\n" +
      "Using environmentally friendly fertilizers and advanced lawn care techniques, we help you maintain a vibrant and resilient yard without excessive chemicals. We also provide expert advice on watering schedules and best practices to extend the life of your lawn, making it a welcoming space for relaxation and outdoor activities.",
    icon: FaLeaf,
    mainImage: discountImg,
    images: [
      { id: 1, image: discountImg },
      { id: 2, image: discountImg },
      { id: 3, image: discountImg },
    ],
    features: [
      "Regular mowing and trimming",
      "Seasonal fertilization",
      "Weed and pest control",
      "Lawn aeration and seeding",
    ],
  },
  {
    id: 2,
    title: "Garden Installation",
    description:
      "Enhance your home with expertly curated plants, flowers, and hardscapes for a breathtaking garden.",
    extendedDescription:
      "A thoughtfully designed garden can elevate the charm of any property. Our garden installation services cater to homeowners who want a vibrant, thriving outdoor space that reflects their personal taste. We select the best plants suited to your region’s climate, soil conditions, and aesthetic goals. From colorful flower beds to serene Japanese gardens, we create a unique and tranquil environment customized just for you. \n\n" +
      "Beyond plants, we incorporate hardscaping elements such as pathways, stone borders, and decorative mulch to enhance the functionality and appeal of your garden. Our installations are designed to be low-maintenance, ensuring that you can enjoy the beauty of nature without constant upkeep. Whether you're looking to refresh an existing garden or create a brand-new landscape, our experts are here to bring your vision to life.",
    icon: FaSeedling,
    mainImage: discountImg,
    images: [
      { id: 1, image: discountImg },
      { id: 2, image: discountImg },
      { id: 3, image: discountImg },
    ],
    features: [
      "Flower bed design",
      "Tree and shrub planting",
      "Mulching and edging",
      "Pathways and decorative stones",
    ],
  },
  {
    id: 3,
    title: "Irrigation Systems and Lighting",
    description:
      "Efficient watering solutions to keep your plants hydrated while conserving water and reducing costs.",
    extendedDescription:
      "Proper irrigation is crucial for maintaining a healthy and thriving landscape. Our team designs and installs smart irrigation systems that deliver the right amount of water to your plants, reducing waste and keeping your garden lush. Whether you need a drip irrigation setup for flower beds or a sprinkler system for your lawn, we ensure efficient water distribution that fits your landscape’s needs. \n\n" +
      "In addition to irrigation, we offer professional outdoor lighting solutions to enhance the beauty and security of your property. From pathway lights to accent lighting for trees and water features, our energy-efficient lighting options add ambiance and functionality to your outdoor space. Let us help you create a sustainable and visually stunning landscape that you can enjoy day and night.",
    icon: FaTint,
    mainImage: discountImg,
    images: [
      { id: 1, image: discountImg },
      { id: 2, image: discountImg },
      { id: 3, image: discountImg },
    ],
    features: [
      "Automated sprinkler systems",
      "Drip irrigation setup",
      "Smart water-saving technology",
      "Landscape lighting installation",
    ],
  },
];

export default serviceList;
