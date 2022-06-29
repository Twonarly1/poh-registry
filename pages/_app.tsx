import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { SessionProvider } from 'next-auth/react'
import Header from '../components/Header'
import Head from 'next/head'
import { ApolloProvider } from '@apollo/client'
import { Toaster } from 'react-hot-toast'
import { RecoilRoot } from 'recoil'
import { chain, createClient, WagmiProvider } from 'wagmi'
import apolloClient from '../apollo-client'
import '@rainbow-me/rainbowkit/styles.css'
import {
  apiProvider,
  configureChains,
  getDefaultWallets,
  lightTheme,
  RainbowKitProvider,
} from '@rainbow-me/rainbowkit'

const { chains, provider } = configureChains(
  // [chain.mainnet, chain.polygon, chain.optimism, chain.arbitrum],

  [chain.mainnet],
  [apiProvider.alchemy(process.env.ALCHEMY_ID), apiProvider.fallback()]
)
const { connectors } = getDefaultWallets({
  appName: 'My RainbowKit App',
  chains,
})
const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider,
})

function MyApp({ Component, pageProps: { session, pageProps } }: AppProps) {
  return (
    <ApolloProvider client={apolloClient}>
      <SessionProvider session={session}>
        <WagmiProvider client={wagmiClient}>
          <RainbowKitProvider
            coolMode={true}
            chains={chains}
            theme={lightTheme({
              accentColor: '#FFAD33',
              accentColorForeground: 'white',
              borderRadius: 'small',
              fontStack: 'system',
            })}
          >
            <Toaster />
            <Head>
              <title>PoH</title>
              <link rel="icon" href="/favicon.ico" />
            </Head>
            <RecoilRoot>
              <div className="h-screen overflow-y-scroll bg-slate-200">
                <Header />
                <Component {...pageProps} />
              </div>
            </RecoilRoot>
          </RainbowKitProvider>
        </WagmiProvider>
      </SessionProvider>
    </ApolloProvider>
  )
}

export default MyApp
