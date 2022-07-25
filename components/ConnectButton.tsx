import { useAccount, useConnect, useDisconnect } from 'wagmi'
import Account from './Account'
import { MetaMaskConnector } from 'wagmi/connectors/metaMask'
import { LightningBoltIcon } from '@heroicons/react/outline'
import { useIsMounted } from '../lib/hooks/useIsMounted'

export default function Connect() {
  const isMounted = useIsMounted()
  const { isConnected } = useAccount()
  const { connect, error, isLoading, pendingConnector } = useConnect()
  const { disconnect } = useDisconnect()
  const connector = new MetaMaskConnector()

  if (isConnected) {
    return (
      <button onClick={() => disconnect()}>
        <Account />
      </button>
    )
  }
  return (
    <>
      {connector && isMounted && (
        <button
          onClick={() => connect({ connector })}
          className="flex cursor-pointer items-center gap-1 rounded-md bg-white px-3 py-2 text-sm font-medium text-gray-500 outline-none hover:bg-gray-50"
        >
          <LightningBoltIcon className="h-6 w-6" />
          Connect
          {isLoading &&
            connector.id === pendingConnector?.id &&
            ' (connecting)'}
        </button>
      )}
      {error && <div>{error.message}</div>}
    </>
  )
}
