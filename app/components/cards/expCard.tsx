import { Experience } from "@/app/data/types";
import Image from "next/image";
import { SkillChip } from "../skill";

interface ExperienceCardProps {
  exp: Experience;
  isLast: boolean;
}

function ExperienceCard(props: ExperienceCardProps) {
  const { exp, isLast } = props;

  return (
    <div
      key={exp.company}
      className="flex flex-col lg:flex-row gap-10 px-2 lg:px-10 mb-10"
    >
      <div className="flex flex-col items-center gap-10 justify-start">
        <div className="h-32 w-32 relative">
          <Image src={exp.logo} className="rounded-md" fill alt={exp.company} />
        </div>
        {!isLast && (
          <div className="w-[0.1rem] hidden lg:block opacity-70 flex-grow bg-white" />
        )}
      </div>
      <div className="lg:w-[40rem]">
        <div className="flex gap-4 flex-col lg:flex-row items-center lg:items-start justify-between">
          <h2 className="text-2xl font-bold">{exp.company}</h2>
          <span className="">{exp.duration}</span>
        </div>
        <p className="opacity-85 mt-6 text-center lg:text-start">{exp.role}</p>
        <ul className="pb-12">
          {exp.keyPoints.map((pt, ind) => (
            <li key={ind} className="mt-8">
              {pt}
            </li>
          ))}
        </ul>
        <div className="mb-12">
          <h4 className="font-semibold my-4">Skills Used: </h4>
          <div className="flex flex-row flex-wrap gap-3">
            {exp.skills.map((sk) => (
              <SkillChip name={sk} key={sk} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ExperienceCard;
