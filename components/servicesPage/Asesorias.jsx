import React from "react";
import ServiciosBanner from "./ServiciosBanner";
import ServiciosCard from "./ServiciosCard";

const Asesorias = () => {
  return (
    <div className="flex flex-col w-full backdrop-grayscale min-h-screen ">
      <ServiciosBanner text="Asesorias" />
      <ServiciosCard />
    </div>
  );
};

export default Asesorias;