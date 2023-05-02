// TODO: finish this and test the code below
const { User, GameLibrary, UserGames } = require('../models');
// const { AuthenticationError } = require('apollo-server-express');
// const { signToken } = require('../utils/auth');

const resolvers = {
    // users: async () => {
    //     return User.find();
    // },

    // userById: async (parent, args) => {
    //     const { _id } =
    // },

    // games: async (parent, args) => {
    //     const { _id, username } = args;

    //     if (_id) {
    //         return Game.findById(_id);
    //     } else if (username) {
    //         return Game.find({ borrower: username });
    //     } else {
    //         return Game.find();
    //     }
    // },

    Query: {
        gamelibrary: async () => {
            return await GameLibrary.find();
        },

    }

    
}

module.exports = resolvers;