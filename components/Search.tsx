import React from 'react'
import { SearchIcon } from '@heroicons/react/outline'

const Search = ({
  submitAddress,
  enteredText,
  setEnteredText,
  setNameSearched,
  setAddressSearched,
}: Input) => {
  return (
    <form
      className=""
      onSubmit={(e) => {
        e.preventDefault()
        submitAddress()
      }}
    >
      <div className="relative mx-auto mt-0 rounded-md shadow-sm">
        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
          <SearchIcon className="h-5 w-5 text-gray-700" aria-hidden="true" />
        </div>
        <input
          className="border-primary-light block w-full rounded-full border-none bg-slate-100 py-3 pl-10 text-left text-lg font-semibold shadow-none outline-none focus:border-none focus:bg-white focus:shadow-none focus:outline-none focus:ring-0 active:bg-white dark:text-black md:w-full md:max-w-lg"
          type="text"
          value={enteredText}
          // toDo: add ENS support.
          placeholder="Search registry by name or address"
          required
          autoComplete="true"
          spellCheck="false"
          onChange={(e) => {
            e.preventDefault
            setEnteredText(e.target.value)
            setNameSearched(e.target.value)
            setAddressSearched(e.target.value)
          }}
        />
      </div>
    </form>
  )
}

export default Search
