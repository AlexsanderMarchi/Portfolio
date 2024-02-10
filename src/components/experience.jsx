import "../styles/utilities.css";
import "../styles/experience.css";
import senai from "../assets/senaiLogo.jpg";
import estacio from "../assets/estacioLogo.png";
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
        "Atualmente estou me graduando na Estacio, aprendendo a analisar, projetar, desenvolver e implementar sistemas de informação",
      title: "Superior",
      subtitle: "Analise e Desenvolvimento de Sistema",
      tag: "tag tag-estudos",
      tag_type: "Estudo",
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
        "Na instituição Senai de São José, me formei em Desenvolvimento de Sistemas, aprendendo programação de baixo nível assim como de alto nível, Banco de Dados, projetos em equipe, além de Modelagem, Manutenção e Testes de Sistemas.",
      title: "Técnico",
      subtitle: "Desenvolvimento de Sistema",
      tag: "tag tag-estudos",
      tag_type: "Estudo",
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
                    <h5>{experience.subtitle}</h5>
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
