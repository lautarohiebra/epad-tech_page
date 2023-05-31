import React from "react";
import { asesorias } from "@/data/asesorias";
import Image from "next/image";

const Asesorias = () => {
  return (
    <section
      id="home-servicios"
      className="h-screen bg-[url('/imgs/asesoriasImg.jpg')] overflow-y-auto"
    >
      <div className="w-full mx-auto p-5 bg-neutral-focus">
        <h3 className="text-center text-2xl font-bold text-base-100">
          Nuestros servicios
        </h3>
      </div>
      <div className="px-5 py-7">
        {/* Card Importacion */}
        <div className="card mx-auto max-w-[800px] lg:w-[800px] bg-neutral glass-effect m-3 shadow-md rounded-md hover:bg-neutral transition-all">
          <h3 className="card-title px-8 py-3 text-base-100 rounded-t-md shadow-md">
            <span className="text-primary bg-neutral px-1 rounded-md">
              Importación
            </span>{" "}
            de componentes eléctronicos
          </h3>
          <figure className="w-full h-[250px] overflow-hidden">
            <Image
              src={"/imgs/provision.jpg"}
              alt="Importación"
              width={800}
              height={200}
            />
          </figure>
          <p className="card-body text-base-100">
            Tenemos acceso a las MEJORES MARCAS de fabricantes de componentes
            electrónicos del mundo y tenemos el conocimiento de las mejores
            alternativas para IMPORTAR dichos componentes.
          </p>
          <p className="card-body text-base-100 pt-0">
            Nuestra relación directa con los fabricantes y distribuidores
            oficiales nos permite ofrecer costos razonables y confiabilidad para
            todo el proceso.
          </p>
        </div>
        {/* Cards container */}
        <div className="flex flex-col flex-wrap lg:flex-row items-center justify-center py-5">
          {/* Cards asesorias */}
          {asesorias.map((asesoria) => (
            <div
              key={asesoria.header}
              className="card w-96 glass-effect m-3 shadow-md rounded-md hover:bg-neutral transition-all"
            >
              <h3 className="card-title px-8 py-3 text-base-100 rounded-t-md shadow-md">
                Asesoria en{" "}
                <span className="text-primary bg-neutral px-1 rounded-md">
                  {asesoria.header}
                </span>{" "}
              </h3>
              <figure className="w-full h-[250px] overflow-hidden">
                <Image
                  src={asesoria.img}
                  alt="Servicios imagen"
                  width={400}
                  height={200}
                />
              </figure>
              <p className="card-body text-base-100">{asesoria.content}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Asesorias;
