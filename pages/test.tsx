import { useQuery } from '@apollo/client'
import React, { SVGProps, useState } from 'react'
import { GET_ALL_SUBMISSIONS } from '../graphql/queries'
import { CountersOptions, pohCounter } from '../typings'

enum pohStatus {
  NONE,
  VOUCHING,
  PENDINGREGISTRATION,
  PENDINGREMOVAL,
}

interface Resource<T> {
  uid?: number
  resourceType: pohStatus
  data: T
}

const test = () => {
  const [countersOptions, setCountersOptions] =
    useState<CountersOptions>('Vouching')
  const [enteredText, setEnteredText] = useState('')
  const { data: responseData } = useQuery(GET_ALL_SUBMISSIONS, {
    variables: {
      search: enteredText,
      address: enteredText,
    },
  })
  console.log(enteredText)
  console.log(responseData)

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault()
    const text = { enteredText }
    console.log(text)
    console.log(enteredText)
  }

  const docOne: Resource<object> = {
    resourceType: pohStatus.NONE,
    data: { title: 'user has no pending status' },
  }
  const docTwo: Resource<object> = {
    resourceType: pohStatus.PENDINGREGISTRATION,
    data: { title: 'user has no pending status' },
  }

  console.log(docOne, docTwo)
  console.log(countersOptions)
  const responseDataNormalized: pohCounter = responseData?.pohcounters
  console.log(responseDataNormalized?.countersOptions)

  return (
    <div className="mx-auto mt-0 max-w-5xl p-4 text-center">
      <div className="mx-auto max-w-lg py-2 text-center">
        <form onSubmit={handleSubmit} className="mt-2">
          <div className="relative mx-auto mt-0 rounded-full shadow-sm hover:scale-105">
            <input
              className="border-primary-light block w-full rounded-full border-none bg-white py-3 pl-10 text-left text-lg font-semibold shadow-none outline-none focus:border-none focus:bg-white focus:shadow-none focus:outline-none focus:ring-0 active:bg-white dark:text-black md:w-full md:max-w-lg"
              type="text"
              value={enteredText}
              onChange={(e) => setEnteredText(e.target.value)}
            />
          </div>
        </form>
      </div>

      <>
        {countersOptions === 'Vouching' && (
          <>
            <h1>{countersOptions}</h1>
            <button
              type="button"
              onClick={() => setCountersOptions('PendingRegistration')}
            >
              next
            </button>
          </>
        )}
        {countersOptions === 'PendingRegistration' && (
          <>
            <h1>{countersOptions} </h1>
            <button
              type="button"
              onClick={() => setCountersOptions('PendingRemoval')}
            >
              next
            </button>
          </>
        )}
        {countersOptions === 'PendingRemoval' && (
          <>
            <h1>{countersOptions}</h1>
          </>
        )}
      </>
    </div>
  )
}

export default test
