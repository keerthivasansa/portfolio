import { SkillChip } from "../components/skill";

function SkillsPage() {
  const professional = [
    "React",
    "NextJS",
    "Django",
    "Python",
    "Golang",
    "Typescript",
    "MySQL",
    "SQL",
    "Strapi",
    "Express",
    "APIs",
    "AWS",
    "Javascript",
    "Git"
  ];

  const personal = [
    "Svelte",
    "TailwindCSS",
    "Tensorflow",
    "MongoDB",
    "Java",
    "Spring Boot",
    "Kotlin",
    "Mobile Dev",
  ];

  return (
    <div className="px-14 py-12">
      <h1 className="text-4xl font-bold">Skills</h1>
      <div className="my-14">
        <h5 className="text-xl font-semibold">Professional Experience</h5>
        <p className="text-md my-2 opacity-85">
          Used in internships, freelance - Tested Production Grade Code.
        </p>
        <div className="flex flex-row gap-4 flex-wrap my-6">
          {professional.map((skill) => (
            <SkillChip name={skill} key={skill} />
          ))}
        </div>
      </div>
      <div className="my-40">
        <h5 className="text-xl font-semibold">Project Experience</h5>
        <p className="text-md my-2 opacity-85">Used in personal projects</p>
        <div className="flex flex-row gap-4 my-6">
          {personal.map((skill) => (
            <SkillChip name={skill} key={skill} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default SkillsPage;
