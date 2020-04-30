import { FunctionComponent } from 'react'
import React from 'react'

export const stdToSmSectionPx = 'px-4 sm:px-6'
export const mdSectionPx = 'md:px-6 lg:px-10 xl:px-0'

const Section: FunctionComponent<{ paddedSm?: boolean }> = ({
  children,
  paddedSm = false,
}) => (
  <section
    className={`max-w-6xl mx-auto ${
      paddedSm ? '' : stdToSmSectionPx
    } md:px-6 lg:px-10 xl:px-0`}
  >
    {children}
  </section>
)

export default Section
