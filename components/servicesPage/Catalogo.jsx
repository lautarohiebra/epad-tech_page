import React from 'react'
import { catalogo } from '@/data/Catalogo'

const Catalogo = () => {
  return (
    <div className='container mx-auto flex flex-row items-start align-middle justify-center flex-wrap my-4'>
      {catalogo.map((item, index) => (
        <div key={index} className="card rounded-md glass m-3 w-[350px] overflow-hidden hover:-translate-y-3 transition-all">
          <h4 className='p-3 bg-neutral font-semibold text-xl text-base-100 text-center'>{item.producto}</h4>
          <h4 className='card-side px-5 pt-5 font-semibold text-lg'>Líneas:</h4>
          <ul className='card-body font-medium '>
            {item.linea.map((elemento, index) => (
              <li className=' rounded-sm pl-2 backdrop-brightness-150 hover:shadow-md transition-all' key={index}>{elemento}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  )
}

export default Catalogo