import { ApolloClient } from 'apollo-client';
import { RestLink } from 'apollo-link-rest';
import { InMemoryCache } from 'apollo-cache-inmemory';
import fetch from 'isomorphic-unfetch';
import PolyfillHeaders from 'fetch-headers';

let apolloClient = null;

if (!process.browser) {
  global.fetch = fetch;
}

if (global.Headers == null) {
  global.Headers = PolyfillHeaders;
}

const restLink = new RestLink({
  uri: 'https://api.harvestapp.com/api/v2/',
  headers: {
    Authorization:
      'Bearer 21708.pt.LQgdzjZnelFHt-8PrXDVzkyo8n00ItKqc0IWgzo0AJTIWzSI3ZtKBzNdfgxI6JkeaZkymg116AaU09p_IoIedQ',
    'Harvest-Account-ID': '265655',
  },
});

function create(initialState) {
  return new ApolloClient({
    connectToDevTools: process.browser,
    ssrMode: !process.browser, // Disables forceFetch on the server (so queries are only run once)
    link: restLink,
    cache: new InMemoryCache().restore(initialState || {}),
  });
}

export default function initApollo(initialState) {
  // Make sure to create a new client for every server-side request so that data
  // isn't shared between connections (which would be bad)
  if (!process.browser) {
    return create(initialState);
  }

  // Reuse client on the client-side
  if (!apolloClient) {
    apolloClient = create(initialState);
  }

  return apolloClient;
}
