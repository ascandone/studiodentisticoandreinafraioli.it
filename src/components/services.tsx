import React, { FunctionComponent, useState } from 'react'

import Layout from '../components/layout'
import Section from '../components/section'
import ChevronIcon from '../components/chevron-icon'
import { ServiceData } from '../types'

const Service: FunctionComponent<{ header: string }> = props => {
  const [collapsed, setCollapsed] = useState(true)

  return (
    <div>
      <div className="flex">
        <h2 className="font-semibold text-gray-700">{props.header}</h2>
        <div className="mr-2"></div>
        <ChevronIcon
          collapsed={collapsed}
          onTap={() => setCollapsed(!collapsed)}
        />
      </div>
      <div
        className={`overflow-hidden text-gray-600 text-sm rich-text ${
          collapsed ? 'h-0' : 'h-auto'
        }`}
      >
        <div className="mt-1">{props.children}</div>
      </div>
    </div>
  )
}

const Services: FunctionComponent<{
  header: string
  descr?: string
  services: Array<ServiceData>
}> = props => (
  <Layout>
    <Section>
      <div className="flex-1 md:mt-10">
        <h5 className="subhead text-gray-500">servizi</h5>
        <h2 className="title text-teal-500">{props.header}</h2>
        {props.descr == null ? null : (
          <p className="text-gray-800 text-sm">{props.descr}</p>
        )}
        <div className="mb-5"></div>
      </div>
      <div className="space-y-4">
        {props.services.map(({ header, body }, i) => (
          <Service header={header} key={i}>
            {body}
          </Service>
        ))}
      </div>
    </Section>
  </Layout>
)

export default Services
