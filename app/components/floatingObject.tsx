"use client";
import { useEffect, useRef, useState } from "react";
import { getRandValue } from "../utils";
import { SkillChip } from "./skill";

export default function FloatingSkill({ skillName }: { skillName: string }) {
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
    <div
      style={{
        transform: `translateY(${y}px)`,
        left: `${x.current}px`,
      }}
      className={`z-[999] transition-all absolute top-0 ease-linear duration-300`}
    >
      <SkillChip name={skillName}/>
    </div>
  );
}
