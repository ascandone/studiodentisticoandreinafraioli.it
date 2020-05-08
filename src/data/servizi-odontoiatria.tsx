import React from 'react'
import { ServiceData } from '../types'

const data: Array<ServiceData> = [
  {
    header: 'Igiene professionale',
    body: (
      <>
        <p>
          L’igiene professionale consiste principalmente nella rimozione del
          tartaro ovvero di quella quota di placca batterica che non asportata
          da filo e spazzolino permane nella bocca trasformandosi in una
          concrezione calcifica e dura che può essere asportata solo per mezzo
          di strumenti specifici, come ultrasuoni o curette, da parte del
          professionista abilitato. Il tartaro non asportato causa infiammazione
          gengivale che se trascurata può estendersi all’osso di sostegno dei
          denti provocandone la perdita progressiva (parodontopatia o piorrea).
          Compito dell’Igienista Dentale è inoltre insegnare le corrette
          procedure di igiene domiciliare che è la vera base della prevenzione.
          Queste manovre (eseguite con presidi come spazzolino, filo
          interdentale, scovolino, ecc.) sono finalizzate all’asportazione
          quotidiana della placca dentale.
        </p>
      </>
    ),
  },
  {
    header: 'Sbiancamento dentale',
    body: (
      <>
        <p>
          Avere denti bianchi e sani è un desiderio molto diffuso perché un bel
          sorriso riflette uno stato d’animo positivo e rimotiva i nostri
          interlocutori ad un’interazione collaborativa e ottimistica. Sbiancare
          i propri denti è oggi possibile con l’applicazione locale di specifici
          gel ad uso professionale ad azione rapida ed efficace.
        </p>
      </>
    ),
  },
  {
    header: 'Rimineralizzazione dentale',
    body: (
      <>
        <p>
          Il fluoro è un elemento chimico che se incorporato nello smalto
          dentale lo rende molto resistente alla carie prevenendone l’insorgenza
          e riducendone l’incidenza. Questa incorporazione può avvenire in
          maniera ridotta con l’uso di paste dentifricie e collutori con
          prodotti ad uso professionale. L’applicazione del fluoro dura pochi
          minuti ma il risultato dura per mesi.
        </p>
      </>
    ),
  },
  {
    header: 'Sigillature',
    body: (
      <>
        <p>
          Le cuspidi dei denti sono separate da solchi visibili anche ad occhi
          nudo. Questi solchi rappresentano un ricettacolo di placca e sono
          spesso la sede di insorgenza di processi cariosi soprattutto nei denti
          dei bambini che ancora non hanno acquisito la manualità sufficiente
          per uno spazzolamento efficace. Il dentista può procedere alla
          chiusura di questi solchi tramite l’applicazione di una speciale
          resina sigillante prevenendo così l’infiltrazione della placca e la
          conseguente insorgenza della carie.
        </p>
      </>
    ),
  },
  {
    header: 'Odontoiatria infantile',
    body: (
      <>
        <p>
          Ci si chiede spesso se i denti da latte vadano curati. La risposta è
          sì. I denti da latte hanno la funzione di mantenere uno spazio preciso
          per i denti permanenti che dovranno sostituirli. La loro perdita
          prematura dovuta alla carie può causare un’alterazione dell’eruzione
          dei denti permanenti e quindi una malocclusione. Inoltre la carie dei
          denti da latte causa dolore e ascessi dentali. I bambini non sono dei
          piccoli adulti. La cura della bocca di un bambino richiede un impegno
          particolare ed un approccio psicologico dolce ed empatico per evitare
          che si sviluppi un’odontofobia che lo condannerebbe ad avere paura del
          dentista per il resto della vita.
        </p>
      </>
    ),
  },
  {
    header: 'Ortodonzia',
    body: (
      <>
        <p>
          Il termine ortodonzia significa denti dritti. In realtà l’ortodontista
          non si limita ad addrizzare i denti ma controlla anche che i tempi di
          eruzione dentale siano corretti e che non siano presenti anomalie
          anatomiche o funzionali quali un alterato combaciamento delle arcate
          dentarie (malocclusione), un frenulo linguale corto che può causare un
          difetto di pronuncia, la permanenza di una deglutizione infantile che
          impedisce la corretta chiusura dei denti o una respirazione orale che,
          se non trattata per tempo, può causare un’alterazione di sviluppo
          dello scheletro facciale e perfino un ritardo intellettivo.
          L’intervento dell’ortodontista tuttavia non si limita all’ambito
          infantile ma si estende anche a quello adulto. Infatti oggi sappiamo
          che i denti dritti non sono solo più belli ma durano anche più a
          lungo. Ciò è dovuto prima di tutto alla maggior facilità di pulizia
          rispetto a denti affollati dai quali è più difficile snidare placca e
          tartaro e poi al fatto che i denti sono disposti nelle arcate secondo
          uno schema specifico che ne determina una reciproca protezione.
          L’alterazione di questo schema protettivo è responsabile
          dell’insorgenza di sovraccarichi che possono causare mobilità dentale,
          fratture dello smalto, dolore e degenerazione delle articolazioni
          della mandibola nonché frequenti mal di testa.
        </p>
        <p>
          In alternativa all’ortodonzia fissa oggi è possibile far ricorso a
          speciali mascherine trasparenti che sostituite periodicamente sono in
          grado di allineare i denti in maniera invisibile.
        </p>
      </>
    ),
  },
  {
    header: 'Gnatologia',
    body: (
      <>
        <p>
          La gnatologia è la disciplina che si occupa dei corretti rapporti fra
          le arcate dentali (occlusione). Questi possono essere sia statici che
          dinamici e sono determinati dalla forma e dalla posizione dei denti,
          dalle articolazioni fra mandibola e cranio (articolazioni
          temporo-mandibolari), dai muscoli della masticazione e dal sistema
          nervoso centrale e periferico che li controlla. L’occlusione può
          influenzare anche la postura corporea. Fra le patologie di interesse
          gnatologico rientra il bruxismo (digrignamento e serramento dentale)
          che può portare una precoce usura dentale, mal di testa, rumori e
          dolori delle articolazioni della mandibola.
        </p>
      </>
    ),
  },
  {
    header: 'Conservativa',
    body: (
      <>
        <p>
          Con il termine di odontoiatria conservativa (o conservatrice) si
          intendono le tecniche finalizzate a conservare un dente piuttosto che
          ad estrarlo. La carie dentale è un processo di distruzione dei tessuti
          duri del dente (smalto e dentina) operato dall’azione di acidi
          prodotti dai batteri che albergano nella nostra bocca. Questo processo
          se non contrastato si estende progressivamente fino alla polpa dentale
          (nervo) causandone un’infiammazione detta pulpite (il classico mal di
          denti). La carie può essere fermata asportando la porzione di dente
          malato che poi verrà ricostruita con materiali opportuni. In passato
          si è molto utilizzata l’amalgama d’argento (volgarmente definita
          piombatura). Oggi le otturazioni vengono per lo più eseguite con
          resine composite che hanno lo stesso colore del dente e risultano
          quindi invisibili.
        </p>
      </>
    ),
  },
  {
    header: 'Endodonzia',
    body: (
      <>
        <p>
          Endodonzia è sinonimo di cura canalare. Quando non è più possibile
          salvare la polpa dentale (nervo) il dentista procede ad asportarla dai
          canali presenti nelle radici del dente. Questi canali vengono
          sigillati in modo da prevenire l’insorgenza di infezioni. Se la cura
          canalare è eseguita bene il dente continuerà a svolgere la sua
          funzione per moltissimi anni. Va tuttavia considerato il fatto che un
          dente devitalizzato risulta più fragile di un dente intatto e che
          perciò è consigliabile proteggerlo per mezzo di una corona protesica
          (capsula) per prevenirne la frattura.
        </p>
      </>
    ),
  },
  {
    header: 'Protesi mobile',
    body: (
      <>
        <p>
          Con il termine protesi mobile (o rimovibile) si intendono quegli
          apparecchi che possono essere facilmente rimossi dalla bocca dal
          paziente e che servono a ripristinare i denti mancanti in parte
          (protesi parziale) o totalmente (protesi totale o dentiera).
        </p>
      </>
    ),
  },
  {
    header: 'Protesi fissa',
    body: (
      <>
        <p>
          Comprende intarsi, corone (capsule) e ponti. Quando un dente è
          parzialmente distrutto dalla carie il dentista può scegliere di
          ripristinarlo con un intarsio. Quando la distruzione del dente è molto
          avanzata non sarà più sufficiente un semplice intarsio ma bisognerà
          ricostruire l’intera corona dentale con una capsula. Un dente mancante
          invece può essere rimesso per mezzo di un ponte. In questo caso i due
          denti adiacenti a quello mancante vengono limati e incapsulati. Queste
          due capsule porteranno fra di loro il dente finto. Oggigiorno sempre
          più spesso invece di limare due denti sani si preferisce rimettere il
          dente mancante per mezzo di un impianto dentale.
        </p>
      </>
    ),
  },
  {
    header: 'Faccette estetiche',
    body: (
      <>
        <p>
          Per chi vuole avere un sorriso perfetto in brevissimo tempo è
          possibile far ricorso alle faccette estetiche in porcellana. Il
          dentista asporterà dalla superficie dei denti frontali un sottile
          strato di smalto (due o tre decimi di millimetro) e farà preparare
          delle faccette in porcellana che una volta incollate correggeranno
          forma e colore dei denti fornendo un sorriso “hollywoodiano”.
        </p>
      </>
    ),
  },
  {
    header: 'Implantologia dentale',
    body: (
      <>
        <p>
          Per osteointegrazione si intende il fenomeno per cui una vite in
          titanio inserita nell’osso mascellare va incontro ad un fenomeno di
          saldatura con l’osso stesso trasformandosi in una radice artificiale
          su cui il dentista può ancorare una capsula dentale. Questo processo
          richiede un tempo variabile dai 3 ai 6 mesi ma in alcuni casi
          specifici è possibile applicare il dente finto sulla vite lo stesso
          giorno del suo inserimento nell’osso realizzando il cosiddetto carico
          immediato. L’implantologia consente di rimettere dal singolo dente ad
          un’intera arcata. La moderna implantologia osteointegrata ha una
          percentuale di successo elevatissima.
        </p>
      </>
    ),
  },
  {
    header: 'Implantologia Computer Guidata',
    body: (
      <>
        <p>
          In casi specifici il dentista può proporre un piano di cura in cui il
          progetto di riabilitazione viene sviluppato tramite computer con uno
          programma che sulla base di una speciale radiografia (TAC, Dentascan o
          Cone-Beam) consente la realizzazione di una mascherina guida con la
          quale è possibile inserire gli impianti esattamente dove programmato
          dal dentista. In questi casi sulla base del progetto computerizzato
          sarà possibile realizzare in precedenza anche la protesi che verrà
          quindi fissata direttamente in bocca a fine intervento. Si tratta
          della cosiddetta tecnica “denti fissi in un’ora”.
        </p>
      </>
    ),
  },
  {
    header: 'Carico immediato',
    body: (
      <>
        <p>
          Per carico immediato si intende l’applicazione di una protesi fissa su
          di un impianto dentale appena inserito senza aspettare il classico
          tempo necessario per l’osteointegrazione (saldatura dell’impianto
          all’osso mascellare). In questi casi in genere si applica una protesi
          provvisoria che verrà sostituita da una protesi definitiva ad
          osteointegrazione avvenuta.
        </p>
      </>
    ),
  },
  {
    header: 'All-on-four',
    body: (
      <>
        <p>
          In caso di edentulia completa è possibile ripristinare un’ arcata
          dentale fissa poggiandola su quattro impianti.
        </p>
      </>
    ),
  },
  {
    header: 'Chirurgia Orale',
    body: (
      <>
        <p>
          La chirurgia orale è quella branca dell’odontoiatria che si occupa di
          patologie di interesse chirurgico quali l’estrazione di denti non
          recuperabili oppure problematici (alcuni denti del giudizio mal
          posizionati), l’asportazione di neoformazioni dei mascellari (cisti,
          tumori, ecc), la resezione dei frenuli patologici, l’esposizione di
          denti non erotti in arcata a scopo ortodontico, ecc.
        </p>
      </>
    ),
  },
]

export default data
