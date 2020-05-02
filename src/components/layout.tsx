import React, { FunctionComponent, useRef, useEffect, useState } from 'react'
import './layout.css'
import Header from './header'
import Contatti from './contatti'

const Layout: FunctionComponent<{}> = ({ children }) => {
  const contacts = useRef<HTMLDivElement>(null)
  const [darkBg, setDarkBg] = useState(false)
  useEffect(() => {
    document.onscroll = () => {
      setDarkBg(window.scrollY >= (contacts.current?.offsetTop ?? 0))
    }
  }, [])

  return (
    <div className="h-screen flex flex-col">
      <Header darkBg={darkBg} />
      <main className="flex-1">{children}</main>
      <footer ref={contacts}>
        <Contatti />
      </footer>
    </div>
  )
}

export default Layout
