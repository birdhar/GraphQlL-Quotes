import { quotes, users } from "./fakedb.js";
import { randomBytes } from "crypto";
import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { JWT_SERCRET } from "./config.js";

const User = mongoose.model("User");
const Quote = mongoose.model("Quote");

export const resolvers = {
  Query: {
    users: () => users,
    user: (_, { _id }) => users.find((user) => user._id === _id),
    quotes: () => quotes,
    singleuserquote: (_, { by }) => quotes.filter((quote) => quote.by === by),
  },
  User: {
    quotes: (user) => quotes.filter((quote) => quote.by === user._id),
  },

  Mutation: {
    signupUser: async (_, { userNew }) => {
      const user = await User.findOne({
        email: userNew.email,
      });
      if (user) {
        throw new Error("User already exists");
      }
      const hashPassword = await bcrypt.hash(userNew.password, 12);

      const newUser = new User({
        ...userNew,
        password: hashPassword,
      });
      return await newUser.save();
    },
    signinUser: async (_, { userSignIn }) => {
      const user = await User.findOne({ email: userSignIn.email });

      if (!user) {
        throw new Error("User does not exists with this email");
      }

      const matchPass = await bcrypt.compare(
        userSignIn.password,
        user.password
      );
      if (!matchPass) {
        throw new Error("Email or password is invalid");
      }

      const token = jwt.sign(
        {
          userId: user._id,
        },
        JWT_SERCRET
      );

      return { token };
    },
    createQuote: async (_, { name }, { userId }) => {
      if (!userId) {
        throw new Error("You have to to log in first");
      }

      const newQuote = new Quote({
        name,
        by: userId,
      });
      await newQuote.save();

      return "Quote created successfully";
    },
  },
};
