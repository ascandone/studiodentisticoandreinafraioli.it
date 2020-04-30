import React, { FunctionComponent, useState } from 'react'
import { Link } from 'gatsby'
import Section, { mdSectionPx, stdToSmSectionPx } from './section'

const NavLink: FunctionComponent<{ to: string }> = props => (
  <Link
    className="btn text-cool-gray-600 hover:bg-cool-gray-100"
    activeClassName="dotted font-semibold text-cool-gray-900 cursor-default"
    {...props}
  />
)

const MobileNav: FunctionComponent<{ expanded: boolean }> = ({ expanded }) => (
  <div
    className={`transition-all duration-200 fixed w-screen overflow-hidden bottom-0 ${
      expanded ? 'h-screen' : 'h-0'
    }`}
    style={{ touchAction: 'none' }}
  >
    <div className="bg-white h-full w-full pt-20 wrapper">TODO: mobile nav</div>
    {/* <div className="bg-green-400 opacity-75 absolute top-0 left-0 right-0 bottom-0"></div>
  <div className="absolute top-0 left-0 right-0 bottom-0">
    hello
  </div>  */}
  </div>
)

// <div className="bg-cool-gray-200 rounded-full p-2">
const menuIcon = (isDark: boolean) => (
  <svg
    className={`w-8 h-8 transition-color duration-100 ${
      isDark ? 'text-transparent' : 'text-cool-gray-900'
    }`}
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth="2"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path d="M4 6h16M4 12h16m-7 6h7"></path>
  </svg>
)

const xIcon = (
  <svg
    className="w-8 h-8"
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth="2"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path d="M6 18L18 6M6 6l12 12"></path>
  </svg>
)

const arrowDownIcon = (
  <svg
    className="w-5"
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth="2"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path d="M19 9l-7 7-7-7"></path>
  </svg>
)

const DesktopNav: FunctionComponent = () => (
  <nav className="hidden text-base lg:flex space-x-1 items-center flex-shrink-0">
    <NavLink to="/">Home</NavLink>
    <NavLink to="/about/">Chi sono</NavLink>
    <NavLink to="/404">Lo studio</NavLink>

    <div className="relative">
      <NavLink to="/contacts">
        <div className="flex">
          Servizi
          <div className="mr-1"></div>
          {arrowDownIcon}
        </div>
      </NavLink>
    </div>

    <NavLink to="#contacts">Contatti</NavLink>
  </nav>
)

const Header: FunctionComponent<{ darkBg?: boolean }> = ({
  darkBg = false,
}) => {
  const [expanded, setExpanded] = useState(false)

  return (
    <>
      <header>
        <Section>
          <MobileNav expanded={expanded} />
          <div className="h-20 flex-shrink-0 flex justify-between items-center w-full">
            <a className={`${expanded ? 'fixed' : ''} flex-shrink`} href="/">
              <h2 className="text-xl font-bold tracking-wider text-teal-900">
                Studio Andreina Fraioli
              </h2>
            </a>

            <DesktopNav />

            <button
              onClick={_ => setExpanded(!expanded)}
              className={`wrapper lg:hidden fixed right-0 z-10 focus:outline-none ${stdToSmSectionPx} ${mdSectionPx}`}
            >
              {expanded ? xIcon : menuIcon(darkBg)}
            </button>
          </div>
        </Section>
      </header>
    </>
  )
}

export default Header
