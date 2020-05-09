import { FunctionComponent } from 'react'
import React from 'react'
import Section from './section'

// @ts-ignore
import studio1 from '../images/studio-1.jpg'
// @ts-ignore
import studio2 from '../images/studio-2.jpg'
// @ts-ignore
import studio3 from '../images/studio-3.jpg'
// @ts-ignore
import studio4 from '../images/studio-4.jpg'
// @ts-ignore
import studio5 from '../images/studio-5.jpg'
// @ts-ignore
import studio6 from '../images/studio-6.jpg'

const Studio: FunctionComponent = () => (
  <>
    <Section>
      <div className="mt-16 text-center ">
        <div className="max-w-xl mx-auto">
          <h5 className="text-gray-500 subhead">Lo studio</h5>
          <h2 className="text-teal-500 title">Rilassante e accogliente.</h2>
        </div>

        <div className="">
          <div className="flex-1">
            <div className="text-gray-600 font-light max-w-4xl mx-auto">
              <p>
                Lo studio si trova a{' '}
                <span className="text-gray-800 font-normal">
                  Piazzale dei Caduti della Montagnola
                </span>{' '}
                - scala A interno 2.
              </p>

              <p>
                Raggiungici tramite{' '}
                <a
                  href="https://goo.gl/maps/nCHWdboDRGwvEALb8"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link text-gray-700 font-normal"
                >
                  google maps
                </a>{' '}
                o{' '}
                <a
                  href="https://citymapper.com/go/qjdvkuft34"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link text-gray-700 font-normal"
                >
                  citymapper
                </a>
              </p>
              {/* <button className="btn bg-teal-100 my-5 text-teal-900 hover:bg-teal-200">
                Scopri di più
              </button> */}
            </div>
          </div>
        </div>
      </div>
    </Section>
    <div className="mt-5"></div>
    <div className="overflow-hidden">
      <div className="flex space-x-3 h-32 sm:h-40 md:h-48 lg:h-64 mx-auto justify-center">
        {[studio4, studio2, studio1].map((src, i) => (
          <img key={i} className="rounded h-full" src={src} alt="" />
        ))}
      </div>
      <div className="mt-5"></div>
      <div className="flex space-x-3 h-32 sm:h-40 md:h-48 lg:h-64 mx-auto justify-center">
        {[studio3, studio5, studio6].map((src, i) => (
          <img key={i} className="rounded h-full" src={src} alt="" />
        ))}
      </div>
    </div>

    <div className="mt-20"></div>
  </>
)

export default Studio
