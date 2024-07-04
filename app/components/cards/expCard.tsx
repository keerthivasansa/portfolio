import { Experience } from "@/app/data/types";

interface ExperienceCardProps {
  exp: Experience;
  isLast: boolean;
}

function ExperienceCard(props: ExperienceCardProps) {
  const { exp, isLast } = props;

  return (
    <div key={exp.company} className="flex flex-col lg:flex-row gap-10 px-2 lg:px-10 mb-10">
      <div className="flex flex-col items-center gap-10 justify-start">
        <div className="h-32 w-32 bg-white rounded-md"></div>
        {!isLast && (
          <div className="w-[0.1rem] hidden lg:block opacity-70 flex-grow bg-white"/>
        )}
      </div>
      <div className="lg:w-[40rem]">
        <div className="flex gap-4 flex-col items-center justify-between">
          <h2 className="text-2xl font-bold">{exp.company}</h2>
          <span className="">Jun - Oct, 2024</span>
        </div>
        <p className="opacity-85 mt-6 text-center">{exp.role}</p>
        <ul className="pb-12">
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
