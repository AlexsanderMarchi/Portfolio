import { useState, useEffect, useRef } from "react";
import { Link, Element } from "react-scroll";
import "../styles/utilities.css";
import InnerHeader from "../components/inner_header";
import ContactForm from "../components/contacts";
import Experience from "../components/experience";
import Footer from "../components/footer";

function Contact() {
  return (
    <>
      <InnerHeader />

      <ContactForm />

      <Footer />
    </>
  );
}

export default Contact;
