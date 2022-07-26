import React from 'react'
import router from 'next/router'
import {
  ArrowDownIcon,
  BadgeCheckIcon,
  BanIcon,
  CalendarIcon,
  FireIcon,
  HandIcon,
  PauseIcon,
  UserGroupIcon,
} from '@heroicons/react/outline'
import { useEnsName } from 'wagmi'
import { Jelly } from '@uiball/loaders'
import { CalendarIcon as CalendarIconFilled } from '@heroicons/react/solid'
import { conciseEthAddress, formatUnix } from '../lib/utils'
import Ubi from './Ubi'
import Copy from './Copy'
import Avatar from './Avatar'
import SidebarRow from './MenuList'
import VoucheesModal from './VoucheesModal'
import Timeago from 'react-timeago'
import { Profile } from '../typings'

const Profile = ({
  profile,
  submission,
  ethAddress,
  photo,
  video,
}: Profile) => {
  const { data: ensData } = useEnsName({
    address: ethAddress,
  })
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
    <div className="bg-slate-200">
      <div className="mx-auto mt-10 max-w-5xl items-center rounded bg-white pb-12 shadow-lg">
        <div className="flex items-center space-x-2">
          {/* user identification */}
          <div className="mx-auto -mt-5 flex">
            <Avatar seed={ethAddress as string} large />
            <div className="ml-2 mt-6 font-mono text-3xl font-medium md:hidden">
              {conciseEthAddress(ethAddress)}
              <br />
              <div className="text-left text-sm tracking-wide text-gray-400">
                {ensData}
              </div>
            </div>
            <div>
              <div className="ml-2 mt-7 hidden font-mono text-2xl font-medium md:flex">
                {ethAddress}
              </div>
              <div className="ml-[10px] hidden text-sm tracking-wide text-gray-400 md:flex">
                {ensData}
              </div>
            </div>
            {ethAddress && (
              <div className="mt-7 ml-2">
                <Copy toCopy={ethAddress}></Copy>
              </div>
            )}
          </div>
        </div>

        {/* photo large screen */}
        <div className="mt-6 text-lg text-gray-400">
          <div className="md:inline-flex ">
            {photo && (
              <img
                className="mx-auto flex h-80 w-fit rounded object-cover"
                src={photo}
                alt="Registry Photo"
              />
            )}
            {/* <VideoPlayer Video={video} /> */}
          </div>
          <p className="mt-4 text-4xl font-bold">{profile.name}</p>
          <p className="text-sm uppercase">
            {profile.firstName}&nbsp;{profile.lastName}
          </p>
          <p className="text-sm">{profile.bio}</p>

          {/* registered */}
          {submission?.registered === true && (
            <>
              <div className="mt-6 flex items-center text-orange-300">
                <SidebarRow
                  Icon={BadgeCheckIcon}
                  title="Registered"
                  content=""
                />
              </div>
              <Ubi ethAddress={ethAddress} /> {/* currency converter */}
            </>
          )}
          {/* vouching */}
          {submission?.registered === false &&
            submission?.status == 'Vouching' && (
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
                        <VoucheesModal submission={submission} />
                      </div>
                    ) : (
                      '0'
                    )
                  }
                />
              </div>
            </>
          )}
          {submission?.vouchees?.map((submission: any, index: number) => (
            <div
              key={index}
              className="mt-4 inline-flex"
              onClick={() => router.push(`/registry/${submission.id}`)}
            >
              <span className="-ml-2 inline-block w-8 cursor-pointer rounded-full md:ml-0  ">
                <span className="">
                  <Avatar seed={submission.id as string} />
                </span>
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Profile
