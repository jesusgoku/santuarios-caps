import {
  GraphQLDateTime as DateTime,
  GraphQLDate as Date,
} from 'graphql-iso-date';

import { newsList, newsItem } from './newsResolver';
import { userList, userItem } from './userResolver';

const resolvers = {
  Date,
  DateTime,
  Query: {
    newsList,
    newsItem,

    userList,
    userItem,
  },
};

export default resolvers;
