import React, { Fragment } from 'react'
import { Transition, Dialog } from '@headlessui/react'
import { VideoCameraIcon, XIcon } from '@heroicons/react/outline'
import { useRecoilState } from 'recoil'
import ReactPlayer from 'react-player'
import { reactPlayerState } from '../atoms/ReactPlayerAtom'

type Props = {
  Video: string
}

const VideoPlayer = ({ Video }: Props) => {
  let [isOpen, setIsOpen] = useRecoilState(reactPlayerState)

  return (
    <>
      <div
        className="navBtn"
        onClick={() => {
          setIsOpen(true)
        }}
      >
        <VideoCameraIcon className="-mt-7 ml-2 h-6 w-6 text-white md:-ml-[34px] md:mt-2" />
      </div>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-10 overflow-y-auto"
          onClose={() => {
            setIsOpen(false)
          }}
        >
          <div className="min-h-screen px-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-50" />
            </Transition.Child>

            {/* This element is to trick the browser into centering the modal contents. */}
            <span
              className="-mt-24 inline-block h-screen align-middle"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div className="dialog">
                <Dialog.Title
                  as="h3"
                  className="text-lg font-medium leading-6"
                ></Dialog.Title>
                <button onClick={() => setIsOpen(false)}>
                  <XIcon className="absolute  top-4 right-4 w-7 text-white " />
                </button>
                <ReactPlayer width={400} height={240} controls url={Video} />
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}

export default VideoPlayer
