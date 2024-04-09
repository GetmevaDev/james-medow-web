import { motion } from "framer-motion";
import React from "react";
import { useInView } from "react-intersection-observer";

const fadeInVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

export const FadeIn = ({ children }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={fadeInVariants}
      transition={{ duration: 1.5 }}
    >
      {children}
    </motion.div>
  );
};
