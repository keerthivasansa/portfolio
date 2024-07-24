import type { Metadata } from "next";
import { Fira_Code } from "next/font/google";
import "./globals.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import AnimatePresence from "./components/animatePresence";
import createApolloClient from "@/lib/apollo";
import { ApolloProvider } from "@apollo/client";
config.autoAddCss = false;

const fira = Fira_Code({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Keerthi Vasan S A",
  description: "Portfolio website for Keerthi Vasan S A.",
};

const apolloClient = createApolloClient();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <body className={fira.className + " bg-deepSlate text-white"}>
        <ApolloProvider client={apolloClient}>
          <AnimatePresence>{children}</AnimatePresence>
        </ApolloProvider>
      </body>
    </html>
  );
}
