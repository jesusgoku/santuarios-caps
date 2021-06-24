import {
  GraphQLDateTime as DateTime,
  GraphQLDate as Date,
} from 'graphql-iso-date';

import { requireAuth, requireRoles } from './highOrderResolver';
import { login, profile } from './authResolver';
import { newsList, newsItem } from './newsResolver';
import { userList, userItem } from './userResolver';

const requireAtLeastMonitorRole = requireRoles(['3', '4', '5']);

const resolvers = {
  Date,
  DateTime,
  Query: {
    profile: requireAuth(profile),

    newsList,
    newsItem,

    userList: requireAuth(requireAtLeastMonitorRole(userList)),
    userItem: requireAuth(requireAtLeastMonitorRole(userList)),
  },
  Mutation: {
    login,
  },
};

export default resolvers;
