import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import "../styles/utilities.css";
import "../styles/contacts.css";

function ContactForm() {
  const [state, handleSubmit] = useForm("xoqgegow");
  if (state.succeeded) {
    return <p>Thanks for joining!</p>;
  }
  return (
    <div id="contacts-form-submission">
      <div className="container py-3">
        <h1>Contato</h1>
        <h4>
          Entre em contato pelos ícones ou preencha os campos que eu entro em
          contato{" "}
        </h4>
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
            <label htmlFor="phone">Telefone/WhatsApp</label>
            <input id="phone" type="phone" name="phone" />
            <ValidationError
              prefix="Telefone/WhatsApp"
              field="phone"
              errors={state.errors}
            />
          </div>
          <div className="contact-form textarea">
            <label htmlFor="message">Mensagem</label>
            <textarea id="message" name="message" />
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
          </div>

          <button type="submit" disabled={state.submitting}>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default ContactForm;
