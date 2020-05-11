import { EducationData } from '../types'

const educationData: Array<EducationData> = [
  {
    year: 1979,
    name: 'Diploma di Maturità classica',
    location: 'Istituto Maria Adelaide di Roma',
  },
  {
    year: 1986,
    name: 'Laurea in Medicina e Chirurgia con votazione finale 110 e lode',
    location: 'Università degli Studi La Sapienza di Roma',
  },
  {
    year: 1990,
    name:
      'Corso triennale di perfezionamento in ortognatodonzia bioprogressiva',
    location: 'Prof. Carl Gugino, Buffalo University',
  },
  {
    year: 1998,
    name: 'Corso annuale di perfezionamento in ortognatodonzia',
    location: 'Prof. A. Salvato, Università di Milano',
  },
  {
    year: 1998,
    name: 'Corso avanzato di elettromiografia e biofeedback',
    location: 'Prof. Ivan Dus, Pordenone',
  },
  {
    year: 2004,
    name: 'Master di 2° livello in gnatologia posturale',
    location: 'Università degli studi di Tor Vergata',
  },
  {
    year: 2013,
    name: 'Protocolli di Medicina estetica',
    location: 'Corso RES Fondazione Fatebenefratelli ',
  },
  {
    year: 2014,
    name: 'Metodologie correttive in Medicina Estetica',
    location: 'Corso RES Fondazione Fatebenefratelli',
  },
  {
    year: 2015,
    name: 'Corso BLSD IRC Basic life support defibrillation italian',
    location: 'Scuola Medica Ospedaliera',
  },
  {
    year: 2015,
    name: 'Il Botulino e il bruxismo',
    location: 'Corso RES Dr. A.Diaspro e Dr F. Raviola Milano',
  },
  {
    year: 2016,
    name: 'Diploma quadriennale Internazionale di formazione in Medicina Estetica',
    location:
      'Scuola Internazionale di Medicina Estetica Fondazione Fatebenefratelli, Roma',
  },
  {
    year: 2016,
    name: 'Aggiornamento di nuove tecniche per il volto e l’invecchiamento',
    location: 'Corso RES Fondazione Fatebenefratelli',
  },
  {
    year: 2016,
    name: 'Approfondimento sulle metodologie di medicina estetica',
    location: 'Corso RES Fondazione Fatebenefratelli',
  },
  {
    year: 2017,
    name: 'Chirurgia Pedodontica',
    location: 'Corso RES  Dr. G. Bruzzesi',
  },
  {
    year: 2017,
    name: 'Corso di endodonzia',
    location: 'Dott Lucio Daniele, L’Aquila',
  },
  {
    year: 2018,
    name: 'Corso di conservativa',
    location: 'Prof. V. Kaitsas, Roma',
  },
  {
    year: 2018,
    name: 'Corso di parodontologia non chirurgica',
    location: 'Dr.ssa Marisa Roncati',
  },
  {
    year: 2019,
    name:
      'Master universitario di 2° livello in “Odontostomatologia in età evolutiva”',
    location: 'Direttore: Prof. Maurizio Bossù',
  },
  {
    year: 2019,
    name: 'Aggiornamenti in odontoiatria infantile',
    location: 'Corso FAD Accademia Tecniche Nuove',
  },
  {
    year: 2019,
    name:
      'Innovazioni delle procedure diagnostiche degli attuali trattamenti endodontici',
    location: 'Corso RES dr Giovanni Schianchi',
  },
  {
    year: 2019,
    name: 'Botulino e Filler',
    location: 'Corso pratico. Dr. Radaelli Milano',
  },
  {
    year: 2019,
    name: 'IPAM Congresso di Medicina Internazionale',
    location: 'DR Radaelli	Milano',
  },
  {
    year: 2019,
    name: 'La tossina botulinica',
    location: 'Corso RES Salus Internazionale Dr.  Alessandro Lozza Roma',
  },
].sort((x, y) => x.year - y.year)

export default educationData
