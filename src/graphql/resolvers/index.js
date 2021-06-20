import { GraphQLDateTime as DateTime } from 'graphql-iso-date';

import News from '@app/models/News';

const resolvers = {
  DateTime,
  Query: {
    async news() {
      return News.findAll();
    },
  },
};

export default resolvers;
