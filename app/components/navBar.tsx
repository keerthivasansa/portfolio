'use client'
import MobileNav from "./nav/mobileNav";
import DesktopNav from "./nav/desktopNav";

export default function NavBar() {
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

  return window.screen.width < 620 ? (
    <MobileNav routes={routes} />
  ) : (
    <DesktopNav routes={routes} />
  );
}
