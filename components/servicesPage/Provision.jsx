import React from "react";
import ServiciosBanner from "./ServiciosBanner";

const Provision = () => {
  return (
    <div className="pt-10" id="provision">
      <ServiciosBanner text="Importacion y Suministro"/>
      <div className="center w-full bg-base-100 px-5 xl:p-14 mx-auto shadow-md">
        <h3 className=" text-black mb-3 text-2xl font-medium underline underline-offset-2">
          Nuestro Catálogo
        </h3>
        <div className="bg-slate-100 p-4 rounded-md shadow-sm mb-2">
          <p>
            Tenemos acceso a las principales marcas de componentes electrónicos
            del mundo a través de nuestra relación con Avnet Electronics
          </p>
          <p>
            Estamos trabajando constantemente para incorporar nuevas
            distribuciones de alta tecnología.
          </p>
          <p>
            Nos enorgullecemos de poder ofrecer a nuestros clientes un variado
            catálogo de productos de alto nivel técnico, de marcas de gran
            prestigio y recorrido en la industria.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Provision;
