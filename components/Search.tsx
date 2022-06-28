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
          className="block h-10 w-80 rounded-md border border-gray-300 bg-white pl-10 text-gray-900 outline-none placeholder:ml-1 placeholder:font-medium placeholder:text-gray-900 focus:border-none
         focus:outline-none sm:text-sm"
          type="text"
          value={enteredText}
          placeholder="Search PoH registry"
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
