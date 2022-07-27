import type { AppProps } from 'next/app'
import Header from '../components/Header'
import Head from 'next/head'
import { ApolloProvider } from '@apollo/client'
import { Toaster } from 'react-hot-toast'
import { RecoilRoot } from 'recoil'
import {
  WagmiConfig,
  createClient,
  defaultChains,
  configureChains,
  chain,
} from 'wagmi'
import { publicProvider } from 'wagmi/providers/public'
import { MetaMaskConnector } from 'wagmi/connectors/metaMask'
import apolloClient from '../apollo-client'
import Footer from '../components/Footer'
import '../styles/globals.css'

const { provider } = configureChains(defaultChains, [publicProvider()])

const client = createClient({
  autoConnect: false,
  connectors: [
    new MetaMaskConnector({
      chains: [chain.mainnet],
    }),
  ],
  provider,
})

function MyApp({ Component, pageProps: { pageProps } }: AppProps) {
  return (
    <ApolloProvider client={apolloClient}>
      <WagmiConfig client={client}>
        <Toaster />
        <Head>
          <title>poh registry</title>
          <link rel="icon" href="/images/proofofhumanity.png" />
        </Head>
        <RecoilRoot>
          <Header />
          <Component {...pageProps} />
          <Footer />
        </RecoilRoot>
      </WagmiConfig>
    </ApolloProvider>
  )
}

export default MyApp
