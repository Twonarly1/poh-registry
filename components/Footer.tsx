import React from 'react'

export function Footer() {
  return (
    <footer className="relative bottom-0 flex flex-col items-center justify-center space-y-4 bg-slate-200 pt-8 text-gray-500">
      <div className="flex space-x-4">
        <a
          className="font-medium  tracking-wide underline transition duration-500 ease-in-out hover:text-primary-orange hover:text-opacity-50"
          href="https://github.com/Twonarly1/poh-tools"
        >
          GitHub
        </a>
        <a
          className="font-medium tracking-wide underline transition duration-500 ease-in-out hover:text-primary-orange hover:text-opacity-50"
          href="https://twitter.com/twonarly"
        >
          Twitter
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
