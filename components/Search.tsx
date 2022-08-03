import React from 'react'
import { SearchIcon } from '@heroicons/react/outline'
import { Input } from '../typings'

const Search = ({
  handleSubmit,
  enteredText,
  setEnteredText,
  placeholder,
}: Input) => {
  return (
    <div className="mx-auto max-w-lg p-2 text-center ">
      <form
        className=""
        onSubmit={(e) => {
          e.preventDefault()
          handleSubmit()
        }}
      >
        <div className="relative mx-auto mt-0 rounded-full">
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
            <SearchIcon className="h-6 w-6 text-gray-500" />
          </div>
          <input
            className="hover-border-gray-400 block w-full rounded-full border border-gray-300 py-1 pl-10 text-left text-lg font-semibold shadow-none outline-none placeholder:text-lg hover:shadow-sm  dark:text-black md:w-full md:max-w-lg xs:placeholder:text-lg"
            type="text"
            value={enteredText}
            // toDo: add ENS support.
            placeholder={placeholder}
            required
            autoComplete="true"
            spellCheck="false"
            onChange={(e) => {
              e.preventDefault
              setEnteredText(e.target.value)
              //setNameSearched(e.target.value)
              //setAddressSearched(e.target.value)
            }}
          />
        </div>
      </form>
    </div>
  )
}

export default Search
