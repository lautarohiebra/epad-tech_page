import Ideas from "@/components/about/Ideas";
import Valores from "@/components/about/Valores";
import React from "react";

const Nosotros = () => {
  return (
    <section>
      <div className='w-full bg-[url("/imgs/nosotrosHero.jpg")] bg-center bg-cover pt-8'>
        <div className="container w-full max-w-3xl p-10 flex flex-col items-start">
          <h2 className="text-6xl md:text-7xl text-base-100 font-semibold mb-3 backdrop-grayscale px-3">
            Sobre nosotros
          </h2>
          <p className="p-4 md:text-lg bg-neutral text-base-100 font-medium transition-all rounded-sm shadow-md ">
            Somos un grupo de profesionales con más de 30 años de experiencia y
            capacitación continua en soluciones para la industria electrónica.
            Asesoramos en vuestro diseño, fabricación y logística de provisión.
          </p>
        </div>
      </div>
      <div className=' w-full bg-slate-100 flex flex-col items-center p-12 '>
        <Ideas />
        <Valores />
      </div >
     {/*  <div className="w-full bg-neutral flex flex-col items-center py-52 sm:py-16 px-6"> </div> */}
    </section>
  );
};

export default Nosotros;
