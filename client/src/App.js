import React from 'react';
import {ApolloClient, InMemoryCache, ApolloProvider, createHttpLink} from '@apollo/client';
import {Routes, Route} from 'react-router-dom';
import { setContext } from '@apollo/client/link/context';
import { AnimatePresence } from 'framer-motion';
import { useLocation } from "react-router";
import { GameProvider } from './utils/GameContext';

// Styling
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

// Components
import Header from './components/Header';
import Footer from './components/Footer';

// Components - Pages
import Welcome from './pages/Welcome';
import Home from './pages/Home';
import Login from './pages/login';
import Signup from './pages/signUp';
import Inbox from './pages/Inbox';
import Borrow from './pages/BorrowSearch'
import GamesList from './components/GamesList';



const httpLink = createHttpLink({
  uri: '/graphql',
});


// A request middleware that will attach the JWT token to every request as an 'authorization' header
const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem('id_token');
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});



function App() {

  const location = useLocation();

  return (
    <ApolloProvider client={client}>
      <GameProvider>
      <AnimatePresence mode='wait'> 
          <Routes key={location.pathname} location={location}>
              <Route 
                  path="/" 
                  element={
                  <div>
                    <Header />
                    <Welcome />
                  </div>}
              />
              <Route 
                  path="/homepage" 
                  element={
                  <div>
                    <Header />
                    <Home />
                  </div>}
                />
                <Route 
                  path="/login" 
                  element={
                  <div>
                    <Header />
                    <Login />
                  </div>}
                />
                <Route 
                  path="/signup" 
                  element={
                  <div>
                    <Header />
                    <Signup />
                  </div>}
                />
                <Route 
                  path="/signup" 
                  element={
                  <div>
                    <Header />
                    <Signup />
                  </div>}
                />
                <Route
                  path="/games"
                  element={
                  <div>
                    <Header />
                    <GamesList/>
                  </div>}
                />
                <Route
                  path="/borrow"
                  element={
                  <div>
                    <Header />
                    <Borrow />
                  </div>}
                />
                <Route 
                  path="/inbox" 
                  element={
                  <div>
                    <Header />
                    <Inbox />
                  </div>}
                />
          </Routes> 
      </AnimatePresence>
      </GameProvider>
    </ApolloProvider>

  );
}

export default App;