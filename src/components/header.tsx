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

const MobileLink: FunctionComponent<{ to: string }> = props => (
  <Link
    className="btn text-cool-gray-600"
    activeClassName="font-semibold text-cool-gray-900 cursor-default"
    {...props}
  />
)

const MobileNav: FunctionComponent<{ expanded: boolean }> = ({ expanded }) => (
  <div
    className={`fixed z-10 overflow-hidden top-0 right-0 left-0 bottom-0 ${
      expanded ? '' : 'hidden'
    }`}
    style={{ touchAction: expanded ? 'none' : 'auto' }}
  >
    <div className="bg-white h-full w-full pt-20 wrapper">
      <div className="flex items-center justify-end h-full px-16">
        <div className="flex flex-col h-64 justify-between text-right">
          <MobileLink to="/">Home</MobileLink>
          <MobileLink to="/about">Chi sono</MobileLink>
          <MobileLink to="/odontoiatria">Odontoiatria</MobileLink>
          <MobileLink to="/medicina-estetica">Medicina estetica</MobileLink>
        </div>
      </div>
    </div>
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
    <NavLink to="/odontoiatria/">Odontoiatria</NavLink>
    <NavLink to="/medicina-estetica/">Medicina Estetica</NavLink>

    {/* <div className="relative">
      <NavLink to="/services">
        <div className="flex">
          Servizi
          <div className="mr-1"></div>
          {arrowDownIcon}
        </div>
      </NavLink>
    </div> */}

    <a
      href="#contatti"
      className="btn text-cool-gray-600 hover:bg-cool-gray-100"
    >
      Contatti
    </a>
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
            <Link to="/" className="flex-shrink">
              <h2 className="text-xl mr-12 font-bold tracking-wider text-teal-900">
                Studio Dott. Andreina Fraioli
              </h2>
            </Link>

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
