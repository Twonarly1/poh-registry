import React, { useEffect, useState } from 'react'
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
      //@ts-ignore
      // query: ({ submissionDuration }) => ({
      //   where: {
      //     status: 'None',
      //     registered: true,
      //     submissionTime_gte:
      //       Math.floor(Date.now() / 1000) - (submissionDuration || 0),
      //   },
      // }),
    },
    {
      name: 'Vouching',
      avatar: '/images/filter/hand.svg',
      content: counters?.vouchingPhase,
      // query: { where: { status: 'Vouching' } },
    },
    {
      name: 'PendingRegistration',
      avatar: '/images/filter/fire.svg',
      content: counters?.pendingRegistration,
      // query: { where: { status: 'PendingRegistration', disputed: false } },
    },
    {
      name: 'PendingRemoval',
      avatar: '/images/filter/pause.svg',
      content: counters?.pendingRemoval,
      // query: { where: { status: "PendingRemoval", disputed: false } },
    },

    {
      name: 'expired - todo',
      avatar: '/images/filter/clock.svg',
      content: counters?.expired,
      //@ts-ignore
      // query: ({ submissionDuration }) => ({
      //   where: {
      //     status: 'None',
      //     registered: true,
      //     submissionTime_lt:
      //       Math.floor(Date.now() / 1000) - (submissionDuration || 0),
      //   },
      // }),
    },
    {
      name: 'removed',
      avatar: '/images/filter/ban.svg',
      content: counters?.removed,
      query: { where: { status: 'None', registered: false } },
    },
    {
      name: 'ChallengedRegistration - todo',
      avatar: '/images/filter/flag.svg',
      content: counters?.challengedRegistration,
      // query: { where: { status: "PendingRegistration", disputed: true } },
    },
    {
      name: 'ChallengedRemoval - todo',
      avatar: '/images/filter/flag.svg',
      content: counters?.challengedRemoval,
      // query: { where: { status: "PendingRemoval", disputed: true } },
    },
  ]
  const [selected, setSelected] = useState(filter[0])
  useEffect(() => {}, [selected])

  // HERERERE
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
              //@ts-ignore
              disputed={undefined}
              vouchees={undefined}
            />
          ))}
      </div>
    </div>
  )
}

export default filter
