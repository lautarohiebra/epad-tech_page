import React from 'react'
import { catalogo } from '@/data/Catalogo'

const Catalogo = () => {
  return (
    <div className='container mx-auto flex flex-row items-start align-middle justify-center flex-wrap'>
      {catalogo.map((item, index) => (
        <div key={index} className="card rounded-md glass m-3 min-w-96 overflow-hidden">
          <h4 className='card-title p-3 bg-neutral text-base-100 '>{item.producto}</h4>
          <ul className='m-2 p-3 card-body'>
            {item.linea.map((elemento, index) => (
              <li key={index}>{elemento}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  )
}

export default Catalogo