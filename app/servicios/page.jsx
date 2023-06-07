import FixedBg from "@/components/shared/FixedBg";
import WhyEpad from "@/components/servicesPage/WhyEpad";
import ServicesHero from "@/components/servicesPage/ServicesHero";

import React from "react";
import Asesorias from "@/components/servicesPage/Asesorias";
import Provision from "@/components/servicesPage/Provision";
import CTA from "@/components/shared/CTA";
import Catalogo from "@/components/servicesPage/Catalogo";
import ServiciosBanner from "@/components/servicesPage/ServiciosBanner";

const Servicios = () => {
  return (
    <section>
      <FixedBg img="/imgs/servicios.jpg" />
      <ServicesHero />
      <WhyEpad />
      <Asesorias />
      
      <div className=" px-5 py-8 text-center glass">
        <h4 className="text-neutral text-3xl font-bold pb-3">
          ¡Contacta con nosotros para{" "}
          <span className="text-base-100">asistencia personalizada!</span>
        </h4>
        <CTA message="Trabaja con nosotros" />
      </div>
      <Provision />
      <Catalogo />
    </section>
  );
};

export default Servicios;
