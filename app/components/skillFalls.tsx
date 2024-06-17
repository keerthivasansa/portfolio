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
  const [curr, setCurr] = useState<string[]>([]);
  const [timer, setTimer] = useState<NodeJS.Timeout | null>(null);

  function addSkill() {
    const index = Math.floor(getRandValue(0, allSkills.length));
    setCurr((arr) => [...arr, allSkills[index]]);
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
      {curr.map((sk, index) => (
        <FloatingSkill key={index} skillName={sk} />
      ))}
    </>
  );
}
