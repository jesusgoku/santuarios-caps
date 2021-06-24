import { gql } from 'apollo-server-micro';

const typeDefs = gql`
  scalar Date
  scalar DateTime

  type Query {
    profile: User

    newsList(pagination: Pagination, order: [Order]): [News]
    newsItem(id: ID!): News

    userList(pagination: Pagination, order: [Order]): [User]
    userItem(id: ID!): User
  }

  type Mutation {
    login(username: String!, password: String!): Login
  }

  input Pagination {
    limit: Int
    offset: Int
  }

  input Order {
    field: String
    direction: String
  }

  type Login {
    token: String
    user: User
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

  type User {
    id: ID
    idRole: String
    username: String
    email: String
    name: String
    lastname: String
    rut: String
    phone: String
    city: String
    commune: String
    address: String
    birthday: Date
    nationality: String
    occupation: String
    infoStatus: Int
    createdAt: DateTime
    updatedAt: DateTime
  }
`;

export default typeDefs;
