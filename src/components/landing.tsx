import React, { FunctionComponent } from 'react'
import { useStaticQuery, graphql, Link } from 'gatsby'
import Img from 'gatsby-image'
import Section from './section'

const imageQuery = graphql`
  query {
    file(relativePath: { eq: "landing-pic-cut.png" }) {
      childImageSharp {
        # Specify a fluid image and fragment
        # The default maxWidth is 800 pixels
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

const Landing: FunctionComponent = () => {
  const data = useStaticQuery(imageQuery)

  return (
    <Section>
      <div className="flex flex-col justify-center md:flex-row">
        <div className="flex-1 md:mr-16 lg:mr-24">
          <div className="flex flex-col h-full justify-center">
            <h3 className="text-5xl text-teal-500 font-bold leading-tight">
              Il tuo nuovo dentista preferito.
            </h3>

            <div className="mt-5"></div>

            <p className="text-lg font-light text-gray-600 leading-relaxed">
              Presso il nostro studio effettuiamo qualsiasi tipo di intervento{' '}
              <Link
                to="/odontoiatria/"
                className="link font-normal text-gray-700"
              >
                Odontoiatrico
              </Link>{' '}
              e di{' '}
              <Link
                to="/medicina-estetica/"
                className="link font-normal text-gray-700"
              >
                Medicina Estetica
              </Link>
              .
              <br />
              Ai nostri pazienti garantiamo un approccio dedicato e trattamenti
              di alta qualità.
            </p>

            <div className="mt-5"></div>

            <div className="flex flex-col items-center sm:flex-row-reverse justify-end">
              <p className="text-sm text-gray-600 max-w-xs">
                Richiedi la tua prima visita{' '}
                <b className="font-semibold">gratuitamente</b>.
              </p>

              <div className="mt-6 sm:mr-8"></div>

              <a
                href="#contatti"
                className="btn shadow-lg bg-teal-400 text-white transition-all duration-200 hover:shadow-xl"
              >
                Contattaci
              </a>
            </div>
          </div>
        </div>

        <div className="self-center mt-10 flex-1 w-full max-w-xs md:max-w-md">
          <Img
            fluid={data.file.childImageSharp.fluid}
            alt="Foto della dottoressa Andreina Fraioli"
          />
        </div>
      </div>
    </Section>
  )
}

export default Landing
