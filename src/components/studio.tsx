import { FunctionComponent } from 'react'
import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'
import Section from './section'

const query = graphql`
  query {
    image1: file(relativePath: { eq: "studio/studio-1.jpg" }) {
      childImageSharp {
        fluid {
          aspectRatio
          ...GatsbyImageSharpFluid
        }
      }
    }
    image2: file(relativePath: { eq: "studio/studio-2.jpg" }) {
      childImageSharp {
        fluid {
          aspectRatio
          ...GatsbyImageSharpFluid
        }
      }
    }
    image3: file(relativePath: { eq: "studio/studio-3.jpg" }) {
      childImageSharp {
        fluid {
          aspectRatio
          ...GatsbyImageSharpFluid
        }
      }
    }
    image4: file(relativePath: { eq: "studio/studio-4.jpg" }) {
      childImageSharp {
        fluid {
          aspectRatio
          ...GatsbyImageSharpFluid
        }
      }
    }
    image5: file(relativePath: { eq: "studio/studio-5.jpg" }) {
      childImageSharp {
        fluid {
          aspectRatio
          ...GatsbyImageSharpFluid
        }
      }
    }
    image6: file(relativePath: { eq: "studio/studio-6.jpg" }) {
      childImageSharp {
        fluid {
          aspectRatio
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

const Studio: FunctionComponent = () => {
  const { image1, image2, image3, image4, image5, image6 } = useStaticQuery(
    query,
  )

  return (
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
              </div>
            </div>
          </div>
        </div>
      </Section>
      <div className="mt-5"></div>
      <div className="overflow-hidden">
        <div className="-mx-1">
          <div className="grid grid-cols-4 grid-rows-2 col-gap-2 row-gap-5 max-w-xl md:max-w-2xl lg:max-w-4xl mx-auto">
            {[
              [image1, ''],
              [image2, ''],
              [image3, 'col-span-2'],
              [image4, ''],
              [image5, 'col-span-2'],
              [image6, ''],
            ].map(([{ childImageSharp: { fluid } }, cls], i) => (
              <Img
                key={i}
                className={'rounded h-32 sm:h-40 md:h-48 lg:h-64 w-full ' + cls}
                fluid={fluid}
                alt=""
              />
            ))}
          </div>
        </div>
      </div>

      <div className="mt-20"></div>
    </>
  )
}

export default Studio
