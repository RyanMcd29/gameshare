const { gql } = require('apollo-server-express');

const typeDefs = gql `
    type User {
        _id: ID!
        username: String
        email: String
        password: String
        userGames: [UserGames]
    }

    type UserGames {
        _id: ID
        title: String
        platform: String
        gameDetails: [GameLibrary]
        isBorrowedBy: User
        isRequestedBy: User
    }

    type GameLibrary {
        _id: ID!
        name: String!
        img: String!
        genres: [String]
        platforms: [String]
        release_date: String
    }

    type Auth {
        token: ID!
        user: User
    }

    type Query {
        availableGames: [User]
        user(username: String!): User
        gamelibrary: [GameLibrary]

        allGames: [UserGames]
        userGames(userId: ID): User
        borrowedGames(userId: ID): UserGames
    }


    type Mutation {
        addUser(username: String!, email: String!, password: String!): Auth
        login(email: String!, password: String!): Auth
        addGameToUserGames(gameId: ID, userId: ID, platform: String): UserGames
        
        addRequestorToGame(gameId: ID, userId: ID): UserGames
        addGameToRequested(gameId: ID, username: String! ): User
        
        addBorrowerToGame(gameId: ID, userId: ID): UserGames
        addGameToBorrowed(gameId: ID, username: String! ): User
        removeUserGame(gameId: ID, userId: ID): UserGames
        removeBorrowerFromGame(gameId: ID, userId: ID): UserGames        
        deleteUser(_id: ID!): User
    }
`;

module.exports = typeDefs;