import { skills } from "../data/skills";

export function SkillChip({ name }: { name: string }) {
  const skill = skills[name];

  return skill ? (
    <span
      style={{
        border: `2px solid ${skill.border || "transparent"}`,
        backgroundColor: skill.color,
        color: skill.font || "white",
      }}
      className="px-12 py-3 rounded-lg"
    >
      {name}
    </span>
  ) : (
    <p>Missing skill</p>
  );
}
