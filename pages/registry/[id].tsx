import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { useLazyQuery, useQuery } from '@apollo/client'
import {
  GET_SUBMISSION_BY_ADDRESS,
  GET_ALL_SUBMISSIONS,
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
  const [enteredText, setEnteredText] = useState<any>('')
  //query all submissions when <Input> is submitted
  const [searchAll, { data: responseData }] = useLazyQuery(GET_ALL_SUBMISSIONS)
  //query submission from ethAddress pulled from pathName
  const { data } = useQuery(GET_SUBMISSION_BY_ADDRESS, {
    variables: { id: address },
  })
  const submissions: Submissions[] = responseData?.contains
  const submission = data?.pohsubmissions[0] || responseData?.byAddress[0]
  let uri = submission?.requests[0].evidence[0].URI
  const uriToHttp = transformURI(uri)
  const uriToJson = transformURI(newUri)
  const photo = transformURI(profile.photo)
  const video = transformURI(profile.video)

  const handleSubmit = async () => {
    if (enteredText.length == 42) {
      router.replace('/registry/' + enteredText)
    } else {
      searchAll({
        variables: {
          search: enteredText,
          address: enteredText,
        },
      })
    }
  }

  useEffect(() => {
    if (uriToHttp) {
      fetch(uriToHttp)
        .then((response) => response.json())
        .then((data) => {
          setNewUri(data.fileURI)
        })
    }
    if (uriToJson) {
      fetch(uriToJson)
        .then((response) => response.json())
        .then((data) => {
          setProfile(data)
        })
    }
  }, [uri, newUri])

  return (
    <div className="mx-auto mt-4 w-full max-w-5xl  text-center">
      <Input
        handleSubmit={handleSubmit}
        enteredText={enteredText}
        setEnteredText={setEnteredText}
      />
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
