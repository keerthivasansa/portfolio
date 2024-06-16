import React, { useState } from "react";

interface HoverLinkProps extends React.PropsWithChildren {
    switchColor ?: boolean;
}

export default function HoverLink({ children, switchColor }: HoverLinkProps) {
  const [active, setActive] = useState(false);

  return (
    <div className="flex flex-row gap-4 items-center justify-start">
      <div
        className={`${switchColor ? "bg-pop-orange" : "bg-secondary"} rounded-full -ml-4 transition-all ease-in-out duration-300 ${
          active ? "w-3 h-3 block" : "w-0 h-0"
        }`}
      ></div>
      <a
        href="#"
        onMouseEnter={() => setActive(true)}
        onMouseLeave={() => setActive(false)}
      >
        {children}
      </a>
    </div>
  );
}
