import ExperienceCard from "@/app/components/cards/expCard";
import { experiences } from "@/app/data/experience";

export default function ExpPage() {
  return (
    <main className="ml-4 lg:ml-24 lg:w-fit mt-20">
      {experiences.map((exp, index) => (
        <ExperienceCard
          key={index}
          exp={exp}
          isLast={index == experiences.length - 1}
        />
      ))}
    </main>
  );
}
