import React from 'react'
import type { NextPage } from 'next'
import Counter from '../components/Counter'
import { Footer } from '../components/Footer'
import Image from 'next/image'

const Home: NextPage = () => {
  return (
    <div className="mx-auto mt-12 w-full  bg-slate-200  text-center text-gray-800">
      <div className=" mx-auto">
        <h1 className="w-full text-5xl font-medium md:pt-6 md:text-7xl lg:mx-auto lg:text-center ">
          Proof of Humanity{' '}
        </h1>
        <p className="mx-auto mt-4 text-center text-2xl text-gray-600 ">
          Search and filter the poh registry.
        </p>
        <div className=" w-full items-center gap-6">
          <div className="py-16">
            <Counter />
            <a
              href="https://www.coingecko.com/en/coins/universal-basic-income"
              className="mx-auto -mt-4 flex w-fit items-center justify-center space-x-2"
            >
              <Image
                src="/images/ubi.svg"
                className="mx-auto items-center"
                height={24}
                width={24}
              />
              <p> Earn Universal Basic Income</p>{' '}
            </a>
          </div>
        </div>
      </div>
      <div className="fixed bottom-0 mx-auto w-full pb-4  text-center">
        <Footer />
      </div>
    </div>
  )
}

export default Home
