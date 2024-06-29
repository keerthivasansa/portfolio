import ProjectCard from "@/app/components/projectCard";
import { projectData, projectMap } from "@/app/data/projects";

interface ProjectPageProps {
  params: {
    name: string;
  };
}

export function generateStaticParams() {
  const names = projectData.map((project) => {
    return {
      name: project.name.toLowerCase(),
    };
  });
  return names;
}

export default function ProjectPage({ params }: ProjectPageProps) {
  const { name } = params;
  const projectInfo = projectMap[name];
  if (!projectInfo) return <>No such project</>;
  const { project, index } = projectMap[name];
  return (
    <main>
      <h1 className="text-3xl font-bold p-12 px-14">Projects</h1>
      <ProjectCard project={project} index={index} />
    </main>
  );
}
