import React from "react";
import { asesorias } from "@/data/asesorias";
import Image from "next/image";

const Asesorias = () => {
  return (
    <section>
      <div className="w-full mx-auto p-5 bg-neutral-focus">
        <h3 className="text-center text-2xl font-bold text-base-100">
          Nuestros servicios
        </h3>
      </div>
      <div className="px-5 py-7">
        {/* Card Importacion */}
        <div className="card mx-auto max-w-[775px] min-h-[550px] glass m-2 shadow-md">
          <div className="relative w-full h-56">
            <figure className="h-96 w-full overflow-hidden">
              <Image
                src={"/imgs/provision.jpg"}
                alt={"Provisión"}
                fill="true"
                style={{ objectFit: "cover" }}
              />
            </figure>
          </div>
          <div className="card-body">
            <h2 className="text-2xl card-title">
              Importación de componentes electrónicos
            </h2>
            <p>
              Tenemos acceso a las MEJORES MARCAS de fabricantes de componentes
              electrónicos del mundo y tenemos el conocimiento de las mejores
              alternativas para IMPORTAR dichos componentes.
            </p>
            <p>
              Nuestra relación directa con los fabricantes y distribuidores
              oficiales nos permite ofrecer costos razonables y confiabilidad
              para todo el proceso.
            </p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Saber mas</button>
            </div>
          </div>
        </div>
        {/* Cards container */}
        <div className="flex flex-col flex-wrap lg:flex-row items-center justify-center py-5">
          {/* Cards asesorias */}
          {asesorias.map((asesoria) => (
            <div className="card max-w-[380px] min-h-[550px] glass m-2 shadow-md">
              <div className="relative w-full h-56">
                <figure className="h-96 w-full overflow-hidden">
                  <Image
                    src={asesoria.img}
                    alt={asesoria.header}
                    fill="true"
                    style={{ objectFit: "cover" }}
                  />
                </figure>
              </div>
              <div className="card-body">
                <h2 className="card-title">Asesoria en {asesoria.header}</h2>
                <p>{asesoria.content}</p>
                <div className="card-actions justify-end">
                  <button className="btn btn-primary">Saber mas</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Asesorias;
