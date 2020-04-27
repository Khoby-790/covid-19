import {ApolloClient} from 'apollo-client';
import {HttpLink} from 'apollo-link-http';
import {InMemoryCache} from 'apollo-cache-inmemory';

const BASE_URL = 'https:/covid19-graphql.netlify.app';
const httpLink = new HttpLink({
  uri: BASE_URL,
});

const cache = new InMemoryCache();

const client = new ApolloClient({
  link: httpLink,
  cache,
});

export default client;
