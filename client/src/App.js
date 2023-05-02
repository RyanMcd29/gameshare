import React from 'react';
import {ApolloClient, InMemoryCache, ApolloProvider, createHttpLink} from '@apollo/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { setContext } from '@apollo/client/link/context';

import './App.css';
import SearchContainer from './components/searchContainer';

// Pages
import Home from './pages/Home';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
// import Header from './pages/Header';
// import Footer from './pages/Footer';

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
  return (
    <ApolloProvider client={client}>
      <Router>

            <Routes>
              <Route 
                path="/login" 
                element={<Login />}
              />
               <Route 
                path="/signup" 
                element={<SignUp />}
              />
              <Route 
                path="/" 
                element={<Home />}
              />
            </Routes>

      </Router>
    </ApolloProvider>

  );
}

export default App;
