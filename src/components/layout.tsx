import React, { FunctionComponent, useRef, useEffect, useState } from 'react'
import './layout.css'
import Header from './header'
import Contatti from './contatti'
import { Helmet } from 'react-helmet'

const Layout: FunctionComponent<{}> = ({ children }) => {
  const contacts = useRef<HTMLDivElement>(null)
  const [darkBg, setDarkBg] = useState(false)
  useEffect(() => {
    document.onscroll = () => {
      setDarkBg(window.scrollY >= (contacts.current?.offsetTop ?? 0))
    }
  }, [])

  return (
    <>
      <Helmet>
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      <div className="h-screen antialiased">
        <Header darkBg={darkBg} />
        <main>{children}</main>
        <footer ref={contacts}>
          <Contatti />
        </footer>
      </div>
    </>
  )
}

export default Layout
