import React from "react";

const data = [
  {title: "Experiencia."},
  { title: "Capacidad." },
  { title: "Adaptabilidad al mercado." },
  { title: "Recursos." },
];

const WhyEpad = () => {
  return (
    <div className="center w-full bg-base-100 p-5 mx-auto shadow-md">
      <h3 className=" text-black mb-3 text-2xl font-medium underline underline-offset-2">¿Por qué Ep@d?</h3>
      <p className="bg-slate-100 p-4 rounded-md shadow-sm mb-2">En Epad-Tech, nos destacamos por nuestra trayectoria y experiencia comprobada en la industría electrónica. Ofrecemos soluciones personalizadas y eficientes para satisfacer las necesidades únicas de su empresa. Nuestro equipo altamente capacitado está comprometido en brindarle un servicio profesional y resultados de calidad. Confiabilidad, compromiso y excelencia son los pilares fundamentales en nuestra relación con los clientes. Estamos aquí para ser su socio confiable y ayudarle a alcanzar sus objetivos empresariales.</p>
      <ul className="list-disc px-5">
        {data.map((reason) => (
          <li className="text-lg " key={reason.title}>
            <h3>{reason.title}</h3>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default WhyEpad;
