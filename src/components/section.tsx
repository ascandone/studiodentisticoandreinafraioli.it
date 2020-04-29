import { FunctionComponent } from 'react'
import React from 'react'

export const sectionPx = 'px-4 sm:px-6'

const Section: FunctionComponent<{ paddedSm?: boolean }> = ({
  children,
  paddedSm = false,
}) => (
  <section className={`max-w-6xl mx-auto ${paddedSm ? '' : sectionPx} md:px-6 xl:px-0`}>
    {children}
  </section>
)

export default Section
