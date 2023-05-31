import React from "react";
import CTA from "../shared/CTA";

const Hero = () => {
  return (
    <div className="hero h-screen">
      <div className="hero-overlay grayscale bg-opacity-50 overflow-hidden">
        <video
          src="/video/homeBgLow.mp4"
          autoPlay
          loop
          muted
          className="h-full w-full object-cover"
        />
      </div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-xl">
          <h1 className="mb-5 sm:text-5xl text-3xl font-bold">
            Excelencia en <span className="text-accent">Provisión</span> y
            <span className="text-accent"> Asesoramiento</span>
          </h1>
          <h2 className="mb-5  text-2xl">
            Para el fabricante electrónico Argentino.
          </h2>
          <CTA message="Trabaja con nosotros!" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
