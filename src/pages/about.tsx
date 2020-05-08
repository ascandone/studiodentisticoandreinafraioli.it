import React, { FunctionComponent } from 'react'
import Layout from '../components/layout'
import Section from '../components/section'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

const Item: FunctionComponent<{
  year: number
  name: string
  location: string
}> = props => (
  <div className="relative">
    <div className="absolute border-l border-teal-100 top-0 bottom-0 left-0 ml-4 z-0"></div>

    <div className="flex items-center py-2">
      <div className="z-10 w-12 flex-shrink-0">
        <span className="bg-teal-100 px-2 py-1 rounded-full leading-none text-sm text-teal-800">
          {props.year}
        </span>
      </div>
      <div className="mr-4"></div>
      <div className="flex flex-col">
        <h4 className="text-sm text-gray-900 leading-tight">{props.name}</h4>
        <div className="mt-1"></div>
        <p className="text-xs text-gray-600 leading-tight">{props.location}</p>
      </div>
    </div>
  </div>
)

const Education: FunctionComponent = () => (
  <div className="mx-auto max-w-2xl">
    <h5 className="text-2xl text-teal-500 text-center">
      Corsi e specializzazioni
    </h5>
    <div className="mt-2"></div>

    <Item
      year={1990}
      name="Corso triennale di perfezionamento in ortognatodonzia bioprogressiva"
      location="Prof. Carl Gugino, Buffalo University"
    />

    <Item
      year={1998}
      name="Corso annuale di perfezionamento in ortognatodonzia"
      location="Prof. A. Salvato, Università di Milano"
    />

    <Item
      year={1998}
      name="Corso avanzato di elettromiografia e biofeedback"
      location="Prof. Ivan Dus, Pordenone"
    />

    <Item
      year={2004}
      name="Master di 2° livello in gnatologia posturale"
      location="Università degli studi di Tor Vergata"
    />

    <Item
      year={2016}
      name="Diploma Internazionale di formazione in Medicina Estetica"
      location="Scuola Internazionale di Medicina Estetica Fondazione Fatebenefratelli, Roma"
    />

    <Item
      year={2017}
      name="Corso di endodonzia"
      location="Dott Lucio Daniele, L’Aquila"
    />

    <Item
      year={2018}
      name="Corso di conservativa"
      location="Prof. V. Kaitsas, Roma"
    />

    <Item
      year={2018}
      name="Corso di parodontologia non chirurgica"
      location="Dr.ssa Marisa Roncati"
    />

    <Item
      year={2019}
      name="Master universitario di 2° livello in “Odontostomatologia in età evolutiva”"
      location="Direttore: Prof. Maurizio Bossù"
    />
  </div>
)

const About: FunctionComponent = () => {
  const data = useStaticQuery(graphql`
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
  `)

  return (
    <Layout>
      <Section>
        <div className="flex flex-col justify-center md:justify-between md:flex-row">
          <div className="flex-1 md:mt-10">
            <h5 className="subhead text-gray-500">chi sono</h5>
            <h2 className="title text-teal-500">Dott. Andreina Fraioli</h2>
          </div>
          <div className="flex-1 self-center">
            <div className="w-40 mx-auto">
              <img
                src="https://www.eduardzabara.com/wp-content/themes/eduardzabara/assets/img/eduard-zabara-chi-sono.jpg"
                alt=""
              />
              {/* <Img
                className="max-w-full"
                fluid={data.file.childImageSharp.fluid}
                alt="Foto della dottoressa Andreina Fraioli"
              /> */}
            </div>
          </div>
        </div>
      </Section>

      <Section>
        <div className="bg-cool-gray-100 px-3 py-3 rounded-lg">
          <div className="text-sm font-light text-gray-900 space-y-2">
            <p>
              Esperta in ortodonzia, estremamente empatica, da oltre 30 anni si
              occupa prevalentemente dei piccoli pazienti aggiornandosi
              continuamente sulle nuove strategie e tecniche da adottare per la
              loro cura e il loro benessere rendendo la loro permanenza nel suo
              studio un momento di divertimento con l’aiuto di giochi ed ausili
              didattici che gli consentono di apprendere le tecniche di igiene e
              prevenzione dentale in un ambiente accogliente e a misura di
              bambino.
            </p>
            <p>
              Anche i loro genitori possono sottoporsi alle cure dentali ed
              estetiche grazie allo staff costituito da professionisti
              d’esperienza provata che lavora nella struttura, mentre i loro
              bambini giocano beati.
            </p>
            <p>
              Ha prestato servizio per oltre vent’anni nelle strutture pubbliche
              di Jesi e Matelica e per oltre trenta in consulenze negli studi
              dei colleghi. Attualmente esercita attività privata nel suo studio
              di Roma in Piazzale Caduti della Montagnola 6
            </p>
            <p>
              N. Ordine Albo dei Medici: <b>38393</b> <br />
              N. Ordine Albo degli Odontoiatri: <b>1710</b> <br />
              N. Ordine Albo di Medicina Estetica: <b>362</b>
            </p>
          </div>
        </div>
        <div className="mt-8"></div>
        <Education />
      </Section>
    </Layout>
  )
}

export default About
