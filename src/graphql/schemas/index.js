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

  enum OrderDirection {
    ASC
    DESC
  }

  input Pagination {
    limit: Int
    offset: Int
  }

  input Order {
    field: String
    direction: OrderDirection
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
    roleId: String
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
    role: Role
    emergency: UserEmergency
    medicalRecord: UserMedicalRecord
    technicalRecord: UserTechnicalRecord
  }

  type UserEmergency {
    id: ID
    userId: Int
    contactPhone: String
    contactName: String
    contactRelationship: String
    medicalSystem: String
    medicalAgreement: String
    medicalInsurance: String
  }

  type UserTechnicalRecord {
    id: ID
    userId: Int
    training: String
    trainingDescription: String
    club: String
  }

  type UserMedicalRecord {
    id: ID
    userId: Int
    bloodType: String
    lesion: String
    lesionDescription: String
    trauma: String
    traumaDescription: String
    allergy: String
    allergyDescription: String
    anotherDisease: String
    takeMedications: String
  }

  type Role {
    id: ID
    name: String
    position: String
    state: String
  }
`;

export default typeDefs;
