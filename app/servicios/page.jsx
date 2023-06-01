import FixedBg from "@/components/shared/FixedBg";
import WhyEpad from "@/components/servicesPage/WhyEpad";
import ServicesHero from "@/components/servicesPage/ServicesHero";

import React from "react";
import Asesorias from "@/components/servicesPage/Asesorias";

const Servicios = () => {
  return (
    <section>
      <FixedBg img="/imgs/servicios.jpg" />
      <ServicesHero />
      <WhyEpad />
      <Asesorias />
    </section>
  );
};

export default Servicios;
