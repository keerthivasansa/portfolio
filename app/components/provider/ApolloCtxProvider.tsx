"use client";
import React, { ReactNode } from "react";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";

function ApolloCtxProvider({ children }: { children: ReactNode }) {
  const client = new ApolloClient({
    uri: "https://directus.keerthivasan.in/graphql",
    cache: new InMemoryCache(),
  });
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};

export default ApolloCtxProvider;