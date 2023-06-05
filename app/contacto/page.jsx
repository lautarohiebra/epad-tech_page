import Formulario from "@/components/contactPage/Form";
import FixedBg from "@/components/shared/FixedBg";
import React from "react";

const Contacto = () => {
  return (
    <section className="">
      <FixedBg img="/imgs/contacto.jpg" />
      <div className='h-[350px] flex justify-center align-middle items-center'>
        <h2 className="text-5xl md:text-7xl font-semibold text-base-100 p-5 w-auto h-auto">¡Trabaja con nosotros!</h2>
      </div>
      <div className="glass w-full h-[800px] md:h-[600px] absolute -z-10"></div>
      <div className="sm:px-14">
        <Formulario />
      </div>
    </section>
  );
};

export default Contacto;
