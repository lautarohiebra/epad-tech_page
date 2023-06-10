import React from "react";
import Image from "next/image";
import SpanText from "../shared/SpanText";
const Ideas = () => {
  return (
    <div className="glass rounded-md my-8 sm:my-8 shadow-md hover:-translate-y-1 transition-all max-w-3xl overflow-hidden mb-4">
      <div className="flex items-center mb-6 bg-neutral p-4">
        <Image src={"/imgs/ideas.svg"} alt="Nuestras ideas" width="30" height="30"/>
        <h3 className="font-semibold text-base-100 text-xl md:text-3xl px-3">
          Nuestras Ideas
        </h3>
      </div>
      <ul className="list-disc px-7 m-2">
        <li className="text-neutral-600 text-lg">
          Propuestas <SpanText text="claras" /> y{" "}
          <SpanText text="consistentes" /> para cada necesidad productiva.
        </li>
        <li className="text-neutral-600 text-lg">
          Garantizar altos <SpanText text="niveles de calidad" /> mediante el
          empleo de componentes de marcas de prestigio global.
        </li>
        <li className="text-neutral-600 text-lg">
          <SpanText text="Seguimiento y trazabilidad" /> de todo el proceso de
          provisión.
        </li>
      </ul>
    </div>
  );
};

export default Ideas;
