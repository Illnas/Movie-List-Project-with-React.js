import React from 'react'
import { client } from '../../../ApolloClient/client'
import { ApolloProvider } from '@apollo/client'
import ExchangeRates from './ExchangeRates'

const AppWrap = () => {
  return (
    <ApolloProvider client={client}>
      <ExchangeRates />
    </ApolloProvider>
  )
}

export default AppWrap
