import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import HoverLink from "../components/hoverLink";
import Link from "next/link";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { HighlightText as Ht } from "../components/highlightText";

export default function ProjectsPage() {
  
  return (
    <main>
      <div className="w-56 h-40 absolute -top-32 -right-4 bg-accent rotate-45 rounded-xl">
      </div>
      <div className="absolute top-40 right-40">
        <h1 className="text-7xl font-bold">
          <p>
            <Ht>K</Ht>eerthi
          </p>
          <p className="mt-4">
            <Ht>V</Ht>asan
          </p>
        </h1>
        <p className="mt-4 opacity-70">Software Engineer . Full Stack . DevOps</p>
      </div>
      <div className="pl-12 py-8 absolute bottom-12 left-12">
        <section className="flex flex-col justify-start gap-8 mb-24 text-lg">
          <HoverLink href="/skills">Skills</HoverLink>
          <HoverLink href="/projects" switchColor>
            Projects
          </HoverLink>
          <HoverLink href="/experience">Experience</HoverLink>
          <HoverLink href="/about" switchColor>
            About
          </HoverLink>
          <HoverLink href="contact">Contact</HoverLink>
          <HoverLink href="skills" switchColor>
            Let&apos;s Connect
          </HoverLink>
        </section>
        <footer className="flex flex-row gap-8 items-center">
          <Link href="https://linkedin.com/in/keerthivasansa">
            <FontAwesomeIcon icon={faLinkedin} size="xl" />
          </Link>
          <Link href="https://github.com/keerthivasansa">
            <FontAwesomeIcon icon={faGithub} size="xl" />
          </Link>
          <a href="mailto:keerthivasansa@outlook.com">
            keerthivasansa@outlook.com
          </a>
        </footer>
      </div>
    </main>
  );
}
