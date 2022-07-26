import { useQuery } from '@apollo/client'
import { LinkIcon, SearchIcon } from '@heroicons/react/outline'
import router from 'next/router'
import React, { useState } from 'react'
import { useEnsName } from 'wagmi'
import Avatar from '../components/Avatar'
import { GET_ALL_SUBMISSIONS } from '../graphql/queries'
import { conciseEthAddress } from '../lib/utils'
import { Submissions } from '../typings'

const test = () => {
  const [enteredText, setEnteredText] = useState('')
  const { data: responseData } = useQuery(GET_ALL_SUBMISSIONS, {
    variables: {
      search: enteredText,
      address: enteredText,
    },
  })
  //   console.log(enteredText)
  //   console.log(responseData)

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault()
    const text = { enteredText }
    console.log(text)
    console.log(enteredText)
  }

  const { data: ensData } = useEnsName({
    address: responseData?.byaddress?.id || responseData?.contains?.id,
  })

  return (
    <div className="mx-auto mt-0 max-w-5xl p-4 text-center">
      <div className="mx-auto max-w-lg py-2 text-center">
        <form onSubmit={handleSubmit} className="mt-2">
          <div className="relative mx-auto mt-0 rounded-full shadow-sm hover:scale-105">
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
              <SearchIcon
                className="h-5 w-5 text-gray-500"
                aria-hidden="true"
              />
            </div>
            <input
              className="border-primary-light block w-full rounded-full border-none bg-white py-3 pl-10 text-left text-lg font-semibold shadow-none outline-none focus:border-none focus:bg-white focus:shadow-none focus:outline-none focus:ring-0 active:bg-white dark:text-black md:w-full md:max-w-lg"
              type="text"
              value={enteredText}
              onChange={(e) => setEnteredText(e.target.value)}
            />
          </div>
        </form>
      </div>
      <div className="p-4">
        {responseData && responseData.byAddress.length > 0
          ? responseData?.byAddress.map(
              (response: Submissions, index: number) => (
                <div
                  key={index}
                  className="mx-auto flex max-w-5xl cursor-default items-center  justify-between space-x-2  border-t bg-white px-4 py-2 last:rounded-b"
                >
                  <div className="flex items-center gap-2">
                    <p className="w-5">{index + 1}</p>
                    <Avatar seed={response.id} />
                    <div className="items-center xs:flex xs:gap-2">
                      <p className="text-left font-bold text-black">
                        {response.name}
                      </p>
                      <p className="text-left text-gray-400">
                        {ensData || conciseEthAddress(response.id)}
                      </p>
                    </div>
                  </div>
                  <button
                    className=""
                    onClick={(e) => {
                      e.preventDefault()
                      router.push(`/registry/${response.id}`).then(() => {
                        setEnteredText(''), router.reload()
                      })
                    }}
                    key={response.id}
                  >
                    <a key={response.id} target="_blank" rel="noreferrer">
                      <div className="hidden cursor-pointer rounded-full bg-primary-orange px-3 text-white md:flex">
                        View
                      </div>
                      <LinkIcon className="h-5 w-5 cursor-pointer items-center text-primary-orange md:hidden" />
                    </a>
                  </button>
                </div>
              )
            )
          : responseData?.contains.map(
              (response: Submissions, index: number) => (
                <div
                  key={index}
                  className="mx-auto flex max-w-5xl cursor-default items-center  justify-between space-x-2  border-t bg-white px-4 py-2 last:rounded-b"
                >
                  <div className="flex items-center gap-2">
                    <p className="w-5">{index + 1}</p>
                    <Avatar seed={response.id} />
                    <div className="items-center xs:flex xs:gap-2">
                      <p className="text-left font-bold text-black">
                        {response.name}
                      </p>
                      <p className="text-left text-gray-400">
                        {ensData || conciseEthAddress(response.id)}
                      </p>
                    </div>
                  </div>
                  <button
                    className=""
                    onClick={(e) => {
                      e.preventDefault()
                      router.push(`/registry/${response.id}`).then(() => {
                        setEnteredText(''), router.reload()
                      })
                    }}
                    key={response.id}
                  >
                    <a key={response.id} target="_blank" rel="noreferrer">
                      <div className="hidden cursor-pointer rounded-full bg-primary-orange px-3 text-white md:flex">
                        View
                      </div>
                      <LinkIcon className="h-5 w-5 cursor-pointer items-center text-primary-orange md:hidden" />
                    </a>
                  </button>
                </div>
              )
            )}
      </div>
    </div>
  )
}

export default test
