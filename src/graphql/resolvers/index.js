import { GraphQLDateTime as DateTime } from 'graphql-iso-date';

import { newsList, newsItem } from './newsResolver';

const resolvers = {
  DateTime,
  Query: {
    newsList,
    newsItem,
  },
};

export default resolvers;
