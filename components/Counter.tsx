import { useQuery } from '@apollo/client'
import clsx from 'clsx'
import router from 'next/router'
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
  //   console.log('total:', total)
  const count = total
  //   console.log('count:', count)
  const letters = count.toString().split('')
  //   console.log('letter count', letters)

  return (
    <div className="flex-col-2  flex items-center justify-center gap-4 pb-12 lg:pt-24">
      <div
        className={clsx(
          'grid grid-flow-col justify-center gap-2',
          count === 0 && ''
        )}
      >
        {letters.map((l, i) => (
          <div
            className={clsx(
              'animate-enter',
              'hover:text-primary-pink focus:text-primary-pink relative cursor-default items-center rounded-lg bg-white p-1 px-3 text-center font-mono text-xl font-bold text-gray-600 shadow-lg transition duration-500 ease-in-out hover:text-opacity-50 focus:outline-none focus:ring-2'
            )}
            key={i + '-' + l}
          >
            {l}
          </div>
        ))}
      </div>
      <div className="focus:text-primary-pink hover:text-primary-pink z-10 cursor-default rounded text-xl font-semibold tracking-wider text-gray-600 transition duration-500 ease-in-out hover:text-opacity-50">
        Registrants
      </div>
    </div>
  )
}

export default Counter
