import { gql } from "apollo-server";

const typeDef = gql`
  type Query {
    users: [User]
    user(_id: ID!): User
    quotes: [QuoteWithName]
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

  type QuoteWithName {
    name: String
    by: IdAndName
  }

  type IdAndName {
    _id: String
    fullname: String
  }

  type Token {
    token: String
  }

  type Mutation {
    signupUser(userNew: UserInput!): User
    signinUser(userSignIn: UserSignInInput!): Token
    createQuote(name: String!): String
    updateQuote(_id: String!, quote: QuoteInput): String
    deleteQuote(_id: String!): String
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

  input QuoteInput {
    name: String!
  }
`;

export default typeDef;
