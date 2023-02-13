import { ApolloServer, gql } from "apollo-server";
import { ApolloServerPluginLandingPageGraphQLPlayground } from "apollo-server-core";

import typeDef from "./schemagql.js";
import mongoose from "mongoose";
import { DB_URL, JWT_SERCRET } from "./config.js";

mongoose.set("strictQuery", false);

mongoose
  .connect(DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((data) => {
    console.log("Database Successfully Connected...");
  })
  .catch((e) => {
    console.log("Something Went Wrong...", e);
  });

import "./models/User.js";
import "./models/Quote.js";

import { resolvers } from "./resolvers.js";
import jwt from "jsonwebtoken";

const context = ({ req }) => {
  const { authorization } = req.headers;
  if (authorization) {
    const { userId } = jwt.verify(authorization, JWT_SERCRET);
    return { userId };
  }
};

const server = new ApolloServer({
  typeDefs: typeDef,
  resolvers: resolvers,
  context,
  plugins: [ApolloServerPluginLandingPageGraphQLPlayground()],
});

server.listen().then(({ url }) => {
  console.log(`Server is running at ${url}`);
});
