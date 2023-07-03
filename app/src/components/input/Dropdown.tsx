"use client";

import { useState } from "react";

const Dropdown = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <div className="relative h-full">
      <button
        onClick={() => setShowDropdown(!showDropdown)}
        id="dropdownDefaultButton"
        data-dropdown-toggle="dropdown"
        className="p-2 h-full flex font-sans border w-full justify-between font-medium rounded text-sm text-center items-center"
        type="button"
      >
        <svg
          className="ml-auto w-4 h-4"
          aria-hidden="true"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 9l-7 7-7-7"
          ></path>
        </svg>
      </button>

      {showDropdown && (
        <div
          id="dropdown"
          className="absolute z-10 w-full bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700"
        >
          <ul
            className="py-2 text-sm text-gray-700 dark:text-gray-200"
            aria-labelledby="dropdownDefaultButton"
          >
            <li className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
              Dashboard
            </li>
            <li className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
              Settings
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export { Dropdown };
