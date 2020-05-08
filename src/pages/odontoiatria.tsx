import React, { FunctionComponent } from 'react'
import Services from '../components/services'
import data from '../data/servizi-odontoiatria'

const Odontoiatria: FunctionComponent = () => (
  <Services
    header="Odontoiatria"
    services={data}
    descr="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum aspernatur nemo, voluptate praesentium magni enim, reprehenderit, facilis ipsa quo labore odit ducimus quidem deserunt minus unde quos. Dolor, fugiat dolore."
  />
)

export default Odontoiatria
