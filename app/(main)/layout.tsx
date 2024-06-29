import React from "react";
import NavBar from "../components/navBar";

export default function MainLayout({ children }: React.PropsWithChildren) {
  return (
    <>
      <NavBar />
      {children}
    </>
  );
}
