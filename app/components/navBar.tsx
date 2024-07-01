"use client";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { projectMap } from "../data/projects";
import { motion, useAnimate } from "framer-motion";
import Link from "next/link";

export default function NavBar() {
  const pathname = usePathname();
  const [active, setActive] = useState("");
  const [hover, setHover] = useState("");
  const [subIndex, setSubIndex] = useState(-1);

  function getActiveSegment() {
    const parts = pathname.split("/").slice(1);
    if (parts[0] == "projects" && parts.length > 1 && projectMap[parts[1]])
      setSubIndex(projectMap[parts[1]].index);
    else setSubIndex(-1);
    setActive(parts[0]);
  }

  function getAnimationVariant(route: string) {
    const path = route.toLowerCase();
    let variant = "inactive";
    if (active == path) variant = "active";
    else if (hover == path) variant = "hover";
    return variant;
  }

  const routes = [
    {
      name: "Skills",
    },
    {
      name: "Projects",
      sub: 4,
    },
    {
      name: "Experience",
    },
    {
      name: "About",
    },
    {
      name: "Contact",
    },
  ];

  useEffect(getActiveSegment, [pathname]);

  return (
    <div className="pl-10 pr-8 my-10 flex justify-between">
      <div className="h-8 flex align-bottom items-end font-semibold">
        {routes.map((rt) => (
          <div key={rt.name}>
            <motion.span
              initial="inactive"
              className="mr-8 cursor-pointer"
              onMouseEnter={() => setHover(rt.name.toLowerCase())}
              onMouseLeave={() => setHover("")}
              animate={getAnimationVariant(rt.name)}
              variants={{
                inactive: {
                  color: "rgba(255, 255, 255, 0.7)",
                  fontSize: "1rem",
                },
                active: {
                  color: "rgba(255, 255, 255, 1)",
                  fontSize: "1.5rem",
                },
                hover: {
                  color: "rgba(255, 255, 255, 0.85)",
                  fontSize: "1.15rem",
                },
              }}
            >
              <Link href={`/${rt.name.toLowerCase()}`}>{rt.name}</Link>
            </motion.span>
          </div>
        ))}
      </div>
      <Link
        href="https://storage.keerthivasan.tech/Keerthi%20Vasan%20S%20A%20-%20SWE%20-%20Resume.pdf"
        target="_blank"
      >
        <button
          style={{ backgroundColor: "rgb(198, 248, 177)" }}
          className="text-base text-black font-semibold px-4 py-2 rounded-lg"
        >
          Resume
        </button>
      </Link>
    </div>
  );
}
