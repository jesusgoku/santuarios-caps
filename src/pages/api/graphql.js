import { ApolloServer, gql } from 'apollo-server-micro';
import { verify } from 'jsonwebtoken';
import { promisify } from 'util';

import typeDefs from '@app/graphql/schemas';
import resolvers from '@app/graphql/resolvers';

const verifyAsync = promisify(verify);
const PUBLIC_KEY = Buffer.from(process.env.JWT_BASE64_PUBLIC_KEY, 'base64');

async function context({ req }) {
  const token = (req.headers.authorization || '').substr(7);

  if (!token) return {};

  try {
    const { user } = await verifyAsync(token, PUBLIC_KEY);

    return { user };
  } catch (err) {
    return {};
  }
}

const apolloServer = new ApolloServer({ typeDefs, resolvers, context });
const handler = apolloServer.createHandler({ path: '/api/graphql' });

const config = {
  api: {
    bodyParser: false,
  },
};

export { handler as default, config };
