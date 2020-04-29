import React, { FunctionComponent } from 'react'

import Layout from '../components/layout'
import Landing from '../components/landing'
import Overview from '../components/overview'
import Studio from '../components/studio'
import Assicurazioni from '../components/assicurazioni'
import Contatti from '../components/contatti'
import { Helmet } from 'react-helmet'
import SEO from '../components/seo'

const wave = (
  <svg
    className="fill-current text-cool-gray-100 xl:-mt-24 xl:-mb-10"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 1440 320"
  >
    <path
      fillOpacity="1"
      d="M0,64L60,85.3C120,107,240,149,360,170.7C480,192,600,192,720,176C840,160,960,128,1080,112C1200,96,1320,96,1380,96L1440,96L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
    ></path>
  </svg>
)

const IndexPage: FunctionComponent = () => (
  <Layout>
    <SEO title="Studio Andreina Fraioli" />
    <Landing />
    {wave}
    <Overview />
    <Studio />
    <Assicurazioni />
  </Layout>
)

export default IndexPage
