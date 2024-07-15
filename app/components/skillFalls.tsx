import { useEffect, useId, useState } from "react";
import FloatingSkill from "./floatingObject";
import { getRandValue } from "../utils";
import { allSkills } from "../data/skills";

export interface Skill {
  color: string;
  name: string;
  font?: string;
}

export function SkillFall({ active }: { active: boolean }) {
  const [curr, setCurr] = useState<{ id: string; name: string }[]>([]);
  const [timer, setTimer] = useState<NodeJS.Timeout | null>(null);

  function addSkill(limit: number) {
    const index = Math.floor(getRandValue(0, allSkills.length));
    const name = allSkills[index];
    const id = crypto.randomUUID();

    setCurr((arr) => {
      if (arr.length >= limit) return arr;
      else return [...arr, { id, name }];
    });
  }

  function deleteId(id: string) {
    setCurr((arr) => arr.filter((node) => node.id != id));
  }

  function spawnObjects() {
    const limit = window.screen.width / 15;
    const spawnRate = window.screen.width / 40;
    const nxt = Math.min(spawnRate, limit - curr.length);
    for (let i = 0; i < nxt; i++) addSkill(limit);
    console.log({ limit, curr: curr.length, nxt });
  }

  function setActive() {
    if (timer) return;
    spawnObjects();
    const timerId = setInterval(spawnObjects, 300);
    setTimer(timerId);
  }

  useEffect(() => {
    if (active) setActive();
    else if (timer) {
      clearInterval(timer);
      setTimer(null);
    }
  }, [active, timer]);

  return (
    <div className="overflow-hidden w-dvw z-[999] pointer-events-none h-dvh absolute top-0 left-0">
      {curr.map((sk) => (
        <FloatingSkill
          key={sk.id}
          deleteFn={() => deleteId(sk.id)}
          skillName={sk.name}
        />
      ))}
    </div>
  );
}
