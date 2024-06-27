import { motion } from "framer-motion";
import React from "react";

interface SlideInProps extends React.PropsWithChildren {
  delay: number;
  direction: "top" | "bottom" | "left" | "right";
}

function SlideIn(props: SlideInProps) {
  const variants = {
    hidden: {
      scale: 0.5,
      y: "-100%",
    },
    visible: {
      scale: 1,
      y: "0",
    },
    transition: {
      delay: props.delay,
      duration: 500,
    },
  };
  return (
    <motion.div initial="hidden" animate="visible" variants={variants}>
      {props.children}
    </motion.div>
  );
}

export default SlideIn;
