import { CheckIcon, XIcon } from '@heroicons/react/outline'
import { useAccount, useEnsName, useNetwork, useSwitchNetwork } from 'wagmi'
import { conciseEthAddress } from '../lib/utils'

export default function Account() {
  const { address } = useAccount()
  const { data: ensNameData } = useEnsName({ address })
  const ethAddresss = conciseEthAddress(`${address}`)
  const { chain } = useNetwork()
  const { chains, error, isLoading, pendingChainId, switchNetwork } =
    useSwitchNetwork()

  return (
    <div className="flex cursor-pointer items-center gap-x-2 rounded-md bg-gray-100 px-3 py-2 text-sm font-medium text-gray-500 outline-none">
      <p className="truncate"> {ensNameData ?? `${ethAddresss}`}</p>{' '}
      <span className="px-1 text-gray-300">|</span>
      <div>
        <div>
          {chain?.id == 1 ? (
            <img src="/images/ethereum.svg" className="h-6 w-6"></img>
          ) : (
            // <CheckIcon className="h-6 w-6 text-green-500 -rotate-12" />
            switchNetwork && (
              <div>
                {chains.slice(0, 1).map((x) =>
                  x.id === chain?.id ? null : (
                    <button
                      className=" flex items-center"
                      onClick={() => switchNetwork(x.id)}
                    >
                      <XIcon className="h-6 w-6 text-red-500" />
                      {isLoading && x.id === pendingChainId && ' (switching)'}
                    </button>
                  )
                )}
              </div>
            )
          )}
        </div>
        <div>{error && error.message}</div>
      </div>
    </div>
  )
}
