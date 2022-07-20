import { useQuery } from '@apollo/client'
import React from 'react'
import { GET_REGISTRY_COUNTERS } from '../graphql/queries'

const Counter = () => {
  const { data: countersData } = useQuery(GET_REGISTRY_COUNTERS)
  const data = countersData?.pohcounter
  const numbers = [
    Number(data?.challengedRegistration),
    Number(data?.challengedRemoval),
    Number(data?.expired),
    Number(data?.pendingRegistration),
    Number(data?.pendingRemoval),
    Number(data?.registered),
    Number(data?.removed),
    Number(data?.vouchingPhase),
  ]
  const total = numbers.reduce((total, number) => total + number, 0)
  const count = total
  const letters = count.toString().split('')

  return (
    <div className="flex-col-2  flex items-center justify-center gap-4 pb-6">
      <div
        className="
          'grid flex grid-flow-col justify-center gap-2"
      >
        {letters.map((l, i) => (
          <div
            className="
              'relative cursor-default items-center rounded-lg bg-white p-1 px-3 text-center font-mono text-xl font-bold text-gray-600 shadow-lg transition duration-500 ease-in-out hover:text-primary-orange hover:text-opacity-50 focus:text-primary-orange focus:outline-none focus:ring-2"
            key={i + '-' + l}
          >
            {l}
          </div>
        ))}
      </div>
      <div className="z-10 hidden cursor-default rounded text-xl font-semibold tracking-wider text-gray-600 transition duration-500 ease-in-out hover:text-primary-orange hover:text-opacity-50 focus:text-primary-orange sm:flex">
        Registrants
      </div>
    </div>
  )
}

export default Counter
