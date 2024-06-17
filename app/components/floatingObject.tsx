"use client";
import { useEffect, useRef, useState } from "react";
import { getRandValue } from "../utils";
import { Skill } from "./skillFalls";

// TODO Later implement.
export default function FloatingSkill({ skill }: { skill: Skill }) {
  const x = useRef(getRandValue(0, window.innerWidth));
  const acceleration = useRef(getRandValue(10, 25));
  const [y, setY] = useState(-40);

  function increaseY() {
    setY((y) => y + acceleration.current);
  }

  useEffect(() => {
    setInterval(increaseY, 250);
  }, []);

  return (
    <span
      style={{
        transform: `translateY(${y}px)`,
        left: `${x.current}px`,
        backgroundColor: skill.color,
        color: skill.font || "white",
      }}
      className={`px-4 z-[999] transition-all absolute top-0 ease-linear duration-300 py-2 rounded-2xl`}
    >
      {skill.name}
    </span>
  );
}
