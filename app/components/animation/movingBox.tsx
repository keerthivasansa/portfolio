import { motion } from "framer-motion";
import { useState } from "react";

export default function MovingBox() {
  const [hover, setHover] = useState(false);

  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
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
        animate={hover ? "moveHover" : "move"}
        className="bg-accent w-32 h-32 rounded-lg z-10 bottom-40 right-52 absolute"
        variants={{
          over: {
            x: 0,
            y: 0,
            scale: 1,
          },
          move: {
            x: -25,
            y: 25,
          },
          moveHover: {
            x: -50,
            y: 50,
            scale: 1.2
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
