import React from 'react'
import AuthProvider from './contexts/authContext';
import MainStack from './navigators/mainStack';
import { ApolloProvider } from '@apollo/client'
import apolloClient from './configs/apolloClient';

export default function App() {

  return (
    <ApolloProvider client={apolloClient}>
      <AuthProvider>
        <MainStack />
      </AuthProvider>
    </ApolloProvider>
  );
}


