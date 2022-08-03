import React from 'react'
import Tabs from './Tabs'

export default function Footer() {
  return (
    <>
      <div className="relative w-full bg-white xs:hidden ">
        <div className="fixed bottom-3 mx-auto flex w-screen max-w-5xl items-center justify-between bg-gray-200 px-8 py-2 text-gray-500">
          <Tabs />
        </div>
      </div>
      <div className="fixed bottom-0 mx-auto w-full items-center bg-gray-200 text-center text-[9px] text-gray-500 xs:bg-white ">
        <div className="cursor-default">
          <span className="cursor-default transition duration-500 ease-in-out hover:text-primary-orange hover:text-opacity-50">
            © {new Date().getFullYear()} poh-tools
          </span>
          {' · '}
          <span>
            <span>Built by </span>
            <a className="hover:underline" href="https://github.com/Twonarly1">
              Twonarly
            </a>
          </span>
        </div>
      </div>
    </>
  )
}
