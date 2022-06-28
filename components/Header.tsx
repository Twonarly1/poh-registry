import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { SearchIcon, FilterIcon, ChatAlt2Icon } from '@heroicons/react/outline'
import { ConnectButton } from '@rainbow-me/rainbowkit'

const Header = () => {
  return (
    <div className="w-full bg-white shadow-lg">
      <div className="sticky top-0 z-50 mx-auto flex w-screen max-w-5xl items-center justify-between bg-white px-12 py-2">
        <div className="relative h-12 w-20 flex-shrink-0 cursor-pointer">
          <Link href="/">
            <Image
              priority
              objectFit="contain"
              layout="fill"
              src="/images/poh.svg"
            />
          </Link>
        </div>

        <div className="mx-5 inline-flex items-center text-gray-500 md:space-x-1">
          <Link href={'/'}>
            <div className="icon flex space-x-2">
              <ChatAlt2Icon className="h-6 w-6" />
              <p className="hidden md:flex">Chat</p>
            </div>
          </Link>
          <hr className="h-10 border border-gray-100" />{' '}
          <Link href={'/registry'}>
            <div className="icon flex space-x-2">
              <SearchIcon className="h-6 w-6" />
              <p className="hidden md:flex">Search</p>
            </div>
          </Link>
          <hr className="h-10 border border-gray-100" />{' '}
          <Link href={'/registry/filter'}>
            <div className="icon flex space-x-2">
              <FilterIcon className="h-6 w-6" />
              <p className="hidden md:flex">Filter</p>
            </div>
          </Link>
        </div>
        <ConnectButton />
      </div>
    </div>
  )
}

export default Header
