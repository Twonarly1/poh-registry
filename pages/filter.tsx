import React, { SVGProps, useEffect, useState } from 'react'
import SearchResults from '../components/SearchResults'
import { useQuery } from '@apollo/client'
import {
  GET_ALL_SUBMISSIONS,
  GET_SUBMISSIONS_BY_ORDERING,
  GET_SUBMISSIONS_BY_STATUS,
} from '../graphql/queries'
import ListBox from '../components/Listbox'
import { Submissions } from '../typings'

const filter = () => {
  const [enteredText, setEnteredText] = useState('')
  const { data: countersData } = useQuery(GET_ALL_SUBMISSIONS)
  const counters = countersData?.pohcounter
  const filter = [
    {
      name: 'registered',
      avatar: '/images/filter/badgecheck.svg',
      content: counters?.registered,
    },
    {
      name: 'Vouching',
      avatar: '/images/filter/hand.svg',
      content: counters?.vouchingPhase,
    },
    {
      name: 'PendingRegistration',
      avatar: '/images/filter/fire.svg',
      content: counters?.pendingRegistration,
    },
    {
      name: 'PendingRemoval',
      avatar: '/images/filter/pause.svg',
      content: counters?.pendingRemoval,
    },

    {
      name: 'expired - todo',
      avatar: '/images/filter/clock.svg',
      content: counters?.expired,
    },
    {
      name: 'removed',
      avatar: '/images/filter/ban.svg',
      content: counters?.removed,
    },
    {
      name: 'ChallengedRegistration - todo',
      avatar: '/images/filter/flag.svg',
      content: counters?.challengedRegistration,
    },
    {
      name: 'ChallengedRemoval - todo',
      avatar: '/images/filter/flag.svg',
      content: counters?.challengedRemoval,
    },
  ]
  const [selected, setSelected] = useState(filter[0])
  useEffect(() => {}, [selected])

  //status
  const { data } = useQuery(GET_SUBMISSIONS_BY_STATUS, {
    variables: { status: selected.name },
  })

  //order
  const { data: orderingData } = useQuery(GET_SUBMISSIONS_BY_ORDERING, {
    variables: { orderBy: selected.name },
  })
  // const ordered: Submissions[] = orderingData?.pohsubmissions
  //  console.log('ordered:', ordered)

  const status: Submissions[] =
    data?.pohsubmissions || orderingData?.pohsubmissions
  console.log('status', status)

  return (
    <div className="mx-auto mt-0 max-w-5xl p-4 text-center">
      <div className="mx-auto max-w-lg py-2 text-center">
        <ListBox
          selected={selected}
          setSelected={setSelected}
          filter={filter}
          setEnteredText={setEnteredText}
        />
      </div>

      <div className="mt-2">
        {status &&
          status?.map((status, i) => (
            <SearchResults
              creationTime={status?.creationTime}
              id={status?.id}
              index={i}
              key={status.id}
              name={status?.name}
              registered={status?.registered}
              requests={status?.requests}
              setEnteredText={setEnteredText}
              status={status?.status}
              submissionTime={status?.submissionTime}
            />
          ))}
      </div>
    </div>
  )
}

export default filter
