import { GraphQLDateTime as DateTime } from 'graphql-iso-date';

const resolvers = {
  DateTime,
  Query: {
    users(parent, args, context) {
      return [{ name: 'angelitolindo' }];
    },
  },
};

export default resolvers;
