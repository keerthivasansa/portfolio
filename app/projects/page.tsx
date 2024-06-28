import ProjectCard from "../components/projectCard";
import { projectData } from "../data/projects";

export default function ProjectsPage() {
  const p = projectData[0];
  return (
    <main>
      <h1 className="text-3xl font-bold p-12 px-14">Projects</h1>
      <ProjectCard project={p} />
    </main>
  );
}
