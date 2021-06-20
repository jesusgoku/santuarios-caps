import { gql } from 'apollo-server-micro';

const typeDefs = gql`
  scalar DateTime

  type Query {
    users: [User!]!
  }

  type User {
    name: String
  }
`;

export default typeDefs;
