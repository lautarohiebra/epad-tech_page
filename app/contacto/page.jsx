import Form from "@/components/contactPage/Form";
import FixedBg from "@/components/shared/FixedBg";
import React from "react";

const Contacto = () => {
  return (
    <section className="">
      <FixedBg img="/imgs/contacto.jpg" />
      <div className='h-[350px] relative'>
        <h2 className="text-5xl md:text-7xl font-semibold text-base-100 backdrop-grayscale p-5 w-auto absolute bottom-16">Contacto</h2>
      </div>
      <div className="bg-white w-full h-[500px] absolute -z-10"></div>
      <div className="sm:px-14">
        <Form />
      </div>
    </section>
  );
};

export default Contacto;
