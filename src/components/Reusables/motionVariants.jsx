export const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      ease: "easeOut",
    },
  },
};

export const fadeIn = {
  hidden: { opacity: 0, scale: 0.5 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 1,
      ease: "easeOut",
    },
  },
};

export const leftToRight = {
  hidden: { opacity: 0, x: -100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 1,
      ease: "easeOut",
    },
  },
};

export const rightToLeft = {
  hidden: { opacity: 0, x: 100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 1,
      ease: "easeOut",
    },
  },
};

export const containerStagger = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 2, // delay between each card
      delayChildren: 0.3, // Delay before items start animating
    },
  },
};

export const fadeUpCard = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
      delay: i * 0.1,
    },
  }),
};

// Item Animation Variants
export const itemVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.8 }, // Start with opacity 0, small size, and slightly shifted down
  visible: { opacity: 1, y: 0, scale: 1 }, // Fade in, move to original position, and scale to normal size
};

// Animation for images and videos (can be customized further)
export const imageVideoVariants = {
  hidden: { opacity: 0, scale: 1.2 }, // Start with opacity 0 and slightly larger scale
  visible: { opacity: 1, scale: 1 }, // Fade in to normal size
};
