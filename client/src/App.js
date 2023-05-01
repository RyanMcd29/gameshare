import React from 'react';
import {ApolloClient, InMemoryCache, ApolloProvider} from '@apollo/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css';
import SearchContainer from './components/searchContainer';

// Pages
import Home from './pages/Home';
// import Header from './pages/Header';
// import Footer from './pages/Footer';

// const client = new ApolloClient({
//   uri: '/graphql',
//   cache: new InMemoryCache(),
// });


function App() {
  return (
    // <ApolloProvider client={client}>
      <Router>

            <Routes>
              <Route 
                path="/" 
                element={<Home />}
              />
            </Routes>

      </Router>
    // </ApolloProvider>

  );
}

export default App;
