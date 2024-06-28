import { projectData } from "../data/projects";
import { useRouter } from "next/router";

export default function ProjectIndex() {
  const router = useRouter();
  const firstProject = projectData[0].name.toLowerCase();
  router.push(`/projects/${firstProject}`)
  return <></>
}