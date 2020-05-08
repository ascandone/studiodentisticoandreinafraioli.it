import React, { FunctionComponent } from 'react'

const ChevronIcon: FunctionComponent<{
  collapsed: boolean
  onTap: () => void
}> = props => (
  <button
    onClick={props.onTap}
    className="p-1 shadow rounded-full text-cool-gray-700 focus:outline-none"
  >
    <svg
      className={`transition-transform ease-in-out duration-200 h-4 w-4 ${
        props.collapsed ? '' : 'transform -rotate-180'
      }`}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="6 9 12 15 18 9"></polyline>
    </svg>
  </button>
)

export default ChevronIcon
