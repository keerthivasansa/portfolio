"use client";
import MobileNav from "./nav/mobileNav";
import DesktopNav from "./nav/desktopNav";
import { firstProject } from "../data/projects";

export default function NavBar() {
  const routes = [
    {
      name: "Home",
      link: "/"
    },
    {
      name: "Skills",
      link: "/skills"
    },
    {
      name: "Projects",
      link: `/projects/${firstProject.name.toLowerCase()}`
    },
    {
      name: "Experience",
      link: "/experience"
    },
    {
      name: "About",
      link: "/about",
    },
    {
      name: "Contact",
      link: "/contact"
    },
  ];

  return (
    <>
      <div className="tablet:hidden">
        <MobileNav routes={routes} />
      </div>
      <div className="hidden tablet:block">
        <DesktopNav routes={routes} />
      </div>
    </>
  );
}
