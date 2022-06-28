import { Fragment, SVGProps, useState } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import { CheckIcon, SelectorIcon } from '@heroicons/react/solid'

type Props = {
  selected: any
  setSelected: any
  filter: any
  setEnteredText: any
}

function classNames(...classes: String[]) {
  return classes.filter(Boolean).join(' ')
}

export default function ListBox({
  selected,
  setSelected,
  filter,
  setEnteredText,
}: Props) {
  return (
    <Listbox value={selected} onChange={setSelected}>
      {({ open }) => (
        <>
          <Listbox.Label className="block text-sm font-medium text-gray-700"></Listbox.Label>
          <div className="relative">
            <Listbox.Button className="relative h-10 w-80 cursor-default rounded-md border border-gray-300 bg-white py-2 pl-3 pr-10 text-left shadow-sm focus:border-none focus:outline-none focus:ring-0  sm:text-sm">
              <span className="flex items-center">
                {selected?.avatar && (
                  <img
                    src={selected?.avatar}
                    alt=""
                    className="h-6 w-6 flex-shrink-0 rounded-full"
                  />
                )}
                <div className="flex items-center"></div>
                <span className="ml-3 block truncate">{selected?.name}</span>
              </span>
              <span className="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2">
                <span className="mr-5"> {selected?.content}</span>
                <SelectorIcon
                  className="h-5 w-5 text-gray-400"
                  aria-hidden="true"
                />
              </span>
            </Listbox.Button>

            <Transition
              show={open}
              as={Fragment}
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Listbox.Options className="absolute z-10 mt-1 max-h-56 w-80 overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                {filter?.map((person: any) => (
                  <Listbox.Option
                    key={person.id}
                    className={({ active }) =>
                      classNames(
                        active ? 'bg-indigo-600 text-white' : 'text-gray-900',
                        'relative cursor-default select-none py-2 pl-3 pr-9'
                      )
                    }
                    value={person}
                  >
                    {({ selected, active }) => (
                      <>
                        <div className="flex justify-between">
                          {' '}
                          <div className="flex items-center">
                            <img
                              src={person.avatar}
                              alt=""
                              className="h-6 w-6 flex-shrink-0 rounded-full"
                            />
                            <span
                              className={classNames(
                                selected ? 'font-semibold' : 'font-normal',
                                'ml-3 block truncate'
                              )}
                            >
                              {person.name}
                            </span>
                          </div>
                          <div className="">{person.content}</div>
                        </div>

                        {selected ? (
                          <span
                            className={classNames(
                              active ? 'text-white' : 'text-indigo-600',
                              'absolute inset-y-0 right-0 flex items-center pr-4'
                            )}
                          >
                            <CheckIcon className="h-5 w-5" aria-hidden="true" />
                          </span>
                        ) : null}
                      </>
                    )}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </Transition>
          </div>
        </>
      )}
    </Listbox>
  )
}
