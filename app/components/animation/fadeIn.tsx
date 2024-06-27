import React from "react";
import { motion } from "framer-motion";

interface FadeInProps extends React.PropsWithChildren {
    delay: number;
}

function FadeIn(props: FadeInProps) {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={{
        hidden: {
          scale: 0.75,
          opacity: 0,
        },
        visible: {
          scale: 1,
          opacity: 1,
          transition: {
            delay: props.delay / 1000,
          },
        },
      }}
    >
      {props.children}
    </motion.div>
  );
}

export default FadeIn;
