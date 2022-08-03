import React, { useEffect, useState } from 'react'
import router from 'next/router'
import { LinkIcon } from '@heroicons/react/outline'
import { useAccount, useEnsAvatar, useEnsName } from 'wagmi'
import { conciseEthAddress, transformURI } from '../lib/utils'
import { Submissions } from '../typings'

function SearchResults({
  id,
  index,
  name,
  setEnteredText,
  disputed,
  vouchees,
  requests,
}: Submissions) {
  const { data: ensData } = useEnsName({
    address: id,
  })
  const [newUri, setNewUri] = useState('')
  let uri = requests[0]?.evidence[0]?.URI
  const uriToHttp = transformURI(uri)
  const uriToJson = transformURI(newUri)
  const [profile, setProfile] = useState<any>('')

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
  const photo = transformURI(profile.photo)

  console.log({ id, index, name, setEnteredText, requests })

  return (
    <div className="mx-auto max-w-2xl  cursor-pointer border-t  px-2 py-1 last:rounded-b xs:px-4">
      <a
        onClick={(e) => {
          e.preventDefault()
          router.push(`/registry/${id}`).then(() => {
            setEnteredText(''), router.reload()
          })
        }}
        key={id}
        target="_blank"
        className="flex w-auto items-center justify-between"
        rel="noreferrer"
      >
        <div className="flex items-center gap-2">
          <p className="w-5">{index + 1}</p>

          {/* <Avatar seed={id} /> */}

          <img
            loading="lazy"
            src={photo}
            className="h-10 w-10 rounded-full object-cover"
            alt=""
          />

          <div className="items-center sm:flex xs:gap-2">
            <p className="w-32 truncate text-left text-xs font-bold text-black xs:w-auto xs:text-sm">
              {name}
            </p>
            <p className="truncate text-left text-xs text-gray-400  xs:text-sm">
              {ensData || conciseEthAddress(id)}
            </p>
          </div>
        </div>
        <div className="hidden cursor-pointer rounded-full  bg-white px-3 text-primary-orange hover:bg-primary-orange hover:text-white sm:flex">
          View
        </div>
        <LinkIcon className="h-5 w-5 -rotate-12 cursor-pointer items-center text-primary-orange sm:hidden" />
      </a>
    </div>
  )
}

export default SearchResults
