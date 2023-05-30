
const { User, UserGames, GameLibrary} = require('../models');
const { AuthenticationError } = require('apollo-server-express');
const { signToken } = require('../utils/auth');
const { model } = require('mongoose');

const resolvers = {
  Query: {
    allGames: async() => {
      return UserGames.find().populate('gameDetails').populate('isBorrowedBy')
    },

    user: async (parent, { username }) => {
      return User.findOne({ username: username });
    },

    userGames: async (parent, {userId}) => {
      if (userId) {
        const user = await User.findOne({ _id: userId })
        .populate({path: 'userGames',
                    populate: {path: 'gameDetails'},
      }).populate({path: 'userGames',
                    populate:  {path: 'isRequestedBy'},
})
        console.log("pracUser", user);
                    return user
      };
    },

    availableGames: async () => {
      return User.find().populate('userGames');
    },
    
    gamelibrary: async () => {
      return await GameLibrary.find();
    },

    // requestedGames: async (parent, {userId}) => {
    //   if (userId) {
    //     const user = await User.findOne({ _id: userId })
    //     .populate({path: 'userGames',
    //                 populate: {
    //                   path: 'gameDetails'
    //                 }})
    //     return user
    //   };
    // }
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

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const token = signToken(user);

      return { token, user };
    },

    addGameToUserGames: async (parent, {gameId, userId, platform}) => {
      const userGame = await UserGames.create(
        {gameDetails: gameId, platform: platform},
        {new: true}
      )
      // Update user games
      //console.log(userGame[0]._id)
      const newGameId = userGame[0]._id


      const user = await User.findOneAndUpdate(
        { _id: userId },
        { $addToSet: { userGames: newGameId}},
        { new: true }
      )

    return userGame
  },


    // Add borrower to game
    addBorrowerToGame: async (parent, {gameId, userId}) => {
      return UserGames.findOneAndUpdate(
        {_id: gameId},
        {$addToSet: { isBorrowedBy: userId } },
        {new : true}
      )
    },

    // Add requestor to game
    addRequestorToGame: async (parent, {gameId, userId}) => {
      return UserGames.findOneAndUpdate(
        {_id: gameId},
        {$addToSet: { isRequestedBy: userId } },
        {new : true}
      )
    },

    removeBorrowerFromGame: async (parent, {gameId, userId}) => {
      return UserGames.findOneAndUpdate(
        { _id: gameId },
        {$pull: {isBorrowedBy: userId}},
        {new: true})
    },


    removeUserGame: async (parent, { userId, gameId }) => {
      const game = await UserGames.findOneAndDelete(
        {_id: gameId },
        {new: true}
      )
      if (userId) {
          const user = await User.findOneAndUpdate(
            { _id: userId },
            { $pull: { userGames: gameId }}
          )
        }

      return game 
    }


  },
};

module.exports = resolvers;
