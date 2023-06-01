import React from 'react'
import CTA from "@/components/shared/CTA";

const ServicesHero = () => {
  return (
    <div className="hero min-h-screen bg-none">
      <div className="hero-content flex-col-reverse lg:flex-row-reverse">
        <div>
          <h2 className="text-5xl text-base-100 font-bold max-w-3xl   p-3">Soluciones pensadas y desarrolladas a medida</h2>
          <p className=" my-2 text-lg text-base-100 bg-gray-900 p-3 shadow-md max-w-xl">
            Contamos con la capacidad, experiencia y recursos necesarios para el asesoramiento y acompañamiento de nuestros clientes, sin importar la instancia de su proceso productivo.
          </p>
          <CTA message="Trabaja con nosotros"/>
        </div>
      </div>
    </div>
  )
}

export default ServicesHero