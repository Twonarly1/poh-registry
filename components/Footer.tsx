import React from 'react'
import Tabs from './Tabs'

export function Footer() {
  return (
    <>
      <div className=" w-full bg-white shadow-lg xs:hidden">
        <div className="fixed bottom-0 z-50 mx-auto flex w-screen max-w-5xl items-center justify-between bg-white px-8 py-2 text-gray-500">
          <Tabs />
        </div>
      </div>
      <div className="fixed bottom-0 w-full max-w-5xl items-center bg-slate-200 text-center  text-gray-500">
        <div className="cursor-default">
          <span className="cursor-default transition duration-500 ease-in-out hover:text-primary-orange hover:text-opacity-50">
            © {new Date().getFullYear()} poh-tools
          </span>
          {' · '}
          <span>
            <span>Built by </span>
            <a
              className="underline transition duration-500 ease-in-out hover:text-primary-orange hover:text-opacity-50"
              href="https://github.com/Twonarly1"
            >
              Twonarly
            </a>
          </span>
        </div>
      </div>
    </>
  )
}
