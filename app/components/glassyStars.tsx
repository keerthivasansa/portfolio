import { useEffect, useId, useState } from "react";
import { getRandValue } from "../utils";
import FallingObject from "./animation/fallingObject";

export default function GlassyFall() {
  const [curr, setCurr] = useState<{ color: string; id: string }[]>([]);

  const colors = [
    "rgb(255, 126, 126)",
    "rgb(251, 167, 99)",
    "rgb(52, 123, 209)",
    "rgb(50, 245, 190)",
    "rgb(243, 80, 80)",
    "rgb(250, 234, 55)",
  ];

  function addSkill(limit: number) {
    const index = Math.floor(getRandValue(0, colors.length));
    const color = colors[index];
    const id = crypto.randomUUID();

    setCurr((arr) => {
      if (arr.length >= limit) return arr;
      return [...arr, { id, color }];
    });
  }

  function deleteId(id: string) {
    setCurr((arr) => arr.filter((node) => node.id != id));
  }

  function spawnObjects() {
    if (curr.length)
      return;
    const limit = window.screen.width / 8;
    const spawnRate = window.screen.width / 25;
    const nxt = Math.min(spawnRate, limit - curr.length);
    for (let i = 0; i < nxt; i++) addSkill(limit);
    console.log({ limit, curr: curr.length, nxt });
  }

  useEffect(spawnObjects, [curr, spawnObjects, addSkill]);

  return (
    <div className="overflow-hidden w-dvw -z-10 bg-black bg-opacity-50 blur-xl pointer-events-none h-dvh absolute top-0 left-0">
      {curr.map((obj) => (
        <FallingObject key={obj.id} deleteFn={() => deleteId(obj.id)}>
          <div className="w-32 shadow-lg h-10 opacity-35" style={{ backgroundColor: obj.color }} />
        </FallingObject>
      ))}
    </div>
  );
}
