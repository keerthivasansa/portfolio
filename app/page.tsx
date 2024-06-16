"use client";

import Image from "next/image";
import HoverLink from "./components/hoverLink";
import iconLinkedin from "../public/icons/linked-in.png";
import iconGithub from "../public/icons/github.png";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'

export default function Home() {
  return (
    <main>
      <div className="bg-primary text-white rounded-br-2xl w-fit pl-12 py-12 pr-48">
        <h1 className="text-4xl font-black">Keerthi Vasan S A</h1>
        <p className="mt-8">Software Engineer</p>
      </div>
      <Link href="https://resume.keerthivasan.tech" prefetch>
        <button className="bg-primary text-white px-12 py-3 rounded-xl absolute top-4 right-4">
          Resume
        </button>
      </Link>
      <div className="absolute bottom-12 left-16">
        <section className="flex flex-col justify-start gap-10 mb-24 text-xl">
          <HoverLink>Skills</HoverLink>
          <HoverLink switchColor>Projects</HoverLink>
          <HoverLink>Experience</HoverLink>
          <HoverLink switchColor>About</HoverLink>
          <HoverLink>Contact</HoverLink>
          <HoverLink switchColor>Let&apos;s Connect</HoverLink>
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
