const { gql } = require('apollo-server-express');

const typeDefs = gql `
    type User {
        _id: ID!
        username: String
        email: String
        password: String
        userGames: [GameLibrary]
    }

    type UserGames {
        _id: ID
        title: String
        platform: String
        gameDetails: [GameLibrary]
        isBorrowedBy: User
    }

    type GameLibrary {
        _id: ID!
        name: String!
        img: String!
        genres: [String]
        platforms: [String]
        release_date: String
    }

    type GameRequest {
        _id: ID!
        fromUser: String
        toUser: String
        game: String
        status: String

    }

    type Auth {
        token: ID!
        user: User
    }

    type Query {
        users: [User]
        user(username: String!): User
        gamelibrary: [GameLibrary]

        allGames: [UserGames]
        userGames(username: String!): User
        borrowedGames(userId: ID): UserGames
    }


    type Mutation {
        addUser(username: String!, email: String!, password: String!): Auth
        login(email: String!, password: String!): Auth
        addGameToUser(gameId: ID, userId: ID, platform: String): UserGames
        
        addGamesFromLibrary(gameId: [ID], username: String! ): User
        addBorrowerToGame(gameId: ID, userId: ID): UserGames
        addGameToBorrowed(gameId: ID, username: String! ): User
        removeGameFromOwned(gameId: ID, username: String!): User
        removeGameFromBorrowed(gameId: ID, username: String!): User
        
        
        deleteUser(_id: ID!): User
        deleteGame(_id: ID!): UserGames!
    }
`;

module.exports = typeDefs;