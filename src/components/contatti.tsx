import React, { FunctionComponent, Children } from 'react'
import Section, { stdToSmSectionPx, mdSectionPx } from './section'

const phoneIcon = (
  <svg
    className="h-5 w-5"
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth="2"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
  </svg>
)

const instagramIcon = (
  <svg
    className="h-5 w-5"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
)

const linkedinIcon = (
  <svg
    className="h-5 w-5"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
)

const facebookIcon = (
  <svg
    className="h-5 w-5"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
  </svg>
)

const ContactSection: FunctionComponent<{ title: string }> = ({
  title,
  children,
}) => (
  <div className="w-full lg:w-auto">
    <h5 className="subhead text-cool-gray-100 leading-none mb-2 font-semibold">
      {title}
    </h5>
    <ul className="text-cool-gray-300 font-light mt-3 space-y-2">
      {Children.map(children, child => (
        <li>{child}</li>
      ))}
    </ul>
  </div>
)

const Contatti: FunctionComponent = () => (
  <Section paddedSm>
    <div
      id="contacts"
      className={`bg-cool-gray-900 py-5 mt-10 md:mb-12 md:py-12 md:shadow-xl md:rounded-lg ${stdToSmSectionPx}`}
    >
      <div className="md:text-center max-w-lg mx-auto">
        <h5 className="text-cool-gray-300 subhead">Prenota una visita</h5>
        <h2 className="text-cool-gray-100 title">Mettiamoci in contatto!</h2>
        <div className="sm:mt-4"></div>
        <div className="text-cool-gray-300 space-y-2 font-light">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Id aliquam
            earum soluta laudantium est saepe voluptates !
          </p>
        </div>
        <div className="mt-8"></div>

        <div className="flex flex-col sm:flex-row justify-center">
          <a className="btn bg-teal-200 text-cool-gray-900">
            <div className="flex space-x-2 justify-center">
              {phoneIcon}
              <span className="block sm:hidden">Chiamaci</span>
              <span className="hidden sm:block">335 - 831 6532</span>
            </div>
          </a>

          <div className="mt-3 sm:mt-0 sm:mr-5"></div>

          <a className="btn bg-cool-gray-800 text-cool-gray-200 text-center">
            Scopri di più
          </a>
        </div>
      </div>

      <hr className="border-gray-700 my-16 mb-8 md:mx-10" />

      <div className="grid row-gap-10 col-gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 md:mx-10">
        <ContactSection title="Contatti">
          <a href="#" className="link dark">
            06 - 9021 1058
          </a>
          <a href="#" className="link dark">
            335 - 831 6532
          </a>
          <a href="#" className="link dark">
            andreina.fraioli@gmail.com
          </a>
          <div className="flex space-x-2">
            {instagramIcon} {facebookIcon} {linkedinIcon}
          </div>
        </ContactSection>
        <ContactSection title="Orari">
          <span>Lunedì 13:00 - 20:00</span>
          <span>Martedì 13:30 - 20:00</span>
          <span>Mercoledì 13:30 - 20:00</span>
          <span>Giovedì 12:00 - 20:00</span>
          <span>Venerdì 10:00 - 12:00</span>
        </ContactSection>

        <ContactSection title="Indirizzo">
          <span>Piazzale dei caduti della Montagnola 6</span>
          <span>00142, Roma (Italia)</span>
        </ContactSection>

        {/* <ContactSection title="Navigazione">
          <a href="#" className="link dark">
            Home
          </a>
          <a href="#" className="link dark">
            Chi sono
          </a>
          <a href="#" className="link dark">
            Lo studio
          </a>
          <a href="#" className="link dark">
            Servizi
          </a>
        </ContactSection> */}
      </div>

      <div className="text-cool-gray-400 font-mono md:mx-10 text-xs mt-10 text-center">
        <a href="#" className="link dark">
          Cookie policy
        </a>
        {' • '}
        <a href="#" className="link dark">
          Privacy policy
        </a>
        {' • '}
        Designed and developed by{' '}
        <a href="#" className="link dark">
          Alessandro Scandone
        </a>
      </div>
    </div>
  </Section>
)

export default Contatti
