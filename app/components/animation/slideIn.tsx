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
      x: "0",
      y: "0",
    },
    visible: {
      x: "0",
      y: "0",
      scale: 1,
    },
    transition: {
      delay: props.delay,
      duration: 500,
    },
  };
  switch (props.direction) {
    case "top":
      variants.hidden.y = "-100%";
      break;
    case "bottom":
      variants.hidden.y = "100%";
      break;
    case "left":
      variants.hidden.x = "-100%";
      break;
    case "right":
      variants.hidden.x = "100%";
      break;
  }
  return (
    <motion.div initial="hidden" animate="visible" variants={variants}>
      {props.children}
    </motion.div>
  );
}

export default SlideIn;
