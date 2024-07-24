import { ApolloClient, InMemoryCache, gql } from "@apollo/client";

const createApolloClient = () => {
    return new ApolloClient({
        uri: "https://directus.keerthivasan.in/graphql",
        cache: new InMemoryCache(),
    });
};

export default createApolloClient;