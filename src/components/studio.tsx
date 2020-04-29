import { FunctionComponent } from 'react'
import React from 'react'
// @ts-ignore
import studio from '../images/studio.jpg'
// @ts-ignore
import studio2 from '../images/studio-2.jpg'
import Section from './section'

const Studio: FunctionComponent = () => (
  <Section>
    <div className="mt-10">
      <h5 className="text-gray-500 subhead">Lo studio</h5>
      <h2 className="text-teal-500 title">Rilassante e accogliente.</h2>

      <div className="flex flex-col space-y-2  md:flex-row-reverse">
        <div className="flex-1">
          <img className="rounded shadow-xl" src={studio2} alt="" />
        </div>

        <div className="md:mr-5"></div>
        <div className="flex-1">
          <div className="text-gray-600 space-y-2 font-light">
            <p>
              Lo studio si trova a{' '}
              <span className="text-gray-800 font-normal">
                Piazzale dei Caduti della Montagnola 6
              </span>{' '}
              (00142 Roma) - scala A interno 2.
            </p>
            <p>
              Si può raggiungere dalla stazione Termini con l’autobus 714
              (direzione Nervi/Palazzo sport), fino alla fermata Colombo, poi 5
              minuti a piedi; o dalla fermata metro B Laurentina, con l’autobus
              671.
            </p>
            <p>
              Raggiungici tramite{' '}
              <a href="#" className="link text-gray-700 font-normal">
                google maps
              </a>{' '}
              o{' '}
              <a href="#" className="link text-gray-700 font-normal">
                citymapper
              </a>
            </p>
          </div>
          <div className="mt-5"></div>
        </div>
      </div>

      {/* <div className="bg-white h-64 max-w-3xl mx-auto rounded-xl">hello</div> */}
    </div>
  </Section>
)

export default Studio
