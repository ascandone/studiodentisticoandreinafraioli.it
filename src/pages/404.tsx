import React, { FunctionComponent } from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Section from '../components/section'

const NotFoundPage: FunctionComponent = () => (
  <Layout>
    <SEO title="Not found" />
    <Section>
      <div className="md:text-center mt-8 h-64">
        <h5 className="subhead text-gray-500">Houston, abbiamo un 404</h5>
        <h1 className="text-6xl text-teal-500 mb-5">Oops</h1>

        <div className="text-gray-800">
          <p>Questa pagina non è esistente, o è stata rimossa.</p>

          <p>
            Puoi tornare al sito cliccando{' '}
            <a href="#" className="link text-gray-900 font-medium">
              qua.
            </a>
          </p>
        </div>
      </div>
    </Section>
  </Layout>
)

export default NotFoundPage
