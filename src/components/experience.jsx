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
import useTranslationStore from "../store/translationStore";

function Experience() {
  const autoTranslation = useTranslationStore((state) => state.autoTranslation);

  const experienceList = [
    {
      id: 1,
      imagem: estacio,
      data: [<FaRegCalendarAlt />, " Fevereiro de 2024 - Agosto de 2026"],
      dataEnglish: [<FaRegCalendarAlt />, " February 2024 - August 2026"],
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
      descricaoEnglish:
        "Currently, I am studying at Estacio, learning to analyze, design, develop, and implement information systems.",
      titleEnglish: "Degree",
      subtitleEnglish: "Analysis and Development",
      tag_typeEnglish: "Study",
    },
    {
      id: 2,
      imagem: senai,
      data: [<FaRegCalendarCheck />, " Maio de 2021 - Dezembro de 2023"],
      dataEnglish: [<FaRegCalendarAlt />, " May 2021 - December 2023"],
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
      descricaoEnglish:
        "At Senai São José, I completed the Technical course in Systems Development, learning low-level and high-level programming, databases, teamwork projects, as well as system modeling, maintenance, and testing. ",
      titleEnglish: "Technical",
      subtitleEnglish: "Systems Development",
      tag_typeEnglish: "Study",
    },
  ];

  return (
    <div id="experience" className="py-3">
      <div className="flex-items">
        {!autoTranslation ? <h1>Experiências</h1> : <h1>Experiences</h1>}
        <div className="underline"></div>
        <ul>
          {Object.values(experienceList).map((experience) => (
            <li key={experience.id}>
              <div className="experience-container py-2">
                {!autoTranslation ? (
                  <p className={experience.tag}>{experience.tag_type}</p>
                ) : (
                  <p className={experience.tag}>{experience.tag_typeEnglish}</p>
                )}
                <div className="flex-items">
                  <img src={experience.imagem} />
                  <div id="info" className="flex-items">
                    {!autoTranslation ? (
                      <h2>{experience.title}</h2>
                    ) : (
                      <h2>{experience.titleEnglish}</h2>
                    )}
                    {!autoTranslation ? (
                      <h5>{experience.subtitle}</h5>
                    ) : (
                      <h5>{experience.subtitleEnglish}</h5>
                    )}
                    <div className="underline-subtitle"></div>
                    {!autoTranslation ? (
                      <p>{experience.descricao}</p>
                    ) : (
                      <p>{experience.descricaoEnglish}</p>
                    )}
                  </div>
                </div>
                <div className="icons-competencias py-2">
                  {experience.competencias}
                </div>
                {!autoTranslation ? (
                  <p>{experience.data}</p>
                ) : (
                  <p>{experience.dataEnglish}</p>
                )}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Experience;
