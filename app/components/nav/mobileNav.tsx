import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavProps } from "./desktopNav";
import { faBars, faClose } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { useEffect, useState } from "react";
import FadeIn from "../animation/fadeIn";
import { usePathname } from "next/navigation";
import { HighlightText } from "../highlightText";

function MobileNav({ routes }: NavProps) {
  const [expanded, setExpanded] = useState(false);
  const pathname = usePathname();
  useEffect(() => setExpanded(false), [pathname]);

  return (
    <div className="sticky top-0 left-0 z-[999]">
      <div className="sticky w-full pt-6 flex justify-between items-center px-6 py-4">
        <FontAwesomeIcon
          icon={faBars}
          size="lg"
          onClick={() => setExpanded(true)}
        />
        <p className="text-2xl font-semibold tracking-wider">
          K<HighlightText>V</HighlightText>
        </p>
        <div className="opacity-0">.</div>
      </div>
      {expanded && (
        <div className="opacity-90 bg-black w-screen h-screen absolute top-0 left-0">
          <FadeIn delay={50}>
            <FontAwesomeIcon
              onClick={() => setExpanded(false)}
              icon={faClose}
              size="xl"
              className="absolute top-8 right-8"
            />
            <div className="p-12 pt-24 text-lg flex flex-col gap-8">
              {routes.map((rt) => (
                <Link key={rt.name} href={rt.link}>
                  {rt.name}
                </Link>
              ))}
            </div>
          </FadeIn>
        </div>
      )}
    </div>
  );
}

export default MobileNav;
