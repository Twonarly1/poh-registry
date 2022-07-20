import React from 'react'

export function Footer() {
  return (
    <footer className="mx-auto flex w-full max-w-5xl flex-col items-center justify-center space-y-4 bg-slate-200 text-center text-gray-500">
      <div className="flex space-x-4">
        <a
          className="footer hover:text-purple-800"
          href="https://github.com/Twonarly1/poh-tools"
        >
          GitHub
        </a>
        <a
          className="footer hover:text-blue-800"
          href="https://twitter.com/twonarly"
        >
          Twitter
        </a>
        <a
          className="footer hover:text-orange-800"
          href="https://www.proofofhumanity.id/"
          type="button"
        >
          POH
        </a>

        <a
          className="footer hover:text-green-800"
          href="https://linktr.ee/proofofhumanity"
          role="button"
        >
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
