import { gql } from 'apollo-server';

export const typeDefs = gql`
  type Mutation {
    addManager(data: ManagerAddInput!): Manager
    addClient(data: ClientAddInput!, managerId: ID!): Client
    addCar(data: CarAddInput!, clientId: ID!): Car
  }

  type Query {
    managers: [Manager]!
    clients: [Client]!
    cars: [Car]!
  }

  input ManagerAddInput {
    name: String!
    phone: String!
    email: String!
  }

  input ClientAddInput {
    name: String!
    phone: String!
    email: String!
  }

  input CarAddInput {
    model: String!
  }

  type Manager {
    id: ID!
    name: String!
    phone: String!
    email: String!
    clients: [Client]
  }

  type Client {
    id: ID!
    name: String!
    phone: String!
    email: String!
    manager: Manager
    cars: [Car]!
  }

  type Car {
    id: ID!
    model: String!
    owner: Client!
  }
`;
