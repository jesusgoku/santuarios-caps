import { gql } from 'apollo-server-micro';

const typeDefs = gql`
  scalar DateTime

  type Query {
    newsList(pagination: Pagination, order: [Order]): [News]
    newsItem(id: ID!): News
  }

  input Pagination {
    limit: Int
    offset: Int
  }

  input Order {
    field: String
    direction: String
  }

  type News {
    id: ID
    type: String
    title: String
    content: String
    status: String
    createdBy: String
    updateBy: String
    createdAt: DateTime
    updatedAt: DateTime
  }
`;

export default typeDefs;
