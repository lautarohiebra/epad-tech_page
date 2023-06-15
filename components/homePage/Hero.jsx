import React from "react";
import CTA from "../shared/CTA";

const Hero = () => {
  return (
    <div className="hero h-screen" id="home__hero">
      <div className="hero-overlay grayscale bg-opacity-50 overflow-hidden">
        <video
          src="/video/homeBg.mp4"
          autoPlay
          loop
          muted
          className="h-full w-full object-cover hidden md:block"
        />
      </div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-xl">
          <h1 className="mb-5 sm:text-5xl text-3xl font-bold">
            Excelencia en <span className="text-primary">Provisión</span> y
            <span className="text-primary"> Asesoramiento</span>
          </h1>
          <h2 className="mb-5  text-2xl">
            Para el fabricante electrónico Argentino.
          </h2>
          <CTA message="Entra en contacto" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
