import { GraphQLDateTime as DateTime } from 'graphql-iso-date';

import News from '@app/models/News';

const resolvers = {
  DateTime,
  Query: {
    users(parent, args, context) {
      return [{ name: 'angelitolindo' }];
    },
    async news() {
      return News.findAll();
    },
  },
};

export default resolvers;
