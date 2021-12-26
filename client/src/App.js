import React from 'react';
// import ApolloClient from '@apollo/client';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client'; 
import './App.css';
import logo from './logo.png';
import {Launches} from './components/launches';

const client = new ApolloClient({
  uri: "https://localhost:5000/graphql",
  cache: new InMemoryCache()
});

const App = () => {
  return (
    <ApolloProvider client={client}>
      <div>
        <img
          src={logo}
          alt="SpaceX"
          style={{ width: 300, display: "block", margin: "auto" }}
        />  
        <Launches />
      </div>
    </ApolloProvider>
  );
}
 
export default App;