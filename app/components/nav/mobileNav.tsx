import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavProps } from "./desktopNav";
import { faBars, faClose } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { useEffect, useState } from "react";
import FadeIn from "../animation/fadeIn";
import { usePathname } from "next/navigation";

function MobileNav({ routes }: NavProps) {
  const [expanded, setExpanded] = useState(false);
  const pathname = usePathname();
  useEffect(() => setExpanded(false), [pathname]);

  return (
    <>
      <div className="w-full pt-6 flex justify-between items-center px-6 py-4">
        <FontAwesomeIcon
          icon={faBars}
          size="lg"
          onClick={() => setExpanded(true)}
        />
        <p className="text-2xl">KV</p>
        <div className="opacity-0">.</div>
      </div>
      {expanded && (
        <div className="z-[100] opacity-95 bg-black w-screen h-screen absolute top-0 left-0">
          <FadeIn delay={50}>
            <FontAwesomeIcon
              onClick={() => setExpanded(false)}
              icon={faClose}
              size="xl"
              className="absolute top-8 right-8"
            />
            <div className="p-12 pt-24 text-lg flex flex-col gap-8">
              {routes.map((rt) => (
                <Link key={rt.name} href={`/${rt.name.toLowerCase()}`}>
                  {rt.name}
                </Link>
              ))}
            </div>
          </FadeIn>
        </div>
      )}
    </>
  );
}

export default MobileNav;
