"use client";
import ProjectCard from "@/app/components/projectCard";
import { projectData, projectMap } from "@/app/data/projects";
import { useSearchParams } from "next/navigation";

interface ProjectPageProps {
  params: {
    name: string;
  };
}

export default function ProjectPage({ params }: ProjectPageProps) {
  const { name } = params;
  const projectInfo = projectMap[name];
  if (!projectInfo) return <>No such project</>;
  const { project, index } = projectMap[name];
  return (
    <main>
      <h1 className="text-3xl font-bold p-12 px-14">Projects | {index}</h1>
      <ProjectCard project={project} index={index} />
    </main>
  );
}
