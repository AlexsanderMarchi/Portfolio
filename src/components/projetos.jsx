import { useState, useEffect, useRef } from "react";
import { Link, Element } from "react-scroll";
import "../styles/utilities.css";
import "../styles/projetos.css";
import Lottie from "lottie-react";
import scrollAnimation from "../assets/scroll-white.json";
import leftRight from "../assets/leftRight.json";
import petflix from "../assets/petflix.png";
import nativeMovies from "../assets/NativeMovies.png";
import pigGame from "../assets/PigGame.png";
import snakeGame from "../assets/SnakeGame.png";
import senaiSA from "../assets/senaiSA.png";
import postman from "../assets/postman.png";

function Projetos() {
  const projetosList = [
    {
      id: 1,
      imagem: senaiSA,
      descricao:
        "Sistema de Ensalamento, com CRUD(modelo MVC e Facade) e quadro de horários. Foi utilizado React, Node.js e SQL. Foi desenvolvido com colegas e apresentado em sala de aula",
      title: "Senai SA",
      github: "https://github.com/PedroHGaspar/Senai-S-A",
      website: "https://senai-sa.vercel.app/",
    },
    {
      id: 2,
      imagem: petflix,
      descricao:
        "Criação de um Streaming voltado para Pets, sendo desenvolvido, em dupla, usando Firebase para armazenamento de videos, React e Node.js na parte de API.",
      title: "Petflix",
      github: "https://github.com/AlexsanderMarchi/petFlix",
      website: "https://pet-flix-henna.vercel.app/",
    },
    {
      id: 2,
      imagem: postman,
      descricao:
        "Criação de APIs em sala de aula, utilizando Node.js e ElephantSQL para manipulação de dados e Postman para endpoints.",
      title: "APIs",
      github: "https://github.com/AlexsanderMarchi/BackEnd-Node.js",
    },
    {
      id: 4,
      imagem: nativeMovies,
      descricao:
        "Criação de aplicativos em React Native, com desenvolvimento de perfil e rede social utilizando Firebase para troca de mensagem em tempo real",
      title: "Expo",
      github: "https://github.com/AlexsanderMarchi/React-Native",
    },
    {
      id: 5,
      imagem: pigGame,
      descricao:
        "Utilização de canvas no JS para desenvolvimento de uma cópia do bomberman, contendo IA para os inimigos. Foi desenvolvimento e apresentado em grupo, contendo 4 fases e um Boss final. Clique Abaixo para testar o jogo",
      title: "Bomber Pig",
      github: "https://github.com/AlexRuan00/pig-bomb",
      website: "https://resilient-cheesecake-4e0caa.netlify.app/",
    },
    {
      id: 6,
      imagem: snakeGame,
      descricao:
        "Utilização de JavaScript para desenvolvimento do famoso jogo da cobrinha. Clique Abaixo para testar o jogo",
      title: "Snake Game",
      github: "https://github.com/AlexsanderMarchi/JogoDaCobrinha",
      website:
        "https://65b71a5a5b9715dcea809d2e--legendary-medovik-07e8d5.netlify.app/",
    },
  ];

  // Funções para rolar a lista de projetos para a esquerda e direita
  // const scrollLeft = () => {
  //     const projetosContainer = document.querySelector('.projetos-content');
  //     projetosContainer.scrollLeft -= 200; // Você pode ajustar o valor de acordo com a quantidade que deseja rolar
  // };

  // const scrollRight = () => {
  //     const projetosContainer = document.querySelector('.projetos-content');
  //     projetosContainer.scrollLeft += 200; // Você pode ajustar o valor de acordo com a quantidade que deseja rolar
  // };

  return (
    <div id="projetos" className="flex-items bg-grey">
      <Element name="section3">
        {/* <h2 className='title'>Projetos</h2> */}
      </Element>
      <div className="projetos-list container">
        {Object.values(projetosList).map((projeto) => (
          <li key={projeto.id} className="projeto flex-items bg-dark img-left">
            <div className="column list-column">
              <img className="img-left" src={projeto.imagem} />
            </div>
            <div className="column list-column list-info">
              <h2 className="projetos-subtitle">{projeto.title}</h2>
              <p className="projetos">{projeto.descricao}</p>
              {projeto.website && (
                <p>
                  Website: <br />
                  <a
                    href={projeto.website}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {projeto.website}
                  </a>
                </p>
              )}
              <p>
                GIT HUB: <br />
                <a href={projeto.github} target="_blank">
                  {projeto.github}
                </a>
              </p>
            </div>
          </li>
        ))}
      </div>
      {/* <a href="#">
                <Lottie animationData={scrollAnimation}
                    loop
                    autoplay
                    speed={5}
                    style={{ width: '200px', height: '100px' }} />
            </a> */}
      {/* <Link to="section3" spy={true} smooth={true} duration={500} offset={-25} delay={100}>

                <Lottie animationData={scrollAnimation}
                    loop
                    autoplay
                    speed={5}
                    style={{ width: '200px', height: '100px' }} />
            </Link> */}
    </div>
  );
}

export default Projetos;

// < div className = "scroll-buttons" >
//             <Lottie animationData={leftRight}
//                 loop
//                 autoplay
//                 speed={5}
//                 onClick={scrollLeft}
//                 style={{ width: '150px', height: '200px' }} />
//             <Lottie animationData={leftRight}
//                 loop
//                 autoplay
//                 speed={5}
//                 onClick={scrollRight}
//                 style={{ width: '150px', height: '200px', transform: 'scaleX(-1)' }} />
//         </div >
