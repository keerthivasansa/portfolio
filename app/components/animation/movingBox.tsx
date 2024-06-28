import { getRandValue } from "@/app/utils";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function MovingBox() {
  return (
    <div>
      <div
        className="w-32 h-32 rounded-lg absolute bottom-40 right-52"
        style={{
          backgroundImage:
            "linear-gradient(135deg, #66ff6c 25%, transparent 25%, transparent 50%, #66ff6c 50%, #66ff6c 75%, transparent 75%, transparent 100%)",
          backgroundSize: "40px 40px",
        }}
      ></div>
      <motion.div
        intial="over"
        animate="move"
        className="bg-accent w-32 h-32 rounded-lg z-10 bottom-40 right-52 absolute"
        variants={{
          over: {
            x: 0,
            y: 0,
          },
          move: {
            x: -50,
            y: 50,
          },
          transition: {
            duration: 0.25,
            delay: 1,
          },
        }}
      ></motion.div>
    </div>
  );
}
