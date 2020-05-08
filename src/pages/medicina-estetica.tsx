import React, { FunctionComponent } from 'react'
import Services from '../components/services'
import data from '../data/servizi-medest'

const MedicinaEstetica: FunctionComponent = () => (
  <Services header="Medicina Estetica" services={data} />
)

export default MedicinaEstetica
