import { useState, useEffect, useRef } from "react";
import { Link, Element } from "react-scroll";
import "../styles/utilities.css";
import "../styles/experience.css";
import senai from "../assets/senaiLogo.jpg";
import estacio from "../assets/estacioLogo.png";
import Lottie from "lottie-react";
import scrollAnimation from "../assets/scroll-white.json";
import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaRegCalendarAlt,
} from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { BiLogoPostgresql } from "react-icons/bi";
import { SiCypress } from "react-icons/si";
// import starWars from '../assets/starWars.json';
import { FaRegCalendarCheck } from "react-icons/fa";

function Experience() {
  const experienceList = [
    {
      id: 1,
      imagem: estacio,
      data: [<FaRegCalendarAlt />, " Fevereiro de 2024 - Agosto de 2026"],
      competencias: [
        <FaReact />,
        <IoLogoJavascript />,
        <FaHtml5 />,
        <FaCss3Alt />,
        <FaNodeJs />,
        <BiLogoPostgresql />,
        <SiCypress />,
      ],
      descricao:
        "Criação de um Streaming voltado para Pets, sendo desenvolvido em React e Node.js na parte de API.",
      title: "Graduação",
      tag: "tag tag-estudos",
      tag_type: "Currículo",
    },
    {
      id: 2,
      imagem: senai,
      data: [<FaRegCalendarCheck />, " Maio de 2021 - Dezembro de 2023"],
      competencias: [
        <FaReact />,
        <IoLogoJavascript />,
        <FaHtml5 />,
        <FaCss3Alt />,
        <FaNodeJs />,
        <BiLogoPostgresql />,
        <SiCypress />,
      ],
      descricao:
        "Na instituição Senai de São José, me formei como Técnico em Desenvolvimento de Sistemas, aprendendo programação de baixo nível assim como de alto nível, Banco de Dados, projetos em equipe, além de Modelagem e Testes de Sistemas.",
      title: "Desenvolvimento de Sistema",
      tag: "tag tag-estudos",
      tag_type: "Currículo",
    },
    {
      id: 3,
      imagem: senai,
      data: [<FaRegCalendarCheck />, " Maio de 2021 - Dezembro de 2023"],
      competencias: [
        <FaReact />,
        <IoLogoJavascript />,
        <FaHtml5 />,
        <FaCss3Alt />,
        <FaNodeJs />,
        <BiLogoPostgresql />,
        <SiCypress />,
      ],
      descricao:
        "Na instituição Senai de São José, me formei como Técnico em Desenvolvimento de Sistemas, aprendendo programação de baixo nível assim como de alto nível, Banco de Dados, projetos em equipe, além de Modelagem e Testes de Sistemas.",
      title: "Desenvolvimento de Sistema",
      tag: "tag tag-estudos",
      tag_type: "Currículo",
    },
  ];

  return (
    <div id="experience" className="py-3">
      <div className="flex-items">
        <h1>Experiências</h1>
        <div className="underline"></div>
        <ul>
          {Object.values(experienceList).map((experience) => (
            <li key={experience.id}>
              <div className="experience-container py-2">
                <p className={experience.tag}>{experience.tag_type}</p>
                <div className="flex-items">
                  <img src={experience.imagem} />
                  <div id="info" className="flex-items">
                    <h2>{experience.title}</h2>
                    <div className="underline-subtitle"></div>
                    <p>{experience.descricao}</p>
                  </div>
                </div>
                <div className="icons-competencias py-2">
                  {experience.competencias}
                </div>
                <p>{experience.data}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Experience;
// <div id='content' className='flex-items'>
//     <div className="final-content column">
//         <p>
//             Obrigado por visitar meu portfólio, se quiser entrar em contato é só cliclar nos icones acima.
//             May the force be with you.
//         </p>
//     </div>
//     <div id='light-saber' className="column final-content">
//         <Lottie animationData={starWars}
//             loop
//             autoplay
//             speed={5}
//             style={{ width: '300px', height: '300px' }} />
//     </div>
// </div>

// <Element name="section2">
//   {/* <p className='title'>Final Words</p> */}
// </Element>

// {/* <a href="#">
//           <Lottie animationData={scrollAnimation}
//               loop
//               autoplay
//               speed={5}
//               style={{ width: '200px', height: '100px' }} />
//       </a> */}
// {/* <Link to="section3" spy={true} smooth={true} duration={500} offset={-25} delay={100}>

//           <Lottie animationData={scrollAnimation}
//               loop
//               autoplay
//               speed={5}
//               style={{ width: '200px', height: '100px' }} />
//       </Link> */}
