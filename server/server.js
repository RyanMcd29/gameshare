const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const path = require('path');
const { authMiddleware } = require('./utils/auth');

const { typeDefs, resolvers } = require('./schemas');
const db = require('./config/connection');

// const routes = require('./routes');

const PORT = process.env.PORT || 3001;
const app = express();

// TODO: Uncomment once you have built the queries and mutations in the client folder
// const server = new ApolloServer({
//     typeDefs,
//     resolvers,
// });

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '../client/build')));
}

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

//TODO: Uncomment once we have built the queries and mutations in the client folder
// const startApolloServer = async (typeDefs, resolvers) => {
//     await server.start();
//     server.applyMiddleware({ app });
    
//     db.once('open', () => {
//       app.listen(PORT, () => {
//         console.log(`API server running on port ${PORT}!`);
//         console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
//       })
//     })
// };





//TODO: Comment out this code once we have built out queries and mutations in the client folder
db.once('open', () => {
    app.listen(PORT, () => console.log(`Now listening on localhost: ${PORT}`));
});
  
// Uncomment when we have built queries and mutations
// startApolloServer(typeDefs, resolvers);