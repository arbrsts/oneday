'use client'

import { useState } from "react"

const Dropdown = () => {
    const [showDropdown, setShowDropdown] = useState(false)


    return (
        <div className="relative">
            <div onClick={() => setShowDropdown(!showDropdown)}>
                <button id="dropdownDefaultButton" data-dropdown-toggle="dropdown" className="font-sans border w-full flex justify-between focus:ring-1 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center" type="button">
                    Dropdown button
                    <svg className="w-4 h-4 ml-2" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                    </svg>
                </button>
            </div>

            {showDropdown &&
                <div id="dropdown" className="absolute z-10 w-full bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700">
                    <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
                            <li className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</li>
                            <li className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Settings</li>
                    </ul>
                </div>}

        </div>
    )
}

export { Dropdown }