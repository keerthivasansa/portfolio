"use client";
import { useEffect, useRef, useState } from "react";
import { getRandValue } from "../utils";
import { SkillChip } from "./skill";

export default function FloatingSkill({
  skillName,
  deleteFn
}: {
  skillName: string;
  deleteFn: Function;
}) {
  const x = useRef(getRandValue(0, window.innerWidth));
  const acceleration = useRef(getRandValue(10, 25));
  const [y, setY] = useState(-40);
  let timer = useRef<NodeJS.Timeout | null>(null);

  function increaseY() {
    setY((y) => y + acceleration.current);
  }

  useEffect(() => {
    timer.current = setInterval(increaseY, 250);
  }, []);

  useEffect(() => {
    if (y > window.outerHeight + 100 && timer.current) {
      deleteFn();
      clearTimeout(timer.current);
    }
  }, [y]);

  return (
    <div
      style={{
        transform: `translateY(${y}px)`,
        left: `${x.current}px`,
        transitionDuration: `${acceleration.current * 60}ms`,
      }}
      className={`z-[999] transition-all absolute top-0 ease-linear duration-300`}
    >
      <SkillChip name={skillName} />
    </div>
  );
}
