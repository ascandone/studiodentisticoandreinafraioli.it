import React, { FunctionComponent } from 'react'
import Services from '../components/services'
import data from '../data/servizi-odontoiatria'

const Odontoiatria: FunctionComponent = () => (
  <Services header="Odontoiatria" services={data} />
)

export default Odontoiatria
