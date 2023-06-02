import React from "react";

const Form = () => {
  return (
    <div className="z-20 flex flex-col bg-slate-100 p-7 -my-8 mb-10 mx-auto max-w-[680px]">
      <div>
        <h2 className="text-2xl font-semibold mb-4">Trabaja con nosotros</h2>
        <form className=" ">
          <div className="flex flex-col md:flex-row flex-wrap gap-4 items-center align-middle justify-center">
          <input
            type="text"
            placeholder="Nombre"
            class="input input-sm rounded-md max-w-xs hover:bg-slate-300 transition-colors"
            required
          />
          <input
            type="text"
            placeholder="Apellido"
            class="input input-sm rounded-md max-w-xs hover:bg-slate-300 transition-colors"
            required
          />
          <input
            type="email"
            placeholder="Email"
            class="input input-sm rounded-md max-w-xs hover:bg-slate-300 transition-colors"
            required
          />
          <input
            type="number"
            placeholder="Teléfono"
            class="input input-sm rounded-md max-w-xs hover:bg-slate-300 transition-colors"
          />
          <input
            type="text"
            placeholder="Empresa"
            class="input input-sm rounded-md hover:bg-slate-300 transition-colors"
          />
          </div>
            <div>

            </div>
        </form>
      </div>
      <div className="flex flex-col gap-4 items-start align-middle justify-center py-4">
        <h3 className="text-left">¿En que podemos ayudarte?</h3>
        <textarea type="text" className="textarea w-full hover:bg-slate-300 transition-colors" />
      </div>
    </div>
  );
};

export default Form;
