import React from 'react'

export function Footer() {
  return (
    <footer className="mx-auto flex w-full max-w-5xl flex-col items-center justify-center space-y-4 bg-slate-200 text-center text-gray-500">
      <div className="flex space-x-4">
        <a
          className="font-medium  tracking-wide underline transition duration-500 ease-in-out hover:text-purple-800 hover:text-opacity-50"
          href="https://github.com/Twonarly1/poh-tools"
        >
          GitHub
        </a>
        <a
          className="font-medium tracking-wide underline transition duration-500 ease-in-out hover:text-blue-800 hover:text-opacity-50"
          href="https://twitter.com/twonarly"
        >
          Twitter
        </a>
        <a
          className="font-medium tracking-wide underline transition duration-500 ease-in-out hover:text-orange-800 hover:text-opacity-50"
          href="https://www.proofofhumanity.id/"
          type="button"
        >
          {/* <img
              src="/images/proofofhumanity.png"
              className="h-8 w-8 rotate-12 rounded-full"
              alt=""
            /> */}
          POH
        </a>

        <a
          className="font-medium tracking-wide underline transition duration-500 ease-in-out hover:text-green-800 hover:text-opacity-50"
          href="https://linktr.ee/proofofhumanity"
          role="button"
        >
          {/* <img
              src="/images/linktree.svg"
              className=" h-8 w-8 rotate-12 rounded-full"
              alt=""
            /> */}
          LinkTree
        </a>
      </div>
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
    </footer>
  )
}
