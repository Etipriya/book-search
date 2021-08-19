const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID!
    username: String!
    email: String!
    bookCount: Int
    savedBooks: [Book]
  }
  type Book {
    bookId: ID!
    authors: [String]
    description: String
    image: String
    link: String
    title: String!
  }
  type Auth {
    token: ID!
    user: User
  }
  input LoginInput {
    email: String!
    password: String!
  }
  input SignupInput {
    username: String!
    email: String!
    password: String!
  }
  input SaveBookInput {
    bookId: String!
    authors: [String]
    description: String!
    title: String!
    image: String
    link: String
  }
  type Query {
    me: User
  }
  type Mutation {
    login(input: LoginInput!): Auth
    addUser(input: SignupInput!): Auth
    saveBook(input: SaveBookInput!): User
    removeBook(bookId: ID!): User
  }
`;

module.exports = typeDefs;
