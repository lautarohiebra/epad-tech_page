import React from "react";
import CTA from "../shared/CTA";

const Mensaje = () => {
  return (
    <section>
      <div className=" px-5 py-8 text-center glass">

        <h4 className="text-neutral text-3xl font-bold pb-3">
          Conocemos los <span className="text-base-100">Desafíos</span>,
        </h4>
        <h4 className="text-neutral text-3xl font-bold pb-3">
          Sabemos de <span className="text-base-100">Logística</span> y <span className="text-base-100">Tecnología</span>,
        </h4>
        <h4 className="text-neutral text-3xl font-bold pb-3">
          Sabemos lo que su negocio <span className="text-base-100">Necesita</span>...
        </h4>
        
      </div>
      <div className="bg-base-100 w-full">
        <div className="w-full h-72 bg-[url('/imgs/mensaje-bg.svg')] bg-cover flex flex-col">
          <h4 className="text-center text-neutral text-4xl font-bold py-10">
            Para llegar al siguiente nivel!
          </h4>
          <img
            className="mx-auto animate-bounce w-12"
            src="/imgs/mensaje-icon.svg"
            alt="arrow-down"
          />
          <div className="mx-auto mt-2">
            <CTA message="Trabaja con nosotros!" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mensaje;
