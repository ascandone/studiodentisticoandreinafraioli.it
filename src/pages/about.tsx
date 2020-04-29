import React, { FunctionComponent } from 'react'
import Layout from '../components/layout'

const About: FunctionComponent = () => (
  <Layout>
    <div className="wrapper">
      <h5 className="">Chi sono</h5>
      <h4 className="text-4xl text-teal-600">Ciao!</h4>
      <div className="text-gray-600 space-y-2 max-w-lg mx-auto">
        <p>
          Esperta in ortodonzia, estremamente empatica, da oltre 30 anni si
          occupa prevalentemente dei piccoli pazienti aggiornandosi
          continuamente sulle nuove strategie e tecniche da adottare per la loro
          cura e il loro benessere rendendo la loro permanenza nel suo studio un
          momento di divertimento con l’aiuto di giochi ed ausili didattici che
          gli consentono di apprendere le tecniche di igiene e prevenzione
          dentale in un ambiente accogliente e a misura di bambino.
        </p>

        <p>
          Anche i loro genitori possono sottoporsi alle cure dentali ed
          estetiche grazie allo staff costituito da professionisti d’esperienza
          provata che lavora nella struttura, mentre i loro bambini giocano
          beati.
        </p>
      </div>
    </div>
  </Layout>
)

export default About
