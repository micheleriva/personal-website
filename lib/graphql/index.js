import { useMemo } from 'react';
import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client';

const { GRAPHCMS_ENDPOINT, GRAPHCMS_TOKEN } = process.env;

let apolloClient;

export function createApolloClient(auth = false) {
  const headers = auth ? { authorization: `Bearer ${GRAPHCMS_TOKEN}` } : {};

  return new ApolloClient({
    ssrMode: typeof window === 'undefined',
    link: new HttpLink({
      uri: GRAPHCMS_ENDPOINT,
    }),
    cache: new InMemoryCache(),
    headers,
  });
}

export function initApollo(initialState = null) {
  const client = apolloClient || createApolloClient();

  if (initialState) {
    const existingCache = client.extract();
    client.cache.restore({ ...existingCache, ...initialState });
  }

  if (typeof window === 'undefined') {
    return client;
  }

  if (!apolloClient) {
    apolloClient = client;
  }

  return client;
}

export function useApollo(initialState) {
  return useMemo(() => initApollo(initialState), [initialState]);
}
