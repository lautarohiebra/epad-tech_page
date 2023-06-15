"use client";

import React, { useState, useRef } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import emailjs from "@emailjs/browser";
import Script from "next/script";

export const Formulario = () => {
  const [enviado, setEnviado] = useState(false);

  const form = useRef();

  const enviarFormulario = (valores, { resetForm }) => {
    resetForm();
    setEnviado(true);
    setTimeout(() => setEnviado(false), 5000);
    sendEmail();
  };

  const sendEmail = () => {
    emailjs
      .sendForm(
        "service_td7klzr",
        "template_74u27dp",
        form.current,
        "aiSfXDnAcDz5ILNJE"
      )
      .then(
        (result) => {
          console.log("Formulario enviado correctamente");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    
    <div className="z-20 flex flex-col bg-slate-100 shadow-md rounded-md p-7 -my-8 mb-10 mx-auto max-w-[680px]">
      <Script src="https://www.google.com/recaptcha/api.js" async defer />
      <h3 className="text-2xl font-semibold mb-4">Envíanos tu consulta</h3>

      <Formik
        initialValues={{
          user_name: "",
          user_email: "",
          user_phone: "",
          message: "",
        }}
        validate={(valores) => {
          //Validacion nombre
          let errores = {};

          if (!valores.user_name) {
            errores.user_name = "Por favor ingresa un nombre";
          } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.user_name)) {
            errores.user_name =
              "El nombre solo puede contener letras y espacios";
          }

          //Validacion correo
          if (!valores.user_email) {
            errores.user_email = "Por favor ingresa un correo electrónico";
          } else if (
            !/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(
              valores.user_email
            )
          ) {
            errores.user_email = "El correo es inválido";
          }

          //Validacion teléfono
          if (!valores.user_phone) {
            errores.user_phone = "Por favor ingresa número de teléfono";
          } else if (!/^\d+$/.test(valores.user_phone)) {
            errores.user_phone = "El campo solo puede contener números";
          }

          //Validacion mensaje
          if (!valores.message) {
            errores.message = "Por favor ingresa un mensaje";
          }

          return errores;
        }}
        onSubmit={enviarFormulario}
      >
        {/* FORMULARIO */}

        {({ errors }) => (
          <Form ref={form}>
            <div className="flex flex-col items-center sm:items-start justify-start">
              <label htmlFor="user_name" className="font-semibold mt-4">
                Nombre completo*
              </label>
              <Field
                type="text"
                placeholder="Tu nombre aquí"
                className="input input-sm rounded-md w-full hover:bg-slate-300 transition-colors"
                required
                id="user_name"
                name="user_name" //Formik usa name para la lógica de inputs
              />
              <ErrorMessage
                name="user_name"
                component={() => (
                  <div className="p-1 font-normal text-sm text-error mt-0">
                    {errors.user_name}
                  </div>
                )}
              />

              <label htmlFor="email" className="font-semibold mt-4">
                Corréo electrónico*
              </label>
              <Field
                type="text"
                placeholder="ejemplo@gmail.com"
                className="input input-sm rounded-md w-full hover:bg-slate-300 transition-colors"
                required
                id="user_email"
                name="user_email"
              />
              <ErrorMessage
                name="user_email"
                component={() => (
                  <div className="p-1 font-normal text-sm text-error mt-0">
                    {errors.user_email}
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
                id="user_phone"
                name="user_phone"
              />
              <ErrorMessage
                name="user_phone"
                component={() => (
                  <div className="p-1 font-normal text-sm text-error mt-0">
                    {errors.user_phone}
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
                name="message"
                id="message"
              />
              <ErrorMessage
                name="message"
                component={() => (
                  <div className="p-1 font-normal text-sm text-error mt-0">
                    {errors.message}
                  </div>
                )}
              />
            </div>

            <div className="text-center">
              <p className="w-full text-left text-sm py-3 font-medium">
                "*": Campos requeridos
              </p>
              <div
                className="g-recaptcha py-3"
                data-sitekey="6Le_f58mAAAAAD8TNib2TSROs6RCNsbGQztn79DN"
              ></div>
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
  );
};

export default Formulario;
