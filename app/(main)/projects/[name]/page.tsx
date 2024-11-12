import ProjectCard from "@/app/components/projectCard";
import { encodeName, projectData, projectMap } from "@/app/data/projects";

interface ProjectPageProps {
  params: {
    name: string;
  };
}

export function generateStaticParams() {
  const names = projectData.map((project) => {
    return {
      name: encodeName(project.name),
    };
  });
  return names;
}

export default function ProjectPage({ params }: ProjectPageProps) {
  const { name } = params;
  const projectInfo = projectMap[name];
  if (!projectInfo) return <>No such project</>;
  const { project, index } = projectMap[name];
  return <ProjectCard project={project} index={index} />;
}
