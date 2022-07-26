import React, { useState } from 'react'
import { useQuery } from '@apollo/client'
import { SearchIcon } from '@heroicons/react/outline'
import { GET_ALL_SUBMISSIONS } from '../graphql/queries'
import { Submissions } from '../typings'
import SearchResults from '../components/SearchResults'
import ScrollToTop from '../components/Scroll'
import Counter from '../components/Counter'

const Home = () => {
  const [enteredText, setEnteredText] = useState('')
  const { data: responseData } = useQuery(GET_ALL_SUBMISSIONS, {
    variables: {
      search: enteredText,
      address: enteredText,
    },
  })
  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault()
    const text = { enteredText }
    console.log(text)
    console.log(enteredText)
  }

  // console.log(enteredText)
  // console.log(responseData)

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
      <div className="mt-6">
        <Counter />
      </div>

      <div className="-mt-2 p-4">
        {responseData && responseData.byAddress.length > 0
          ? responseData?.byAddress.map(
              (response: Submissions, index: number) => (
                <SearchResults
                  creationTime={response?.creationTime}
                  id={response?.id}
                  key={index}
                  name={response?.name}
                  registered={response?.registered}
                  requests={response?.requests}
                  setEnteredText={setEnteredText}
                  status={response?.status}
                  submissionTime={response?.submissionTime}
                  index={index}
                />
              )
            )
          : responseData?.contains.map(
              (response: Submissions, index: number) => (
                <SearchResults
                  creationTime={response?.creationTime}
                  id={response?.id}
                  key={index}
                  name={response?.name}
                  registered={response?.registered}
                  requests={response?.requests}
                  setEnteredText={setEnteredText}
                  status={response?.status}
                  submissionTime={response?.submissionTime}
                  index={index}
                />
              )
            )}
      </div>
      <ScrollToTop />
    </div>
  )
}

export default Home
