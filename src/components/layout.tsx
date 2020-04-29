import React, { FunctionComponent } from 'react'
import { Footer } from './footer'
import './layout.css'
import Header from './header'
import { Helmet } from 'react-helmet'
import Contatti from './contatti'

const Layout: FunctionComponent<{}> = ({ children }) => (
  <div className="h-screen flex flex-col">
    <Helmet>
      <link
        href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
        rel="stylesheet"
      />
    </Helmet>

    <Header />
    <main className="flex-1">{children}</main>
    <div>
      <Contatti />
    </div>
  </div>
)

export default Layout
