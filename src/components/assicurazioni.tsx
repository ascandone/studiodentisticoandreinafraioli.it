import { FunctionComponent } from 'react'
import React from 'react'
import Section from './section'
import { useStaticQuery, graphql } from 'gatsby'
import Img, { FluidObject } from 'gatsby-image'

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
          <div className="rich-text">
            <p>Siamo convenzionati con le maggiori compagnie assicurative.</p>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 row-gap-5 col-gap-4 py-4 ">
          {assicurazioni.allFile.edges.map((data: any, i: number) => (
            <div key={i} className="h-20 flex items-center overflow-hidden">
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
