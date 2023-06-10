import React from "react";
import Image from "next/image";
import SpanText from "../shared/SpanText";

const Valores = () => {
  return (
    <div className="glass rounded-md shadow-md hover:-translate-y-1 transition-all max-w-3xl overflow-hidden">
      <div className="flex items-center mb-6 bg-neutral p-4">
        <Image src={"/imgs/valores.svg"} alt="Nuestros valores" width="40" height="40" />
        <h3 className="font-semibold text-base-100 text-3xl px-3">
          Nuestros valores
        </h3>
      </div>
      <ul className="list-disc px-7 m-2">
        <li className="text-neutral-600 text-lg"><SpanText text="Confidencialidad" />  y  <SpanText text="acuerdos NDA." /></li>
        <li className="text-neutral-600 text-lg"><SpanText text="Calidad asegurada" /> tanto en las actividades como en los recursos utilizados.</li>
        <li className="text-neutral-600 text-lg"><SpanText text="Propuestas claras" /> con absoluta <SpanText text="transparencia" /> en todo el proceso.</li>
        <li className="text-neutral-600 text-lg"><SpanText text="Orientación al cliente" />. Nos enfocamos en comprender y adaptarnos a las necesidades de nuestros clientes para ofrecer las soluciones más óptimas.</li>
      </ul>
    </div>
  );
};

export default Valores;
