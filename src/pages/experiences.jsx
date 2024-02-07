import { useState, useEffect, useRef } from "react";
import { Link, Element } from "react-scroll";
import "../styles/utilities.css";
import InnerHeader from "../components/inner_header";
import Projetos from "../components/projetos";
import Experience from "../components/experience";
import Footer from "../components/footer";

function Experiences() {
  return (
    <>
      <InnerHeader />

      <Experience />

      {/* <Projetos /> */}
      <Footer />
    </>
  );
}

export default Experiences;
