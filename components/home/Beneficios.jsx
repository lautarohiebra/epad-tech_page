import React from "react";
import CTA from "../shared/CTA";
import Beneficio from "./Beneficio";

const Beneficios = () => {
  return (
    <section>
      <div className="w-full mx-auto p-5 bg-neutral-focus">
        <h3 className="text-center text-xl font-bold text-base-100">
          Hacemos de ser fabricante una tarea más <span className="text-primary">sencilla</span> 
        </h3>
      </div>

      <div className="container mx-auto bg-base-100 p-7 my-4">
        <div className=" flex-col md:flex-row-reverse">
          <div className="my-3">
            <h2 className="text-2xl text-neutral-focus font-semibold">
              Brindamos soluciones{" "}
              <span className="text-primary font-extrabold">PERSONALIZADAS</span>, 
            </h2>

            <h2 className="text-2xl text-neutral-focus font-semibold">
            pensadas para
              <span className="text-primary font-extrabold"> SU NEGOCIO</span>
            </h2>

            <p className="mt-2 text-base-content font-medium text-lg">Empleamos nuestros conocimientos y herramientas para asistir a nuestros clientes de forma integral en:</p>
            <div className="py-6 flex flex-col items-center lg:flex-row justify-start gap-3">
              <Beneficio name="Provisión" />
              <Beneficio name="Diseño" />
              <Beneficio name="Fabricación" />
              <Beneficio name="COMEX" />
            </div>
            <div className="my-5">
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Beneficios;
