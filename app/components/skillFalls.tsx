import { useEffect, useState } from "react";
import FloatingSkill from "./floatingObject";
import { getRandValue } from "../utils";

export interface Skill {
  color: string;
  name: string;
  font?: string;
}

export function SkillFall({ active }: { active: boolean }) {
  const [curr, setCurr] = useState<Skill[]>([]);
  const [timer, setTimer] = useState<NodeJS.Timeout | null>(null);

  const skills: Skill[] = [
    {
      color: "blue",
      name: "React",
    },
    {
      color: "orange",
      name: "Svelte",
    },
    {
      color: "black",
      name: "NextJS",
    },
    {
      color: "red",
      name: "Angular",
    },
    {
      color: "yellow",
      font: "black",
      name: "Javascript",
    },
  ];

  function addSkill() {
    const index = Math.floor(getRandValue(0, skills.length));
    setCurr((arr) => [...arr, skills[index]]);
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
        <FloatingSkill key={index} skill={sk} />
      ))}
    </>
  );
}
