import React from "react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <>
      <footer className="footer place-items-center p-10 bg-neutral-900 text-base-100">
        <div className="flex flex-col justify-center items-center text-center">
          <Image src="/imgs/logo.svg" width={150} height={150} />
          <p className="text-base-100">
            Brindando tecnología de calidad desde 2009
          </p>
        </div>
        <div className="text-center md:text-left">
          <span className="footer-title mx-auto md:mx-0">Contacto</span>
          <ul>
            <li>Avenida del Libertador 7790 10mo B.</li>
            <li>1429 - Buenos Aires</li>
            <li>Argentina</li>
            <li>Tel: 005411 47018709</li>
            <li>mail: info@e-padtech.com.ar</li>
          </ul>
        </div>
        <div className="flex flex-col items-center md:items-start">
          <span className="footer-title mx-auto md:mx-0">Links</span>
          <Link href="/" className="link link-hover">Inicio</Link>
          <Link href="/nosotros" className="link link-hover">Sobre Nosotros</Link>
          <Link href="/servicios" className="link link-hover">Servicios</Link>
          <Link href="/contacto" className="link link-hover">Formulario de Contacto</Link>
        </div>
      </footer>
    </>
  );
};

export default Footer;
