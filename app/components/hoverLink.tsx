"use client"
import React, { useState } from "react";

interface HoverLinkProps extends React.PropsWithChildren {
    switchColor ?: boolean;
    href: string
}

export default function HoverLink({ children, switchColor, href }: HoverLinkProps) {
  const [active, setActive] = useState(false);

  return (
    <div className="flex flex-row gap-4 items-center justify-start">
      <div
        className={`bg-accent rounded-full -ml-4 transition-all ease-in-out duration-300 ${
          active ? "w-3 h-3 block" : "w-0 h-0"
        }`}
      ></div>
      <a
        href={href}
        onMouseEnter={() => setActive(true)}
        onMouseLeave={() => setActive(false)}
      >
        {children}
      </a>
    </div>
  );
}
