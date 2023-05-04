// TODO: finish this and test the code below
const { User } = require('../models');
const { AuthenticationError } = require('apollo-server-express');
const { signToken } = require('../utils/auth');

const resolvers = {
    Query: {
    users: async () => {
      return User.find();
    },
    user: async (parent, { userName }) => {
      return User.findOne({ userName });
    },

// users: async () => {
//     return User.find();
// },

//     userById: async (parent, args) => {
//         const { _id } =
//     },

//     games: async (parent, args) => {
//         const { _id, userName } = args;

//         if (_id) {
//             return Game.findById(_id);
//         } else if (userName) {
//             return Game.find({ borrower: userName });
//         } else {
//             return Game.find();
//         }
//     },

    },

    Mutation: {
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
    }
    
}

module.exports = resolvers;