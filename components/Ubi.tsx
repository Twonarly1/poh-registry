import React, { useEffect, useState } from 'react'
import { useBalance } from 'wagmi'
import { CurrencyDollarIcon, GiftIcon } from '@heroicons/react/outline'
import SidebarRow from './MenuList'

interface UbiProps {
  ethAddress: string
}

const tokenAddress = '0xDd1Ad9A21Ce722C151A836373baBe42c868cE9a4'
const tokenSymbol = 'UBI'
const tokenDecimals = 18
const tokenImage =
  'https://raw.githubusercontent.com/justinkalland/add-ubi-to-metamask/master/logo.png'

const Ubi = ({ ethAddress }: UbiProps) => {
  const [price, setPrice] = useState<number>(-1)
  const { data, isLoading, isError } = useBalance({
    addressOrName: ethAddress,
    watch: false,
    token: '0xDd1Ad9A21Ce722C151A836373baBe42c868cE9a4',
  })

  const rewards: number = Number(data?.formatted) * price

  useEffect(() => {
    fetch('https://api.coingecko.com/api/v3/coins/universal-basic-income/')
      .then((response) => response.json())
      .then((data) => {
        setPrice(data.market_data.current_price.usd)
      })
  }, [])

  if (isLoading) return <div>Fetching balance…</div>
  if (isError) return <div>Error fetching balance</div>

  async function addToken() {
    try {
      //@ts-ignore
      const wasAdded = await window.ethereum.request({
        method: 'wallet_watchAsset',
        params: {
          type: 'ERC20',
          options: {
            address: tokenAddress,
            symbol: tokenSymbol,
            decimals: tokenDecimals,
            image: tokenImage,
          },
        },
      })

      if (wasAdded) {
        console.log('Thanks for your interest!')
      } else {
        console.log('Universal Basic Income')
      }
    } catch (error) {
      console.log(error)
    }

    return
  }

  return (
    <>
      <div className="flex items-center text-blue-300">
        <SidebarRow
          Icon={GiftIcon}
          title="Faucet"
          content={
            <>
              {Number(data?.formatted).toFixed(2)}
              <span className="ml-1">UBI</span>
            </>
          }
          onClick={addToken}
        />
      </div>
      <div className="flex items-center text-green-500">
        <SidebarRow
          Icon={CurrencyDollarIcon}
          title="Rewards"
          content={rewards.toFixed(2)}
        />
      </div>
    </>
  )
}

export default Ubi
