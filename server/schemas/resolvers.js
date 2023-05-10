
const { User, UserGames, GameLibrary} = require('../models');
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
    userGames: async (parent, {username}) => {
      if (username) {
        const user = await User.findOne({username})
        .populate('userGames').populate('borrowedGames')

        return user
      };
    },
    // get all games

    allGames: async () => {
      return UserGames.find().populate('gameDetails').populate('isBorrowedBy')
    },

    // Get games borrowed by user
    borrowedGames: async (parent, {userId}) => {
      return UserGames.find({ isBorrowedBy: {$in: userId }})
      // .populate('gameDetails').populate('isBorrowedBy')
    },

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
    // add game to userGames
    addGameToUser: async (parent, {gameId, userId, platform}) => {
      const userGame = await UserGames.create({gameDetails: gameId, platform: platform},{new: true})
      // Update user games
      console.log(userGame[0]._id)
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


    addGamesFromLibrary: async (parent, {username, gameId} ) => {
      return User.findOneAndUpdate(
        { username: username }, 
        { $push: { userGames: {$each: gameId }} },
        { new: true }
      );
    },

    // Todo: Add game to borrowed games
    addGameToBorrowed: async (parent, {username, gameId}) => {
      return User.findOneAndUpdate({ username: username },
      { $push: { borrowedGames: gameId}},
      {
        new: true,
      })
    },
    // Todo: Remove game from borrowed games
    removeBorrowerFromGame: async (parent, {gameId, userId}) => {
      return UserGames.findOneAndUpdate(
        { _id: gameId },
        {$pull: {isBorrowedBy: userId}}
        {new: true})
    },

    // removeGameFromBorrowed: async (parent, {username, gameId}) => {
    //   return User.findOneAndUpdate({ username: username },
    //   { $pull: { borrowedGames: gameId}},
    //   {
    //     new: true,
    //   })
    // },
    // Todo: Add remove game from library
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

    // removeGameFromOwned: async (parent, {username, gameId}) => {
    //   return User.findOneAndUpdate({ username: username },
    //   { $pull: { userGames: gameId}},
    //   {
    //    new: true
    //   })
    // },


    // addGamesToUser : async (parent, { gamesToAdd }) => {
    //   console.log(gamesToAdd)
    // }
    // createGameRequest: async (_, { fromUser, toUser, game }) => {
    //   const request = new GameRequests({ fromUser, toUser, game, status: 'pending' });
    //   await request.save();
    //   return request;
    // }


  },
};

module.exports = resolvers;
