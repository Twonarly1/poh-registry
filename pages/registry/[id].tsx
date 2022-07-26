import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { useLazyQuery, useQuery } from '@apollo/client'
import {
  GET_SUBMISSION_BY_NAME,
  GET_SUBMISSION_BY_ADDRESS,
} from '../../graphql/queries'
import { transformURI } from '../../lib/utils'
import Input from '../../components/Search'
import Profile from '../../components/Profile'
import SearchResults from '../../components/SearchResults'
import { Submissions } from '../../typings'

const ProfilePage = () => {
  const router = useRouter()
  const address = router.asPath.toLowerCase().replace('/registry/', '')
  const [newUri, setNewUri] = useState('')
  const [profile, setProfile] = useState<any>('')
  const [nameSearched, setNameSearched] = useState('')
  const [addressSearched, setAddressSearched] = useState('')
  const [enteredText, setEnteredText] = useState('')
  const { data } = useQuery(GET_SUBMISSION_BY_ADDRESS, {
    variables: { id: address },
  })
  const [searchName, { data: nameSearchedData }] = useLazyQuery(
    GET_SUBMISSION_BY_NAME
  )
  const [searchAddress, { data: addressSearchedData }] = useLazyQuery(
    GET_SUBMISSION_BY_ADDRESS
  )
  const submissions: Submissions[] = nameSearchedData?.pohsubmissions
  const submission =
    data?.pohsubmissions[0] || addressSearchedData?.pohsubmissions[0]
  let uri = submission?.requests[0].evidence[0].URI
  const uriToHttp = transformURI(uri)
  const uriToJson = transformURI(newUri)
  const photo = transformURI(profile.photo)
  const video = transformURI(profile.video)

  useEffect(() => {}, [enteredText, nameSearched, addressSearched])

  const submitAddress = async () => {
    if (addressSearched.length == 42) {
      router.replace('/registry/' + enteredText).then(() => router.reload())
    } else {
      searchAddress({
        variables: { id: addressSearched },
      })
      searchName({
        variables: { name_contains_nocase: nameSearched },
      })
    }
  }

  useEffect(() => {
    //@ts-ignore
    fetch(uriToHttp)
      .then((response) => response.json())
      .then((data) => {
        setNewUri(data.fileURI)
      })
  }, [uri])

  useEffect(() => {
    //@ts-ignore
    fetch(uriToJson)
      .then((response) => response.json())
      .then((data) => {
        setProfile(data)
      })
  }, [newUri])

  return (
    <div className="mx-auto mt-4 w-full max-w-5xl p-2 text-center">
      <div className="mx-auto max-w-lg text-center ">
        <Input
          submitAddress={submitAddress}
          enteredText={enteredText}
          setEnteredText={setEnteredText}
          setNameSearched={setNameSearched}
          setAddressSearched={setAddressSearched}
        />
      </div>
      <div className="mt-6">
        {enteredText.length ? (
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
          ))
        ) : (
          <Profile
            profile={profile}
            ethAddress={submission?.id}
            submission={submission}
            photo={photo}
            video={video}
          />
        )}
      </div>
    </div>
  )
}

export default ProfilePage
