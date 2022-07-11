import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client'

// There are two seperate stepzen api requests, and the site is not setup to handle both at the same time.
// Swap the uri below to change requests.
// poh-reddit: 'https://ranst.stepzen.net/api/rolling-shrimp/__graphql',
// poh-registry: 'https://ranst.stepzen.net/poh/graph/__graphql',

const apolloClient = new ApolloClient({
  uri:
    //'https://ranst.stepzen.net/api/rolling-shrimp/__graphql',
    'https://ranst.stepzen.net/poh/graph/__graphql',
  headers: {
    Authorization: `ApiKey ${process.env.NEXT_PUBLIC_STEPZEN_KEY}`,
  },
  cache: new InMemoryCache(),
})

export default apolloClient
