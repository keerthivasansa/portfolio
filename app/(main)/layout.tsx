import React from "react";
import NavBar from "../components/navBar";

export default function MainLayout({ children }: React.PropsWithChildren) {
  return (
    <>
      <NavBar />
      <main className="px-10 mt-4">{children}</main>
    </>
  );
}
