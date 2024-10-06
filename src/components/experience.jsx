import "../styles/utilities.css";
import "../styles/experience.css";
import senai from "../assets/senaiLogo.jpg";
import estacio from "../assets/estacioLogo.png";
import radarsaude from "../assets/radarsaudeLogo.png";
import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaJava,
  FaPython,
  FaRegCalendarAlt,
  FaGitAlt,
} from "react-icons/fa";
import { SiPhp } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io5";
import { BiLogoPostgresql } from "react-icons/bi";
import {
  SiCypress,
  SiTypescript,
  SiTailwindcss,
  SiMysql,
} from "react-icons/si";
// import starWars from '../assets/starWars.json';
import { FaRegCalendarCheck } from "react-icons/fa";
import useTranslationStore from "../store/translationStore";

function Experience() {
  const autoTranslation = useTranslationStore((state) => state.autoTranslation);

  const experienceList = [
    {
      id: 1,
      imagem: senai,
      data: [<FaRegCalendarCheck />, " Maio de 2021 - Dezembro de 2023"],
      dataEnglish: [<FaRegCalendarCheck />, " May 2021 - December 2023"],
      competencias: [
        <FaReact />,
        <IoLogoJavascript />,
        <FaHtml5 />,
        <FaCss3Alt />,
        <FaNodeJs />,
        <BiLogoPostgresql />,
        <FaGitAlt />,
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
    {
      id: 2,
      imagem: estacio,
      data: [<FaRegCalendarAlt />, " Fevereiro de 2024 - Agosto de 2026"],
      dataEnglish: [<FaRegCalendarAlt />, " February 2024 - August 2026"],
      competencias: [
        <SiPhp />,
        <FaPython />,
        <FaJava />,
        <SiMysql />,
        <IoLogoJavascript />,
        <FaHtml5 />,
        <FaCss3Alt />,
      ],
      descricao:
        "Atualmente estou me graduando na Estacio, aprendendo a analisar, projetar, desenvolver e implementar sistemas de informação, com projetos acadêmicos em equipe envolvendo linguagens de Backend e FrontEnd",
      title: "Superior",
      subtitle: "Analise e Desenvolvimento de Sistema",
      tag: "tag tag-estudos",
      tag_type: "Estudo",
      descricaoEnglish:
        "Currently, I am studying at Estacio, learning to analyze, design, develop, and implement information systems, developing academic projects in teams involving both Backend and Frontend languages.",
      titleEnglish: "Degree",
      subtitleEnglish: "Analysis and System Development",
      tag_typeEnglish: "Study",
    },
    // {
    //   id: 3,
    //   imagem: senai,
    //   data: [<FaRegCalendarAlt />, " Setembro de 2024 - Presente"],
    //   dataEnglish: [<FaRegCalendarAlt />, " September 2024 - Present"],
    //   competencias: [
    //     <FaReact />,
    //     <IoLogoJavascript />,
    //     <FaHtml5 />,
    //     <FaCss3Alt />,
    //     <FaNodeJs />,
    //     <BiLogoPostgresql />,
    //     <SiCypress />,
    //   ],
    //   descricao:
    //     "Na instituição Senai de São José, me formei em Desenvolvimento de Sistemas, aprendendo programação de baixo nível assim como de alto nível, Banco de Dados, projetos em equipe, além de Modelagem, Manutenção e Testes de Sistemas.",
    //   title: "Técnico",
    //   subtitle: "Desenvolvimento de Sistema",
    //   tag: "tag tag-job",
    //   tag_type: "Trabalho",
    //   descricaoEnglish:
    //     "At Senai São José, I completed the Technical course in Systems Development, learning low-level and high-level programming, databases, teamwork projects, as well as system modeling, maintenance, and testing. ",
    //   titleEnglish: "Technical",
    //   subtitleEnglish: "Systems Development",
    //   tag_typeEnglish: "Job",
    // },
    {
      id: 4,
      imagem: radarsaude,
      data: [<FaRegCalendarAlt />, " Outubro de 2024 - Presente"],
      dataEnglish: [<FaRegCalendarAlt />, " October 2024 - Present"],
      competencias: [
        <SiTypescript />,
        <FaReact />,
        <IoLogoJavascript />,
        <FaHtml5 />,
        <FaCss3Alt />,
        <SiTailwindcss />,
        <FaNodeJs />,
        <BiLogoPostgresql />,
        <FaGitAlt />,
      ],
      descricao:
        "Como estágiario, estou desenvolvendo aplicações em TypeScript e Java, utilizando o banco de dados PostgreSQL, além de criar relatórios e propor melhorias nas práticas de desenvolvimento de sistemas.",
      title: "Radar Saúde",
      subtitle: "Estágio em Desenvolvimento de Sistema",
      tag: "tag tag-job",
      tag_type: "Trabalho",
      descricaoEnglish:
        "As an intern, I am developing applications in TypeScript and Java, utilizing PostgreSQL as the database, while also creating reports and proposing improvements to development practices.",
      titleEnglish: "Radar Saude",
      subtitleEnglish: "Internship in Systems Development",
      tag_typeEnglish: "Job",
    },
  ];

  return (
    <div id="experience" className="py-3">
      <div className="flex-items">
        {!autoTranslation ? <h1>Experiências</h1> : <h1>Experiences</h1>}
        <div className="underline"></div>
        <ul>
          {Object.values(experienceList)
            .reverse()
            .map((experience) => (
              <li key={experience.id}>
                <div className="experience-container py-2">
                  {!autoTranslation ? (
                    <p className={experience.tag}>{experience.tag_type}</p>
                  ) : (
                    <p className={experience.tag}>
                      {experience.tag_typeEnglish}
                    </p>
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
