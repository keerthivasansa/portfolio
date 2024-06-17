"use client";
import { useEffect, useState } from "react";
import { getRandValue } from "../utils";
import { Skill } from "./skillFalls";

// TODO Later implement.
export default function FloatingSkill({ skill }: { skill: Skill }) {
  const [x, setX] = useState(0);
  const [y, setY] = useState(-100);

  function increaseY() {
    setY((y) => y + 10);
  }

  useEffect(() => {
    const xVal = getRandValue(0, window.innerWidth);
    setX(xVal);
    setInterval(increaseY, 250);
  }, []);

  return (
    <span
      style={{
        transform: `translateY(${y}px)`,
        left: `${x}px`,
        backgroundColor: skill.color,
        color: skill.font || "white",
      }}
      className={`px-4 z-[999] transition-all absolute top-0 ease-linear duration-300 py-2 rounded-2xl`}
    >
      {skill.name}
    </span>
  );
}
