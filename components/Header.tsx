import React, { Fragment } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {
  SearchIcon,
  FilterIcon,
  ChatAlt2Icon,
  HomeIcon,
  MenuIcon,
} from '@heroicons/react/outline'
import { ConnectButton } from '@rainbow-me/rainbowkit'
import toast from 'react-hot-toast'
import { Tab } from '@headlessui/react'
import router from 'next/router'
import { Menu } from '@headlessui/react'
import Tabs from './Tabs'
import { useRouter } from 'next/router'
const Header = () => {
  const router = useRouter()

  return (
    <div className="w-full bg-white shadow-lg">
      <div className="sticky top-0 z-50 mx-auto flex w-screen max-w-5xl items-center justify-between bg-white px-8 py-2">
        {/* <div className="items-center text-gray-500 sm:hidden">
          <Menu>
            <Menu.Button>
              <MenuIcon className="h-6 w-6" />
            </Menu.Button>
            <Menu.Items className="ml-2  space-x-2">
              <Menu.Item>
                {({ active }) => (
                  <button
                    onClick={() => router.push('/')}
                    className={
                      active
                        ? 'bg-gray-100 text-gray-500 outline-none'
                        : 'bg-white text-gray-500'
                    }
                  >
                    <div className="icon">
                      <HomeIcon
                        className={
                          active
                            ? 'h-6 w-6 items-center bg-gray-100 text-primary-orange'
                            : 'h-6 w-6 text-gray-500 hover:bg-gray-100'
                        }
                      />
                      <p className="hidden md:flex">Home</p>
                    </div>
                  </button>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <button
                    onClick={() => router.push('/reddit')}
                    className={
                      active
                        ? 'bg-gray-100 text-gray-500 outline-none'
                        : 'bg-white text-gray-500'
                    }
                  >
                    <div onClick={alert} className="icon">
                      <ChatAlt2Icon
                        className={
                          active
                            ? 'h-6 w-6 items-center bg-gray-100 text-primary-orange'
                            : 'h-6 w-6 text-gray-500 hover:bg-gray-100'
                        }
                      />
                      <p className="hidden md:flex">Chat</p>
                    </div>
                  </button>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <button
                    onClick={() => router.push('/registry')}
                    className={
                      active
                        ? 'bg-gray-100 text-gray-500 outline-none'
                        : 'bg-white text-gray-500'
                    }
                  >
                    <div className="icon">
                      <SearchIcon
                        className={
                          active
                            ? 'h-6 w-6 items-center bg-gray-100 text-primary-orange'
                            : 'h-6 w-6 text-gray-500 hover:bg-gray-100'
                        }
                      />
                      <p className="hidden md:flex">Search</p>
                    </div>
                  </button>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <button
                    onClick={() => router.push('/registry/filter')}
                    className={
                      active
                        ? 'bg-gray-100 text-gray-500 outline-none'
                        : 'bg-white text-gray-500'
                    }
                  >
                    <div className="icon">
                      <FilterIcon
                        className={
                          active
                            ? 'h-6 w-6 items-center bg-gray-100 text-primary-orange'
                            : 'h-6 w-6 text-gray-500 hover:bg-gray-100'
                        }
                      />
                      <p className="hidden md:flex">Filter</p>
                    </div>
                  </button>
                )}
              </Menu.Item>
            </Menu.Items>
          </Menu>
        </div> */}
        <div className="relative h-12 w-12 flex-shrink-0 cursor-pointer sm:flex">
          <Link href="/">
            <Image
              priority
              objectFit="contain"
              layout="fill"
              src="/images/proofofhumanity.png"
            />
          </Link>
        </div>
        <Tabs />
        {/* {router.asPath == '/reddit' ? <ConnectButton /> : ''} */}
      </div>
    </div>
  )
}

export default Header
