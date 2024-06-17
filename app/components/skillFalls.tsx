import { useEffect, useState } from "react";
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

  function addSkill() {
    const index = Math.floor(getRandValue(0, allSkills.length));
    const name = allSkills[index];
    setCurr((arr) => [
      ...arr,
      {
        name,
        id: `${name}-${arr.length}`,
      },
    ]);
  }

  function deleteId(id: string) {
    setCurr((arr) => arr.filter((node) => node.id != id));
  }

  function setActive() {
    if (timer) return;
    addSkill();
    const timerId = setInterval(addSkill, 1500);
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
    <>
      {curr.map((sk) => (
        <FloatingSkill
          key={sk.id}
          deleteFn={() => deleteId(sk.id)}
          skillName={sk.name}
        />
      ))}
    </>
  );
}
