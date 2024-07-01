"use client";
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
