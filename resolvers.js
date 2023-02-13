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
    users: async () => await User.find({}),
    user: async (_, { _id }) => await User.findOne({ _id }), //users.find((user) => user._id === _id),
    quotes: async () => await Quote.find({}).populate("by", "_id fullname"),
    singleuserquote: async (_, { by }) => await Quote.find({ by }), //quotes.filter((quote) => quote.by === by),
  },
  User: {
    quotes: async (user) => await Quote.find({ by: user._id }), // quotes.filter((quote) => quote.by === user._id),
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
    updateQuote: async (_, args) => {
      const { _id } = args;
      const { name } = args.quote;
      const quote = await Quote.findByIdAndUpdate(_id, { name }, { new: true });
      return "Quote updated successfully";
    },
    // updateQuote: async (_, { quoteId, userQuote }) => {
    //   const { name } = userQuote.quote;
    //   const quote = await Quote.findByIdAndUpdate(
    //     quoteId,
    //     { name },
    //     { new: true }
    //   );
    //   return "Quote updated successfully";
    // },
    deleteQuote: async (_, { _id }) => {
      await Quote.findByIdAndDelete(_id);

      return "Quote deleted successfully";
    },
  },
};
