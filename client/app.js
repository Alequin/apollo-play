import React from 'react';
import ReactDom from 'react-dom';
import {Route} from 'react-router';
import { BrowserRouter } from 'react-router-dom';

// Apollo
import { ApolloProvider } from 'react-apollo';
import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';

import MainPage from './main-page.jsx'

const client = new ApolloClient({
    // By default, this client will send queries to the
    //  `/graphql` endpoint on the same host
    // A provided argument allows for a specific 
    // endpoint to be defined
  link: new HttpLink({ uri: 'https://api.example.com/graphql' }),
  cache: new InMemoryCache()
});

ReactDom.render((
    <ApolloProvider client={client}>
        <BrowserRouter>
            <Route path='/' component={MainPage}/>
        </BrowserRouter>
    </ApolloProvider>
), document.getElementById("react-root"))