import React, { useEffect, useState } from 'react'
import { useAccount } from 'wagmi'
import router from 'next/router'

type Props = {
  id: string
}

function NftWallet({ id }: Props) {
  const { data: accountData } = useAccount()
  const [nfts, setNfts] = useState<any>('')
  console.log(accountData?.address)
  const address = router.asPath.replace('/registry/', '')

  useEffect(() => {
    fetch(
      `https://api.niftyapi.xyz/address/0x67bFBa424DcECc8d7Ba6B2da4C6a76c8fd895c27`
    )
      .then((response) => response.json())
      .then((data) => {
        setNfts(data)
      })
  }, [])

  console.log('id', id)
  console.log('nfts:', nfts)

  return (
    <div className="p-4">
      <ul
        role="list"
        className="grid grid-cols-2 gap-x-4 gap-y-8 p-4 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8"
      >
        {nfts &&
          nfts?.map((nft: any, key: any) => (
            <li key={nft.token_id} className="relative">
              <div className="aspect-w-10 aspect-h-7 group block w-full overflow-hidden rounded-lg bg-gray-100 focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 focus-within:ring-offset-gray-100">
                {nft.image ? (
                  <img
                    src={nft.image}
                    alt={nft.description}
                    className="pointer-events-none object-cover text-xs group-hover:opacity-75"
                  />
                ) : (
                  <img
                    src="/images/avatar-placeholder.jpeg"
                    alt=""
                    className="pointer-events-none h-fit object-cover group-hover:opacity-75"
                  />
                )}
                <button
                  type="button"
                  className="absolute inset-0 focus:outline-none"
                >
                  <span className="sr-only">View details for {nft.name}</span>
                </button>
              </div>
              <p className="pointer-events-none mt-2 block truncate text-sm font-medium text-gray-900">
                {nft.name}
              </p>
              <p className="pointer-events-none block  truncate text-sm font-medium text-gray-500">
                {nft.token_id}
              </p>
            </li>
          ))}
      </ul>
    </div>
  )
}

export default NftWallet
