import { gql } from "apollo-server";

const typeDef = gql`
  type Query {
    users: [User]
    user(_id: ID!): User
    quotes: [Quote]
    singleuserquote(by: ID!): [Quote]
  }

  type User {
    _id: ID
    fullname: String!
    email: String!
    phone: String!
    username: String!
    quotes: [Quote]
  }

  type Quote {
    name: String
    by: ID
  }

  type Token {
    token: String
  }

  type Mutation {
    signupUser(userNew: UserInput!): User
    signinUser(userSignIn: UserSignInInput!): Token
    createQuote(name: String!): String
  }

  input UserInput {
    fullname: String!
    email: String!
    password: String!
  }

  input UserSignInInput {
    email: String!
    password: String!
  }
`;

export default typeDef;
