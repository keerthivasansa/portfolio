import React from "react";

interface SlidingSectionProps extends React.PropsWithChildren {
    show: boolean;
}
export default function SlidingSection({ show, children }: SlidingSectionProps) {
  return <section
    className="bg-blue-800 absolute top-0 left-0 w-full h-full text-white p-12 flex-grow overflow-auto ease-linear transition-all duration-300"
    style={{ translate: show ? "0" : "100%" }}
  >
    {children}
  </section>;
}
