import React from 'react'
import type { NextPage } from 'next'
import { Footer } from '../components/Footer'
import Counter from '../components/Counter'

const Home: NextPage = () => {
  return (
    <div className="mx-auto mt-12 h-fit max-w-5xl bg-slate-200 px-6 text-center text-gray-800 md:px-12 lg:text-left">
      <div className="container mx-auto">
        <h1 className="w-full text-5xl font-bold tracking-tight md:pt-6 md:text-6xl lg:mx-auto lg:text-center xl:text-7xl">
          Proof of
          <span className="ml-2 text-primary-orange">Humanity</span>
        </h1>
        <div className=" w-full items-center gap-12">
          <div className="">
            <p className="mt-12 text-gray-600 ">
              Welcome! This application is to support and promote the Proof of
              Humanity registry. The /reddit page of this application is not
              linked up with the poh registry data and is to be completed at a
              later date. Currently, you can search the registry and filter the
              registry. To view the reddit side of the application, clone the
              repo, then find apollo-client.js and change the uri.
            </p>
          </div>

          <div className="py-16 lg:mx-auto lg:w-full lg:text-center">
            <Counter />
          </div>

          <div className="mx-auto mb-12 max-w-xl">
            <div className="block rounded-lg bg-white py-6 px-6 shadow-lg">
              <form>
                <a
                  href="https://www.proofofhumanity.id/"
                  type="button"
                  className="mb-6 inline-block w-full rounded bg-primary-orange px-6 py-2.5 text-lg font-medium leading-tight text-white shadow-md transition duration-150 ease-in-out hover:border-primary-orange hover:shadow-lg focus:shadow-lg active:shadow-lg"
                >
                  Join the registry!
                </a>

                <div className="flex justify-center">
                  <a
                    href="https://linktr.ee/proofofhumanity"
                    role="button"
                    className=" flex space-x-2 transition duration-200 ease-in-out "
                  >
                    <img
                      src="/images/linktree.svg"
                      className="h-6 w-6  "
                      alt=""
                    />
                    <p className="underline"> linktr.ee/proofofhumanity</p>
                  </a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
