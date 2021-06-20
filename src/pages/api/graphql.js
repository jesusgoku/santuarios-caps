import { ApolloServer, gql } from 'apollo-server-micro';
import typeDefs from '@app/graphql/schemas';
import resolvers from '@app/graphql/resolvers';

const apolloServer = new ApolloServer({ typeDefs, resolvers });
const handler = apolloServer.createHandler({ path: '/api/graphql' });

const config = {
  api: {
    bodyParser: false,
  },
};

export { handler as default, config };
