import React from 'react'

export function Footer() {
  return (
    <footer className="relative bottom-0 flex flex-col items-center justify-center space-y-4 bg-slate-200 pt-8">
      <div className="flex space-x-4">
        <a className="underline" href="https://github.com/Twonarly1/poh-tools">
          GitHub
        </a>
        <a className="underline" href="https://twitter.com/twonarly">
          Twitter
        </a>
      </div>
      <div className="">
        <span>© {new Date().getFullYear()} poh-tools</span>
        {' · '}
        <span>
          <span>Built by </span>
          <a className="underline" href="https://github.com/Twonarly1">
            Twonarly
          </a>
        </span>
      </div>
    </footer>
  )
}
