import React, { useEffect, useState } from 'react'
import router from 'next/router'
import { LinkIcon } from '@heroicons/react/outline'
import { useEnsName } from 'wagmi'
import { conciseEthAddress, transformURI } from '../lib/utils'
import Avatar from './Avatar'
import { Submissions } from '../typings'

function SearchResults({
  id,
  index,
  name,
  setEnteredText,
  requests,
}: Submissions) {
  const { data: ensData } = useEnsName({
    address: id,
  })
  const [newUri, setNewUri] = useState('')
  const [profile, setProfile] = useState<any>('')
  let uri = requests[0]?.evidence[0]?.URI
  const uriToHttp = transformURI(uri)
  const uriToJson = transformURI(newUri)

  useEffect(() => {
    //@ts-ignore
    fetch(uriToHttp)
      .then((response) => response.json())
      .then((data) => {
        setNewUri(data.fileURI)
        console.log()
      })
  }, [uri])

  // useEffect(() => {
  //   //@ts-ignore
  //   fetch(uriToJson)
  //     .then((response) => response.json())
  //     .then((data) => {
  //       setProfile(data)
  //       console.log(newUri)
  //       console.log('requests', requests)
  //       console.log('uriToHttp', uriToHttp)
  //       console.log('uriToJson', uriToJson)
  //     })
  // }, [newUri])

  console.log('profile:', newUri)
  return (
    <div className="mx-auto flex max-w-5xl cursor-default items-center  justify-between space-x-2  border-t bg-white px-4 py-2 last:rounded-b">
      <div className="flex items-center space-x-2">
        <p className="w-5">{index + 1}</p>
        <Avatar seed={id} />
        <p className="text-left font-bold text-black">{name}</p>
        <p className="text-gray-400 lg:hidden">
          {ensData || conciseEthAddress(id)}
        </p>
        <p className="hidden text-gray-400 lg:inline-flex">{ensData || id}</p>
      </div>
      <div className="flex">
        <button
          className="md:px-1"
          onClick={(e) => {
            e.preventDefault()
            router.push(`/registry/${id}`).then(() => {
              setEnteredText(''), router.reload()
            })
          }}
          key={id}
        >
          <a key={id} target="_blank" rel="noreferrer">
            <div className="hidden cursor-pointer rounded-full bg-primary-orange px-3 text-white md:flex">
              View
            </div>
            <LinkIcon className="h-5 w-5 cursor-pointer items-center text-primary-orange md:hidden" />
          </a>
        </button>
      </div>
    </div>
  )
}

export default SearchResults
