"use client";
import Image from "next/image";
import { Project } from "../data/types";
import { SkillChip } from "./skill";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import {
  faArrowLeft,
  faArrowRight,
  faArrowUpRightFromSquare,
} from "@fortawesome/free-solid-svg-icons";
import { capitalize } from "../utils";
import FadeIn from "./animation/fadeIn";
import { encodeName, projectData } from "../data/projects";
import { useRouter } from "next/navigation";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  const router = useRouter();

  function navigateProject(amount: number) {
    let newIndex = amount + index;
    if (newIndex == projectData.length) newIndex = 0;
    else if (newIndex < 0) newIndex = projectData.length - 1;
    const navProj = encodeName(projectData[newIndex].name);
    router.push(`/projects/${navProj}`);
  }

  return (
    <div className="flex gap-12 lg:gap-24 flex-col lg:flex-row ">
      <div className="flex flex-col">
        <FadeIn delay={0}>
          <div className="w-full lg:w-[45vw] aspect-video relative max-w-[50rem]">
            <Image
              src={project.image}
              alt={project.name}
              className="rounded-xl aspect-video"
              fill
            />
          </div>
        </FadeIn>
        <FadeIn delay={0}>
          <h2 className="text-3xl font-bold mt-12 mb-4">{project.name}</h2>
          <p className="opacity-80 text-lg font-semibold">
            {project.description}
          </p>
          <div className="flex gap-6 mt-6">
            {project.links.map((link) => (
              <a href={link.url} target="_blank" key={link.name}>
                <FontAwesomeIcon
                  icon={
                    link.name === "github" ? faGithub : faArrowUpRightFromSquare
                  }
                  aria-label={capitalize(link.name)}
                  size={"xl"}
                />
              </a>
            ))}
          </div>
        </FadeIn>
        <div className="mt-16 z-10 w-full flex lg:flex-row fixed lg:relative lg:gap-12 lg:max-w-sm left-0 bottom-0">
          <button
            onClick={() => navigateProject(1)}
            className="w-full bg-slate-200 text-black border-2 border-black font-semibold px-6 py-3 lg:rounded-lg lg:rounded-0"
          >
            <FontAwesomeIcon icon={faArrowLeft} size="lg" />
            <span className="ml-4">Prev</span>
          </button>
          <button
            onClick={() => navigateProject(-1)}
            className="w-full flex-grow bg-slate-200 text-black border-2 border-black lg:border-0 font-semibold px-6 py-3 lg:rounded-lg"
          >
            <span className="mr-4">Next</span>
            <FontAwesomeIcon icon={faArrowRight} size="lg" />
          </button>
        </div>
      </div>
      <div>
        <FadeIn delay={0}>
          <span className="font-semibold mb-8 block">Skills used: </span>
          <div className="flex flex-row gap-4 flex-wrap">
            {project.skills.map((sk) => (
              <SkillChip name={sk} key={sk}/>
            ))}
          </div>
        </FadeIn>
        <FadeIn delay={0}>
          <div className="mb-24 lg:mb-0">
            <span className="font-semibold mt-14 mb-6 lg:mt-48 block">
              Key Highlights:
            </span>
            <ul className="gap-3">
              {project.highlights.map((hl, index) => (
                <li key={index} className="mb-8">
                  {hl}
                </li>
              ))}
            </ul>
          </div>
        </FadeIn>
      </div>
    </div>
  );
}
