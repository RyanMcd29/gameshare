const { User } = require('../models');
const { GameRequests } = require('../models');
const { AuthenticationError } = require('apollo-server-express');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    users: async () => {
      return User.find();
    },
    user: async (parent, { username }) => {
      return User.findOne({ username });
    },
  },

  Query: {
      gamelibrary: async () => {
          return await GameLibrary.find();
      },

  },
  
  Mutation: {
    addUser: async (parent, { username, email, password }) => {
      const user = await User.create({ username, email, password });
      const token = signToken(user);
      return { token, user };
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });
      if (!user) {
        throw new AuthenticationError('No user found with this email address');
      }

      // const correctPw = await user.isCorrectPassword(password);

      // if (!correctPw) {
      //   throw new AuthenticationError('Incorrect credentials');
      // }

      const token = signToken(user);

      return { token, user };
    },
    createGameRequest: async (_, { fromUser, toUser, game }) => {
      const request = new GameRequests({ fromUser, toUser, game, status: 'pending' });
      await request.save();
      return request;
    }


  },
};

module.exports = resolvers;
