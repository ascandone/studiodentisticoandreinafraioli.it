import { FunctionComponent } from 'react'
import React from 'react'
import Section from './section'
import { useStaticQuery, graphql } from 'gatsby'
import Img, { FluidObject } from 'gatsby-image'

const img = (
  <img
    src="https://www.pronto-care.com/sites/all/themes/prontocare/logo.png"
    alt=""
  />
)

//https://www.pronto-care.com/sites/all/themes/prontocare/logo.png
const Assicurazioni: FunctionComponent = () => {
  const assicurazioni = useStaticQuery(graphql`
    query {
      allFile(filter: { relativeDirectory: { eq: "assicurazioni" } }) {
        edges {
          node {
            childImageSharp {
              # Specify a fluid image and fragment
              # The default maxWidth is 800 pixels
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  `)

  return (
    <Section>
      <div className="mt-10 text-center max-w-xl mx-auto">
        <div className="max-w-xl">
          <h3 className="text-teal-500 text-4xl font-lg font-semibold leading-tight mb-2">
            Convenzioni assicurative
          </h3>
          <div className="text-gray-600 space-y-2 font-light">
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.Quo optio
              orrupti, architecto ab quisquam accusantium quia voluptatum
              veritatis.
            </p>
          </div>
        </div>

        <div
          // className="grid grid-flow-col grid-rows-1 md:grid-cols-3 h-20 overflow-scroll py-5"
          // style={{ gridAutoColumns: '50%' }}
          className="grid grid-cols-2 md:grid-cols-3 row-gap-5 col-gap-4 py-4 "
        >
          {assicurazioni.allFile.edges.map((data: any, i: number) => (
            <div key={i} className="h-16 flex items-center overflow-hidden">
              <Img
                fluid={data.node.childImageSharp.fluid}
                className="w-full"
                alt="logo convenzione assicurativa"
              />
            </div>
          ))}
        </div>
      </div>
    </Section>
  )
}

export default Assicurazioni
