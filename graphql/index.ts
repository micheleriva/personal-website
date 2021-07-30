import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: process.env.GRAPHCMS_ENDPOINT,
  cache: new InMemoryCache(),
});

export default client;
