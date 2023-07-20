import { motion } from "framer-motion";
import React from "react";
import { useInView } from "react-intersection-observer";

export const BounceIn = ({ dampingValue, children }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const bounceInVariants = {
    hidden: {
      opacity: 0,
      scale: 0.2,
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.75,
        type: "spring",
        damping: dampingValue, // Значение damping
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={bounceInVariants}
    >
      {children}
    </motion.div>
  );
};
