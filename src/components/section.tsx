import { FunctionComponent } from 'react'
import React from 'react'

export const stdToSmSectionPx = 'px-4 sm:px-6'
export const mdSectionPx = 'md:px-6 lg:px-10 xl:px-0'

const Section: FunctionComponent<{ paddedSm?: boolean; small?: boolean }> = ({
  children,
  paddedSm = false,
  small = false,
}) => (
  <section
    className={`mx-auto ${paddedSm ? '' : stdToSmSectionPx} ${
      small ? 'max-w-2xl' : 'max-w-6xl'
    } md:px-6 lg:px-10 xl:px-0`}
  >
    {children}
  </section>
)

export default Section
