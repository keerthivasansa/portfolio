"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import HoverLink from "./components/hoverLink";
import Link from "next/link";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { HighlightText as Ht } from "./components/highlightText";
import { useState } from "react";
import { Ribbon } from "./components/Ribbon";
import { SkillFall } from "./components/skillFalls";
import FadeIn from "./components/animation/fadeIn";
import SlideIn from "./components/animation/slideIn";
import MovingBox from "./components/animation/movingBox";
import { firstProject } from "./data/projects";
import GlassyStars from "./components/glassyStars";
import { RESUME_LINK } from "./data/global";

export default function Dashboard() {
  const [ribbonActive, setRibbonActive] = useState(false);
  return (
    <>
      <GlassyStars />
      <main className="p-12 overflow-x-hidden">
        <SkillFall active={ribbonActive} />
        <div
          onMouseEnter={() => setRibbonActive(true)}
          onMouseLeave={() => setRibbonActive(false)}
          onClick={() => setRibbonActive(!ribbonActive)}
          className={`absolute top-0 right-16 transition-all z-[1000] ease-in-out duration-300 ${
            ribbonActive ? "translate-y-0" : "-translate-y-6 lg:-translate-y-14"
          }`}
        >
          <SlideIn delay={50} direction="top">
            <Ribbon />
          </SlideIn>
        </div>
        <div className="mt-6 lg:mt-12 lg:absolute top-40 right-40">
          <FadeIn delay={25}>
            <h1 className="text-4xl phone:text-5xl tablet:text-7xl font-bold">
              <p>
                <Ht>K</Ht>eerthi
              </p>
              <p className="mt-4">
                <Ht>V</Ht>asan
                <Ht>.</Ht>
              </p>
            </h1>
            <p className="mt-4 opacity-70">
              Software Engineer . Full Stack . DevOps
            </p>
          </FadeIn>
        </div>
        <div>
          <MovingBox />
        </div>
        <div className="mt-10 lg:pl-12 py-8 lg:absolute bottom-12 left-12">
          <FadeIn delay={25}>
            <section className="flex flex-col justify-start gap-8 mb-24 text-base lg:text-lg">
              <HoverLink href="/skills">Skills</HoverLink>
              <HoverLink
                href={`/projects/${firstProject.name.toLowerCase()}`}
                switchColor
              >
                Projects
              </HoverLink>
              <HoverLink href="/experience">Experience</HoverLink>
              <HoverLink
                href={RESUME_LINK}
                switchColor
              >
                Resume
              </HoverLink>
              <HoverLink href="/about" switchColor>
                About
              </HoverLink>
              <HoverLink href="/contact">Contact</HoverLink>
              <HoverLink
                href="https://www.linkedin.com/in/keerthivasansa"
                switchColor
              >
                Let&apos;s Connect
              </HoverLink>
            </section>
            <footer className="flex flex-row flex-wrap gap-8 items-center">
              <Link href="https://linkedin.com/in/keerthivasansa">
                <FontAwesomeIcon
                  icon={faLinkedin}
                  aria-label="LinkedIn"
                  size="xl"
                />
              </Link>
              <Link href="https://github.com/keerthivasansa">
                <FontAwesomeIcon
                  icon={faGithub}
                  aria-label="GitHub"
                  size="xl"
                />
              </Link>
              <a href="mailto:keerthivasansa@outlook.com">
                keerthivasansa@outlook.com
              </a>
            </footer>
          </FadeIn>

          <FadeIn delay={100}>
            <small className="mt-5 block opacity-70 text-white">
              Pull the top ribbon for a surprise
            </small>
          </FadeIn>
        </div>
      </main>
    </>
  );
}
