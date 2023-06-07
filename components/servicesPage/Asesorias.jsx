import React from "react";
import ServiciosBanner from "./ServiciosBanner";
import ServiciosCard from "./ServiciosCard";

const Asesorias = () => {
  return (
    <div id="asesorias" className="flex flex-col w-full backdrop-grayscale pt-8">
      <ServiciosBanner text="Asesorías" />
      <ServiciosCard />
    </div>
  );
};

export default Asesorias;
