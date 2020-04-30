import React, { FunctionComponent } from 'react'
import Section from './section'

const checkIcon = (
  <svg
    className="w-6 h-6 inline"
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth="2"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
  </svg>
)

const data = [
  {
    header: 'Prima visita gratuita',
    body: (
      <>
        La prima visita presso il nostro studio è sempre gratuita.
        <br />
        Le visite di controllo sono il miglior strumento per una buona
        prevenzione.
      </>
    ),
  },
  {
    header: 'Preventivi personalizzati senza impegno',
    body:
      'I piani di cura sono personalizzati e i pagamenti rateizzabili a tasso zero.',
  },
  {
    header: 'Soluzioni per pazienti odontofobici',
    body: `
      Lo studio della Dr.ssa Fraioli si avvale dell’aiuto professionale di un
      anestesista per risolvere i casi più complessi in una sola seduta.
    `,
  },
]

const Overview: FunctionComponent = () => (
  <div className="bg-cool-gray-100 pb-10">
    <Section>
      <div className="section-max-w wrapper flex justify-between space-y-10 flex-col md:items-start md:space-x-8 md:space-y-0 md:flex-row">
        {data.map(({ header, body }, i) => (
          <div key={i} className="md:max-w-xs text-gray-600 md:flex-1">
            <div>
              <h3 className="font-normal text-gray-700 text-lg">
                <span className="mr-1">{checkIcon}</span>
                {header}
              </h3>
            </div>

            <div className="mt-2"></div>
            <p className="font-light">{body}</p>
          </div>
        ))}
      </div>
    </Section>
  </div>
)

export default Overview
