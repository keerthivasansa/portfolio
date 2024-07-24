"use client";

import { SkillChip } from "@/app/components/skill";
import { gql } from "@/lib/gql";
import { useQuery } from "@apollo/client";
import { useEffect } from "react";

const GET_SKILLS = gql(
  `query GetNestedProject{
    Projects {
      name
      skills {
        Skills_id {
          color
          id
        }
      }
      thumbnail
    }
  }
`
);

function SkillsPage() {
  const { data: skills, loading } = useQuery(GET_SKILLS);

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
    "Git",
  ];

  const personal = [
    "Svelte",
    "TailwindCSS",
    "Tensorflow",
    "MongoDB",
    "Java",
    "Spring Boot",
    "Kotlin",
    "Rust",
  ];

  useEffect(() => console.log(skills), [skills]);

  return (
    <div className="my-12 lg:my-20">
      <div>
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
      <div className="my-20 lg:my-40">
        <h5 className="text-xl font-semibold">Project Experience</h5>
        <p className="text-md my-2 opacity-85">Used in personal projects</p>
        <div className="flex flex-row flex-wrap gap-4 my-6">
          {personal.map((skill) => (
            <SkillChip name={skill} key={skill} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default SkillsPage;
