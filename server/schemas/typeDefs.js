const { gql } = require('apollo-server-express');

const typeDefs = gql `
    type User {
        _id: ID!
        username: String
        email: String
        password: String
        userGames: [GameLibrary]
        borrowedGames: [GameLibrary]
    }

    type UserGames {
        _id: ID!
        title: String
        platform: String
        gameDetails: [GameLibrary]
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
        userGames(username: String!): User
        gameRequests: [GameRequest!]
        gameRequestsByUser(userId: String!): [GameRequest!]!
    }


    type Mutation {
        addUser(username: String!, email: String!, password: String!): Auth
        login(email: String!, password: String!): Auth
        addGamesFromLibrary(gameID: [String], username: String! ): User
        deleteUser(_id: ID!): User
        deleteGame(_id: ID!): UserGames!
    }
`;

module.exports = typeDefs;