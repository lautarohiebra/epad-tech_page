import React from "react";
import CTA from "../shared/CTA";

const Mensaje = () => {
  return (
    <section>
      <div className="bg-slate-100 px-5 py-8">
        {/*
        <h3 className="text-neutral text-3xl font-bold pb-7">
          Sabemos de Logística y <span className="text-primary">Tecnología</span>,
        </h3>
        <h3 className="text-neutral text-3xl font-bold pb-7">
          Sabemos lo que su negocio <span className="text-primary">Necesita</span>...
        </h3> */}
        <ul className="steps steps-vertical">
          <li
            data-content="|"
            className="step step-neutral text-xl font-semibold"
          >
            Conocemos los Desafíos
          </li>
          <li
            data-content="|"
            className="step step-neutral text-xl font-semibold"
          >
            Sabemos de Logística y Tecnología
          </li>
          <li
            data-content="|"
            className="step step-neutral text-xl font-semibold text-primary"
          >
            Tenemos lo que su negocio NECESITA...
          </li>
        </ul>
      </div>
      <div className="bg-base-100 w-full">
        <div className="w-full h-72 bg-[url('/mensaje-bg.svg')] flex flex-col">
          <h2 className="text-center text-neutral text-4xl font-bold py-10">
            Para llegar al siguiente nivel
          </h2>
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
