import React, { useEffect, useState } from 'react'
import router from 'next/router'
import {
  BadgeCheckIcon,
  BanIcon,
  CalendarIcon,
  ClockIcon,
  FireIcon,
  HandIcon,
  PauseIcon,
  UserGroupIcon,
} from '@heroicons/react/outline'
import { useEnsName } from 'wagmi'
import { Jelly } from '@uiball/loaders'
import { CalendarIcon as CalendarIconFilled } from '@heroicons/react/solid'
import { conciseEthAddress, formatUnix, transformURI } from '../lib/utils'
import Ubi from './Ubi'
import Copy from './Copy'
import SidebarRow from './MenuList'
import VoucheesModal from './VoucheesModal'
import Timeago from 'react-timeago'
//import { Profile, Submissions } from '../typings'

const Profile = ({ profile, submission, photo }: any) => {
  const [files, setFiles] = useState<any>([])
  const [voucheesData, setVoucheesData] = useState<any>([])

  const { data: ensData } = useEnsName({
    address: submission?.id,
  })
  let registrationJSON = submission?.vouchees.map((vouchee: any) => ({
    value: transformURI(vouchee?.requests[0].evidence[0].URI),
  }))

  useEffect(() => {
    if (submission) {
      registrationJSON.map((reg: any) => {
        fetch(reg.value)
          .then((res) => res.json())
          .then((data) => {
            setFiles((arr: any) => [
              ...arr,
              { value: transformURI(data.fileURI) },
            ])
          })
      })
    }
  }, [])

  useEffect(() => {
    if (files) {
      files.map((file: any) => {
        fetch(file.value)
          .then((res) => res.json())
          .then((data) => {
            setVoucheesData((arr: any) => [...arr, data])
          })
      })
    }
  }, [])

  // console.log('vouvoucheesData', voucheesData)

  if (!profile && !submission)
    return (
      <div className="flex w-full items-center justify-center p-10 text-xl">
        <Jelly size={50} color="#FFAD33" />
        <p className="p-12 text-center font-mono text-xl tracking-tighter">
          Loading....
        </p>
      </div>
    )

  return (
    <div className="mx-auto max-w-2xl items-center pb-6 text-[15px]  text-gray-400">
      <p className="text-2xl font-bold text-gray-900">{profile.name}</p>
      {profile.frstName && <p>{profile.firstName}</p>}
      {profile.lastName && <p>{profile.lastName}</p>}
      {profile.bio && <p>{profile.bio}</p>}
      <div className="font-mono">
        <span className="items-center p-1">
          {conciseEthAddress(submission?.id)}
        </span>
        <Copy toCopy={submission?.id} />
      </div>
      {ensData && <p>{ensData}</p>}
      <div className="hidden gap-2 font-mono text-2xl ">
        {submission?.id}
        <Copy toCopy={submission?.id} />
      </div>
      {ensData && <p className="hidden">{ensData}</p>}

      <div className="mt-2 text-[15px] text-gray-400">
        <div className="md:inline-flex ">
          {photo && (
            <img
              className="mx-auto flex h-80 w-fit  object-cover"
              src={photo}
              alt="Registry Photo"
            />
          )}
          {/* <VideoPlayer Video={video} /> */}
        </div>

        {/* registered */}
        {submission?.registered === true && (
          <>
            <div className="mt-6 flex items-center text-orange-300">
              <SidebarRow
                Icon={BadgeCheckIcon}
                title="Registered"
                content={submission?.registered == true ? 'true' : 'false'}
              />
            </div>
            <Ubi ethAddress={submission?.id} /> {/* currency converter */}
          </>
        )}

        {/* vouching */}
        {submission?.registered === false && submission?.status == 'Vouching' && (
          <div className="mt-6 flex items-center text-blue-300">
            <SidebarRow
              Icon={HandIcon}
              title="Vouching"
              onClick={() => router.push('/registry')}
              content=""
            />
          </div>
        )}

        {/* pending registration */}
        {submission?.registered === false &&
          submission?.status === 'PendingRegistration' && (
            <div className="mt-6 flex items-center text-orange-500">
              <SidebarRow
                Icon={FireIcon}
                title="Pending Registration"
                onClick={() => router.push('/registry')}
                content=""
              />
            </div>
          )}

        {/* pending removal... */}
        {submission?.registered === false &&
          submission?.status === 'PendingRemoval' && (
            <div className="text-brown-300 mt-6 flex items-center text-red-500">
              <SidebarRow
                Icon={PauseIcon}
                title="Pending Registration"
                onClick={() => router.push('/registry')}
                content=""
              />
            </div>
          )}

        {/* expired */}
        {/* {submission?.registered === true && submission?.status === 'None' && (
            <div className="text-brown-300 mt-6 flex items-center text-red-500">
              <SidebarRow
                Icon={ClockIcon}
                title="Expired"
                onClick={() => router.push('/registry')}
                content=""
              />
            </div>
          )} */}

        {/* removed */}
        {submission?.registered === false && submission?.status === 'None' && (
          <div className="mt-6 flex items-center text-red-500">
            <SidebarRow
              Icon={BanIcon}
              title="Removed"
              onClick={() => router.push('/registry')}
              content=""
            />
          </div>
        )}

        {/* creation */}
        {submission?.registered && (
          <div className="flex items-center">
            <SidebarRow
              Icon={CalendarIcon}
              title="Creation"
              content={formatUnix(submission?.creationTime)}
            />
          </div>
        )}

        {/* submission */}
        {submission?.registered === true && (
          <div className="flex items-center">
            <SidebarRow
              Icon={CalendarIconFilled}
              title="Submission"
              content={formatUnix(submission?.submissionTime)}
            />
          </div>
        )}

        {/* connections */}
        {submission?.registered === true && (
          <>
            <div className="flex items-center text-purple-300">
              <SidebarRow
                Icon={UserGroupIcon}
                title="Vouchees"
                content={
                  submission?.vouchees?.length > 0 ? (
                    <div className="flex items-center">
                      {submission?.vouchees?.length}
                      <VoucheesModal
                        submission={submission}
                        //@ts-ignore
                        vouchees={voucheesData}
                      />
                    </div>
                  ) : (
                    '0'
                  )
                }
              />
            </div>
          </>
        )}

        {voucheesData?.map((vouchee: any, index: number) => {
          const photo = transformURI(vouchee?.photo)
          return (
            <span className="-ml-2 inline-block w-10 cursor-pointer rounded-full md:ml-0  ">
              <img
                onClick={() => router.push(`/registry/${submission?.id}`)}
                key={index}
                src={photo}
                className="h-10 w-10 rounded-full object-cover"
                alt=""
              />
            </span>
          )
        })}

        {/* {vouchees} */}
        {/* {submission?.vouchees?.map((submission: any, index: number) => (
          <div
            key={index}
            className="mt-2 inline-flex"
            onClick={() => router.push(`/registry/${submission?.id}`)}
          >
            <span className="-ml-2 inline-block w-10 cursor-pointer rounded-full md:ml-0  ">
              <img
                src={photo}
                className="h-10 w-10 rounded-full object-cover"
                alt=""
              />
            </span>
          </div>
        ))} */}
      </div>
      <div className="h-24" id="spacer"></div>
    </div>
  )
}

export default Profile
