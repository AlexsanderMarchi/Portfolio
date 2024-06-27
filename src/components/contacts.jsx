import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import "../styles/utilities.css";
import "../styles/contacts.css";
import useTranslationStore from "../store/translationStore";

function ContactForm() {
  const autoTranslation = useTranslationStore((state) => state.autoTranslation);

  const [state, handleSubmit] = useForm("xoqgegow");
  if (state.succeeded) {
    return <p>Thanks for joining!</p>;
  }
  return (
    <div id="contacts-form-submission">
      <div className="container py-3">
        {!autoTranslation ? (
          <>
            <h1>Contato</h1>
            <h4>
              Entre em contato pelos ícones ou preencha os campos que eu entro
              em contato{" "}
            </h4>
          </>
        ) : (
          <>
            <h1>Contact</h1>
            <h4>
              Get in touch by clicking in the icons below or fill out the fields
              so that I can contact you
            </h4>
          </>
        )}
        <div className="underline"></div>
        <form className="form-container" onSubmit={handleSubmit}>
          <div className="contact-form">
            <label htmlFor="email">Email</label>
            <input id="email" type="email" name="email" />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
          </div>
          <div className="contact-form">
            {!autoTranslation ? (
              <label htmlFor="phone">Telefone/WhatsApp</label>
            ) : (
              <label htmlFor="phone">Phone/WhatsApp</label>
            )}
            <input id="phone" type="phone" name="phone" />
            <ValidationError
              prefix="Telefone/WhatsApp"
              field="phone"
              errors={state.errors}
            />
          </div>
          <div className="contact-form textarea">
            {!autoTranslation ? (
              <label htmlFor="message">Mensagem</label>
            ) : (
              <label htmlFor="message">Message</label>
            )}
            <textarea id="message" name="message" />
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
          </div>

          {!autoTranslation ? (
            <button type="submit" disabled={state.submitting}>
              Enviar
            </button>
          ) : (
            <button type="submit" disabled={state.submitting}>
              Submit
            </button>
          )}
        </form>
      </div>
    </div>
  );
}

export default ContactForm;
