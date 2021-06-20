import { gql } from 'apollo-server-micro';

const typeDefs = gql`
  scalar DateTime

  type Query {
    news: [News]
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
