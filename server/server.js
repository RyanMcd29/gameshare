//--- Modules and Packages ---//
const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const path = require('path');
const { authMiddleware } = require('./utils/auth');

//--- Imports type definitions and resolvers from the schemas file ---//
const { typeDefs, resolvers } = require('./schemas');

//--- Imports the database connection ---//
const db = require('./config/connection');

//--- Set the port number for the server ---//
const PORT = process.env.PORT || 3001;

//--- Initialises a new Express application ---//
const app = express();

//--- Creates a new ApolloServer instance ---//
const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: authMiddleware,
});

//--- Midderware to parse incoming requests ---//
// Will- Changed this to false! 3:40pm 07/05/2023 // Changed-back 04:01
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '../client/build')));
}


//--- Defines a route for the home page ---//
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

//--- Starts the Apollo Server and listen for connections ---//
const startApolloServer = async (typeDefs, resolvers) => {
    await server.start();
    server.applyMiddleware({ app });
    
    db.once('open', () => {
      app.listen(PORT, () => {
        console.log(`API server running on port ${PORT}!`);
        console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
      })
    })
};


startApolloServer(typeDefs, resolvers);