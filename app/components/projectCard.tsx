"use client";
import Image from "next/image";
import { Project } from "../data/types";
import { SkillChip } from "./skill";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import { capitalize } from "../utils";
import FadeIn from "./animation/fadeIn";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <div className="px-14 flex gap-24">
      <div className="flex flex-col">
        <FadeIn delay={50}>
          <div className="w-[45vw] aspect-video relative max-w-[50rem]">
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
                  icon={link.name === "github" ? faGithub : faLink}
                  aria-label={capitalize(link.name)}
                  size={"xl"}
                />
              </a>
            ))}
          </div>
        </FadeIn>
      </div>
      <div>
        <FadeIn delay={150}>
          <span className="font-semibold mb-8 block">Skills used: </span>
          <div className="flex flex-row gap-4 flex-wrap">
            {project.skills.map((sk) => (
              <SkillChip name={sk} key={sk} />
            ))}
          </div>
        </FadeIn>
        <FadeIn delay={150}>
          <span className="font-semibold mb-8 mt-48 block">
            Key Highlights:
          </span>
          <ul className="list-disc gap-3">
            {project.highlights.map((hl, index) => (
              <li key={index} className="mb-8">
                {hl}
              </li>
            ))}
          </ul>
        </FadeIn>
      </div>
    </div>
  );
}
