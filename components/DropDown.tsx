'use client'

import { Table } from "./TableSpace"
import { Combobox, Transition } from "@headlessui/react"
import { Dispatch, SetStateAction, useState, Fragment } from "react"
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid'

type DropDownProps = {
    tableList: Table[],
    currentTable: Table,
    setCurrentTable: Dispatch<SetStateAction<Table>>
}

export default function DropDown({ tableList, currentTable, setCurrentTable }: DropDownProps) {
    const [query, setQuery] = useState('')

    const filteredTables = query === '' ? tableList : tableList.filter((table) => {
        return table.header.toLowerCase().includes(query.toLowerCase())
    })

    return (
        <div className="w-full">
            <Combobox value={currentTable} onChange={setCurrentTable}>
                <div className="relative mt-1 flex flex-col justify-center items-center">
                    <div className="relative sm:w-1/2 w-full cursor-default overflow-hidden rounded-lg bg-white text-left shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-teal-300 sm:text-sm">
                        <Combobox.Input onChange={(event) => setQuery(event.target.value)} displayValue={(table: Table) => table.header} className="w-full bg-gray-100 border-none py-2 pl-3 pr-10 text-sm leading-5 text-gray-900 focus:ring-0 outline-none" />
                        <Combobox.Button className="absolute inset-y-0 right-0 flex items-center pr-2">
                            <ChevronUpDownIcon
                                className="h-5 w-5 text-gray-400"
                                aria-hidden="true"
                            />
                        </Combobox.Button>
                    </div>
                    <Transition
                        as={Fragment}
                        leave="transition ease-in duration-100"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                        afterLeave={() => setQuery('')}
                    >
                        <Combobox.Options className="absolute z-10 mt-1 max-h-60 w-1/2 top-10 overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                            {filteredTables.length === 0 && query !== '' ? (
                                <div className="relative cursor-default select-none py-2 px-4 text-gray-700">
                                    Nothing found.
                                </div>
                            ) : (
                                filteredTables.map((table) => (
                                    <Combobox.Option key={table.header} value={table} className={({ active }) =>
                                        `relative cursor-default select-none py-2 pl-10 pr-4 ${active ? 'bg-teal-600 text-white' : 'text-gray-900'
                                        }`
                                    }>
                                        {({ selected, active }) => (
                                            <>
                                                <span
                                                    className={`block truncate ${selected ? 'font-medium' : 'font-normal'
                                                        }`}
                                                >
                                                    {table.header}
                                                </span>
                                                {selected ? (
                                                    <span
                                                        className={`absolute inset-y-0 left-0 flex items-center pl-3 ${active ? 'text-white' : 'text-teal-600'
                                                            }`}
                                                    >
                                                        <CheckIcon className="h-5 w-5" aria-hidden="true" />
                                                    </span>
                                                ) : null}
                                            </>
                                        )}
                                    </Combobox.Option>
                                ))
                            )}
                        </Combobox.Options>
                    </Transition>
                </div>
            </Combobox>
        </div>
    )
}