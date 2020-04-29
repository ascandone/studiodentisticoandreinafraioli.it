import { FunctionComponent } from 'react'
import React from 'react'
import Section from './section'

const img = (
  <img
    src="https://www.pronto-care.com/sites/all/themes/prontocare/logo.png"
    alt=""
  />
)

//https://www.pronto-care.com/sites/all/themes/prontocare/logo.png
const Assicurazioni: FunctionComponent = () => (
  <Section>
    <div className="mt-10">
      <h3 className="text-teal-500 text-4xl font-lg font-semibold leading-tight mb-2">
        Convenzioni assicurative
      </h3>
      <div className="text-gray-600 space-y-2 font-light">
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo optio
          corrupti, architecto ab quisquam accusantium quia voluptatum
          veritatis.
        </p>
      </div>

      <div
        // className="grid grid-flow-col grid-rows-1 md:grid-cols-3 h-20 overflow-scroll py-5"
        // style={{ gridAutoColumns: '50%' }}
        className="grid grid-cols-2 md:grid-cols-3 row-gap-3 row-gap-5 py-4"
      >
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className="px-4 mx-auto">
            {img}
          </div>
        ))}
      </div>
    </div>
  </Section>
)

export default Assicurazioni
