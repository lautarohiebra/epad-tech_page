"use client";

import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";

const Formulario = () => {
  const [enviado, setEnviado] = useState(false);

  return (
    <div className="z-20 flex flex-col bg-slate-100 shadow-md rounded-md p-7 -my-8 mb-10 mx-auto max-w-[680px]">
      <div>
        <h2 className="text-2xl font-semibold mb-4">Deja tu consulta</h2>

        <Formik
          initialValues={{
            nombre: "",
            apellido: "",
            correo: "",
            telefono: "",
            mensaje: "",
          }}
          validate={(valores) => {
            //Validacion nombre
            let errores = {};

            if (!valores.nombre) {
              errores.nombre = "Por favor ingresa un nombre";
            } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.nombre)) {
              errores.nombre =
                "El nombre solo puede contener letras y espacios";
            }

            //Validacion correo
            if (!valores.correo) {
              errores.correo = "Por favor ingresa un correo electrónico";
            } else if (
              !/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(
                valores.correo
              )
            ) {
              errores.correo = "El correo es inválido";
            }

            //Validacion teléfono
            if (!valores.telefono) {
              errores.telefono = "Por favor ingresa número de teléfono";
            } else if (!/^\d+$/.test(valores.telefono)) {
              errores.telefono = "El campo solo puede contener números";
            }

            //Validacion mensaje
            if (!valores.mensaje) {
              errores.mensaje = "Por favor ingresa un mensaje";
            }

            return errores;
          }}
          onSubmit={(valores, { resetForm }) => {
            resetForm();
            console.log(valores);
            console.log("Formulario Enviado");
            setEnviado(true);
            setTimeout(() => setEnviado(false), 5000);
          }}
        >

          {/* FORMULARIO */}

          {({ errors }) => (
            <Form>
              <div className="flex flex-col items-center sm:items-start justify-start">
                <label htmlFor="nombre" className="font-semibold mt-4">
                  Nombre completo*
                </label>
                <Field
                  type="text"
                  placeholder="Tu nombre aquí"
                  className="input input-sm rounded-md w-full hover:bg-slate-300 transition-colors"
                  required
                  id="nombre"
                  name="nombre" //Formik usa name para la lógica de inputs
                />
                <ErrorMessage
                  name="nombre"
                  component={() => (
                    <div className="p-1 font-normal text-sm text-error mt-0">
                      {errors.nombre}
                    </div>
                  )}
                />

                <label htmlFor="text" className="font-semibold mt-4">
                  Corréo electrónico*
                </label>
                <Field
                  type="text"
                  placeholder="ejemplo@gmail.com"
                  className="input input-sm rounded-md w-full hover:bg-slate-300 transition-colors"
                  required
                  id="correo"
                  name="correo"
                />
                <ErrorMessage
                  name="correo"
                  component={() => (
                    <div className="p-1 font-normal text-sm text-error mt-0">
                      {errors.correo}
                    </div>
                  )}
                />

                <label htmlFor="telefono" className="font-semibold mt-4">
                  Número de teléfono*
                </label>
                <Field
                  type="text"
                  placeholder="Tu teléfono aquí"
                  className="input input-sm rounded-md w-full hover:bg-slate-300 transition-colors"
                  required
                  id="telefono"
                  name="telefono"
                />
                <ErrorMessage
                  name="telefono"
                  component={() => (
                    <div className="p-1 font-normal text-sm text-error mt-0">
                      {errors.telefono}
                    </div>
                  )}
                />

                <label htmlFor="mensaje" className="font-semibold mt-4">
                  Cuentanos en que podemos ayudar*
                </label>
                <Field
                  as="textarea"
                  type="text"
                  className="textarea textarea-lg w-full hover:bg-slate-300 transition-colors mb-4 text-sm"
                  name="mensaje"
                  id="mensaje"
                />
                <ErrorMessage
                  name="mensaje"
                  component={() => (
                    <div className="p-1 font-normal text-sm text-error mt-0">
                      {errors.mensaje}
                    </div>
                  )}
                />
              </div>

              <div className="text-center">
                <p className="w-full text-left text-sm py-3 font-medium">
                  "*": Campos requeridos
                </p>
                <button
                  type="submit"
                  className="btn btn-outline btn-sm sm:btn-md"
                >
                  Enviar consulta
                </button>

                {enviado && (
                  <p className="text-success mt-2 transition-all">
                    Formulario enviado con éxito!
                  </p>
                )}
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default Formulario;
