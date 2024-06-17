import type { Metadata } from "next";
import { Fira_Code } from "next/font/google";
import "./globals.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;

const fira = Fira_Code({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Keerthi Vasan S A",
  description: "Portfolio website for Keerthi Vasan S A.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={fira.className + " bg-deepSlate text-white"}>
        {children}
      </body>
    </html>
  );
}
