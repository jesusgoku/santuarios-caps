import {
  GraphQLDateTime as DateTime,
  GraphQLDate as Date,
} from 'graphql-iso-date';

import { login } from './authResolver';
import { newsList, newsItem } from './newsResolver';
import { userList, userItem } from './userResolver';

const resolvers = {
  Date,
  DateTime,
  Query: {
    login,

    newsList,
    newsItem,

    userList,
    userItem,
  },
};

export default resolvers;
