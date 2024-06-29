'use client'
import { projectData } from "@/app/data/projects";
import { useRouter } from "next/navigation";

export default function ProjectIndex() {
  const router = useRouter();
  const firstProject = projectData[0].name.toLowerCase();
  router.push(`/projects/${firstProject}`)
  return <></>
}