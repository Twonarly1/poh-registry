import React, { useEffect, useState } from 'react'
import router from 'next/router'
import { useLazyQuery } from '@apollo/client'
import {
  GET_SUBMISSION_BY_NAME,
  GET_SUBMISSION_BY_ADDRESS,
} from '../../graphql/queries'
import Search from '../../components/Search'
import SearchResults from '../../components/SearchResults'

function registry() {
  const [nameSearched, setNameSearched] = useState('')
  const [addressSearched, setAddressSearched] = useState('')
  const [enteredText, setEnteredText] = useState('')

  useEffect(() => {}, [enteredText, nameSearched, addressSearched])

  const [searchName, { data: nameSearchedData }] = useLazyQuery(
    GET_SUBMISSION_BY_NAME,
    {
      variables: {
        name_contains_nocase: nameSearched,
      },
    }
  )

  //submission
  const submissions: Submissions[] = nameSearchedData?.pohsubmissions
  console.log('submissions:', submissions)

  const [searchAddress, { data: addressSearchedData }] = useLazyQuery(
    GET_SUBMISSION_BY_ADDRESS,
    {
      variables: { id: addressSearched },
    }
  )

  const submitAddress = async () => {
    if (addressSearched.length == 42) {
      router.replace('/registry/' + enteredText)
    } else {
      searchAddress()
      searchName()
    }
  }

  return (
    <div className="mx-auto mt-0 max-w-5xl p-4 text-center">
      <div className="mx-auto w-80 py-2 text-center">
        <Search
          submitAddress={submitAddress}
          enteredText={enteredText}
          setEnteredText={setEnteredText}
          setNameSearched={setNameSearched}
          setAddressSearched={setAddressSearched}
        />
      </div>
      <div className="mt-2">
        {submissions &&
          submissions?.map((submission, i) => (
            <SearchResults
              creationTime={submission.creationTime}
              id={submission.id}
              index={i}
              key={submission.id}
              name={submission.name}
              registered={submission.registered}
              requests={submission?.requests}
              setEnteredText={setEnteredText}
              status={submission.status}
              submissionTime={submission.submissionTime}
              submission={submission}
            />
          ))}
      </div>
    </div>
  )
}

export default registry
