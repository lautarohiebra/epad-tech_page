import React from "react";
import { ServiciosHome } from "@/data/ServiciosHome";
import Image from "next/image";

const Servicios = () => {
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
            <h2 className="text-2xl card-title text-base-200">
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
          
          {/* Cards Servicios */}
          
          {ServiciosHome.map((servicio) => (
            <div key={servicio.name} className="card max-w-[380px] min-h-[550px] glass m-2 shadow-md">
              <div className="relative w-full h-56">
                <figure className="h-96 w-full overflow-hidden">
                  <Image
                    src={servicio.img}
                    alt={servicio.header}
                    fill="true"
                    style={{ objectFit: "cover" }}
                  />
                </figure>
              </div>
              <div className="card-body">
                <h2 className="card-title text-base-200">Asesoria en {servicio.header}</h2>
                <p>{servicio.content}</p>
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

export default Servicios;
