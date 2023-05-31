import React from "react";
import Stat from "./Stat";

const Stats = () => {
  return (
    <section className="w-full px-3 flex flex-col xl:flex-row justify-between my-3">
      <Stat
        stat="+30"
        header="Años de experiencia"
        text="En el mercado de la provisión y logística de componentes electrónicos"
      />
      <Stat
        stat="+200"
        header="Clientes"
        text="Trabajando con nosotros en todo el país"
      />
      <Stat
        stat="+50"
        header="Ferias y misiones comerciales"
        text="Asistidas en todo el mundo"
      />
      <Stat
        stat="+25"
        header="Países"
        text="En los cuales E-p@d cuenta con presencia comercial"
      />
    </section>
  );
};

export default Stats;
