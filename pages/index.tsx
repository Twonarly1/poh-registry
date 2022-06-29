import React from 'react'
import type { NextPage } from 'next'
import { useQuery } from '@apollo/client'
import { GET_SUBREDDITS_WITH_LIMIT } from '../graphql/queries'
import Feed from '../components/Feed'
import PostBox from '../components/PostBox'
import SubredditRow from '../components/SubredditList'

const Home: NextPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 px-6 pt-16 text-center text-gray-800 md:px-12 lg:text-left">
      <div className="container mx-auto xl:px-32">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="mt-12 lg:mt-0">
            <h1 className="mb-12 text-5xl font-bold uppercase tracking-tight md:text-6xl xl:text-7xl">
              Proof of
              <br />
              <span className="text-primary-orange">Humanity</span>
            </h1>
            <p className="text-gray-600">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet,
              itaque accusantium odio, soluta, corrupti aliquam quibusdam
              tempora at cupiditate quis eum maiores libero veritatis? Dicta
              facilis sint aliquid ipsum atque?
            </p>
          </div>
          <div className="mb-12 lg:mb-0">
            <div className="block rounded-lg bg-white px-6 py-12 shadow-lg md:px-12">
              <form>
                <a
                  href="https://www.proofofhumanity.id/"
                  type="button"
                  className="mb-6 inline-block w-full rounded bg-primary-orange px-6 py-2.5 text-lg font-medium leading-tight text-white shadow-md transition duration-150 ease-in-out hover:border-primary-orange hover:shadow-lg focus:shadow-lg active:shadow-lg"
                >
                  Join the Proof of Humanity registry!
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
