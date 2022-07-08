import { ApolloClient, ApolloLink, from } from '@apollo/client';
import { HttpLink } from '@apollo/client/link/http';
import { cache } from './cache';

export enum ClientName {
  Country = 'Country',
  Main = 'Main',
}

const mainLink = new HttpLink({ uri: import.meta.env.VITE_BASE_URL });

const authMiddleware = new ApolloLink((operation, forward) => {
  const { headers, token } = operation.getContext();
  operation.setContext({
    headers: {
      ...headers,
      ...(token && {
        authorization: `Bearer ${token}`,
      }),
    },
  });
  return forward(operation);
});

export const client = new ApolloClient({
  cache,
  link: from([authMiddleware, mainLink]),
  defaultOptions: {
    watchQuery: {
      notifyOnNetworkStatusChange: true,
    },
  },
  connectToDevTools: !import.meta.env.VITE_NODE_ENV,
});
