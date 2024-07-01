import { Experience } from "@/app/data/types";

interface ExperienceCardProps {
  exp: Experience;
  isLast: boolean;
}

function ExperienceCard(props: ExperienceCardProps) {
  const { exp, isLast } = props;

  return (
    <div key={exp.company} className="flex gap-10 px-10 mb-10">
      <div className="flex flex-col items-center gap-10 justify-start">
        <div className="h-32 w-32 bg-white rounded-md"></div>
        {!isLast && (
          <div className="w-[0.1rem] opacity-70 flex-grow bg-white"/>
        )}
      </div>
      <div className="lg:w-[40rem]">
        <div className="flex justify-between">
          <h2 className="text-2xl font-bold">{exp.company}</h2>
          <span>Jun - Oct, 2024</span>
        </div>
        <p className="opacity-85 mt-6">{exp.role}</p>
        <ul className="list-disc pb-12">
          {exp.keyPoints.map((pt, ind) => (
            <li key={ind} className="mt-8">
              {pt}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ExperienceCard;
