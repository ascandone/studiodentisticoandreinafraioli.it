import React, { FunctionComponent, Children } from 'react'
import Section, { stdToSmSectionPx, mdSectionPx } from './section'
import SocialIcon from './social-icon'
import { Link } from 'gatsby'

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

const linkedinIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-5 w-5 fill-current"
    viewBox="0 0 24 24"
  >
    <path d="M20,3H4C3.447,3,3,3.448,3,4v16c0,0.552,0.447,1,1,1h16c0.553,0,1-0.448,1-1V4C21,3.448,20.553,3,20,3z M8.339,18.337H5.667	v-8.59h2.672V18.337z M7.003,8.574c-0.856,0-1.548-0.694-1.548-1.548s0.691-1.548,1.548-1.548c0.854,0,1.548,0.693,1.548,1.548	S7.857,8.574,7.003,8.574z M18.338,18.337h-2.669V14.16c0-0.996-0.018-2.277-1.388-2.277c-1.39,0-1.601,1.086-1.601,2.207v4.248	h-2.667v-8.59h2.56v1.174h0.037c0.355-0.675,1.227-1.387,2.524-1.387c2.704,0,3.203,1.778,3.203,4.092V18.337z" />
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
      id="contatti"
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
            <a href="tel:3358316532" className="flex space-x-2 justify-center">
              {phoneIcon}
              <span className="block sm:hidden">Chiamaci</span>
              <span className="hidden sm:block">335 - 831 6532</span>
            </a>
          </a>

          <div className="mt-3 sm:mt-0 sm:mr-5"></div>

          <Link
            to="/about/"
            className="btn bg-cool-gray-800 text-cool-gray-200 text-center"
            activeClassName="hidden"
          >
            Scopri di più
          </Link>
        </div>
      </div>

      <hr className="border-gray-700 my-16 mb-8 md:mx-10" />

      <div className="grid row-gap-10 col-gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 md:mx-10">
        <ContactSection title="Contatti">
          <a href="tel:0690211058" className="link dark">
            06 - 9021 1058
          </a>
          <a href="tel:3358316532" className="link dark">
            335 - 831 6532
          </a>
          <a href="mailto:andreina.fraioli@gmail.com" className="link dark">
            andreina.fraioli@gmail.com
          </a>
          <div className="flex">
            <SocialIcon href="https://it.linkedin.com/in/andreina-fraioli-09496557">
              {linkedinIcon}
            </SocialIcon>
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
      </div>
      {/*
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
      </div> */}
    </div>
  </Section>
)

export default Contatti
