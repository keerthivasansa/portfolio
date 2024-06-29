import { skills } from "../data/skills";

export function SkillChip({ name }: { name: string }) {
  const skill = skills[name];

  return skill ? (
    <span
      style={{
        border: `2px solid ${skill.dark ? "white" : "transparent"}`,
        backgroundColor: skill.color,
        color: skill.dark ? "white" : "black",
      }}
      className="px-6 py-2 rounded-lg font-semibold"
    >
      {name}
    </span>
  ) : (
    <p>Missing {name}</p>
  );
}
