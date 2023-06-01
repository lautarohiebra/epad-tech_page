import React from "react";
import Stat from "./Stat";

const Stats = () => {
  return (
    <section className="w-full px-3 flex flex-col xl:flex-row justify-between bg-slate-100">
      <Stat
        stat="+30"
        header="Años de experiencia"
        text="En el mercado de la provisión y logística de componentes electrónicos."
      />
      <Stat
        stat="+200"
        header="Clientes"
        text="Trabajando con nosotros en todo el país."
      />
      <Stat
        stat="+50"
        header="Participaciones en Ferias y misiones comerciales"
        text="En todo el mundo."
      />
      <Stat
        stat="+25"
        header="Países"
        text="En los cuales E-p@d cuenta con presencia comercial."
      />
    </section>
  );
};

export default Stats;
