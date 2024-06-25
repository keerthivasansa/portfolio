import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import ProjectCard from "../components/projectCard";
import { Project } from "../data/types";

export default function ProjectsPage() {
  const p: Project = {
    description: "on-demand anime streaming",
    name: "Animos",
    highlights: [
      "Designed directly under Unacademy's CTO during internship",
      "#2 in ProductHunt in its launch week",
    ],
    image:
      "https://camo.githubusercontent.com/73ad26b8ea538b9b809cf558d9de42d5bda9877039edc332a6eb42336c9bde0a/68747470733a2f2f696b2e696d6167656b69742e696f2f7538686575396a68712f4865616465725f42616e6e65722e706e67",
    skills: ["React", "NextJS", "Javascript", "Strapi", "Django"],
    links: [
      {
        name: "github",
        url: "https://www.github.com",
      },
      {
        name: "open",
        url: "https://www.twitter.com",
      },
    ],
  };
  return (
    <main>
      <h1 className="text-3xl font-bold p-12 px-14">Projects</h1>
      <ProjectCard project={p} />
    </main>
  );
}
