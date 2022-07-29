import React, { useState } from 'react'
import { useQuery } from '@apollo/client'
import { GET_ALL_SUBMISSIONS } from '../graphql/queries'
import { Submissions } from '../typings'
import SearchResults from '../components/SearchResults'
import ScrollToTop from '../components/Scroll'
import Counter from '../components/Counter'
import { SearchIcon } from '@heroicons/react/outline'

const Home = () => {
  const [enteredText, setEnteredText] = useState<any>('')
  const { data: responseData } = useQuery(GET_ALL_SUBMISSIONS, {
    variables: {
      search: enteredText,
      address: enteredText,
    },
  })

  const containsNormalized = responseData?.contains.slice(0, 12) || []
  const byAddressNormalized = responseData?.byAddress || []

  const submissions: Submissions[] = responseData
    ? containsNormalized.concat(byAddressNormalized)
    : responseData?.submissions?.slice(0, 12)

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault()
  }
  // console.log(enteredText)
  console.log(responseData)
  // console.log(submissions)
  return (
    <div className="mx-auto mt-0 max-w-5xl p-4 text-center">
      <form onSubmit={handleSubmit} className="mt-2">
        <div className="relative mx-auto mt-0 max-w-lg rounded-full hover:scale-105">
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
            <SearchIcon className="h-5 w-5 text-gray-500" aria-hidden="true" />
          </div>
          <input
            className="border-primary-light  block w-full rounded-full border-none bg-white py-3 pl-10 text-left text-lg font-semibold shadow-none outline-none placeholder:text-sm focus:border-none focus:bg-white focus:shadow-none focus:outline-none focus:ring-0 active:bg-white dark:text-black md:w-full md:max-w-lg xs:placeholder:text-lg"
            type="text"
            value={enteredText}
            onChange={(e) => setEnteredText(e.target.value)}
            placeholder="Search registry by name or address"
            required
            autoComplete="true"
            spellCheck="false"
          />
        </div>
      </form>
      <Counter />
      <div className="">
        {submissions &&
          submissions.map((response: Submissions, index: number) => (
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
          ))}
      </div>
      <ScrollToTop />
    </div>
  )
}

export default Home
