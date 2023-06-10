import Ideas from "@/components/aboutPage/Ideas";
import Valores from "@/components/aboutPage/Valores";
import CTA from "@/components/shared/CTA";
import FixedBg from "@/components/shared/FixedBg";
import React from "react";

const Nosotros = () => {
  return (
    <section>
      <FixedBg img="/imgs/nosotrosHero.jpg" />
      <div className="hero min-h-screen bg-none">
      <div className="hero-content flex-col-reverse lg:flex-row-reverse">
        <div>
          <h2 className="text-5xl text-base-100 font-bold max-w-3xl   p-3">Sobre nosotros</h2>
          <p className=" my-2 text-lg text-base-100 bg-gray-900 p-3 shadow-md max-w-xl">
          Somos un grupo de profesionales con más de 30 años de experiencia y
            capacitación continua en soluciones para la industria electrónica.
            Asesoramos en vuestro diseño, fabricación y logística de provisión.
          </p>
          <CTA message="Trabaja con nosotros"/>
        </div>
      </div>
    </div>
      <div className=' w-full flex flex-col items-center p-12 '>
        <Ideas />
        <Valores />
      </div >
     {/*  <div className="w-full bg-neutral flex flex-col items-center py-52 sm:py-16 px-6"> </div> */}
    </section>
  );
};

export default Nosotros;
