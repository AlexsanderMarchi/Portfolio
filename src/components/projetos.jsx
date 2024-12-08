import "../styles/utilities.css";
import "../styles/projetos.css";
import petflix from "../assets/petflix.png";
import pigGame from "../assets/PigGame.gif";
import snakeGame from "../assets/SnakeGame.gif";
// import senaiSA from "../assets/senaiSA.png";
import movieTracker from "../assets/movieTracker.png";
import globe3d from "../assets/globe3d.gif";
import manicure from "../assets/manicure.gif";
import useTranslationStore from "../store/translationStore";
import useThemeStore from "../store/themeStore";

function Projetos() {
  const autoTranslation = useTranslationStore((state) => state.autoTranslation);
  const autoTheme = useThemeStore((state) => state.autoTheme);

  const projetosList = [
    {
      id: 1,
      imagem: snakeGame,
      descricao:
        "Desenvolvimento em JavaScript do famoso jogo da cobrinha. Clique Abaixo para testar o jogo",
      descricaoEnglish:
        "Development in JavaScript of the famous Snake game. Click below to test the game.",
      title: "Snake Game",
      github: "https://github.com/AlexsanderMarchi/JogoDaCobrinha",
      website:
        "https://65b71a5a5b9715dcea809d2e--legendary-medovik-07e8d5.netlify.app/",
    },
    {
      id: 2,
      imagem: pigGame,
      descricao:
        "Utilizado canvas no JS para desenvolver uma cópia do bomberman, contendo IA para os inimigos. Foi desenvolvido e apresentado em grupo, contendo 4 fases e um Boss final.",
      descricaoEnglish:
        "Used canvas in JavaScript to develop a copy of Bomberman, featuring AI for enemies. It was developed and presented as a group project, containing 4 levels and a final boss.",
      title: "Bomber Pig",
      github: "https://github.com/AlexRuan00/pig-bomb",
      website: "https://resilient-cheesecake-4e0caa.netlify.app/",
    },
    {
      id: 3,
      imagem: petflix,
      descricao:
        "Um Streaming voltado para Pets, sendo desenvolvido em dupla, usando Firebase para armazenamento de videos, React e Node.js na parte de API.",
      descricaoEnglish:
        "A streaming service focused on pets, developed in pairs, using Firebase for video storage, and React and Node.js for the API.",
      title: "Petflix",
      github: "https://github.com/AlexsanderMarchi/petFlix",
      website: "https://pet-flix-henna.vercel.app/",
    },
    // {
    //   id: 4,
    //   imagem: senaiSA,
    //   descricao:
    //     "Sistema de Ensalamento, com CRUD(modelo MVC e Facade) e quadro de horários. Foi utilizado React, Node.js e SQL. Foi desenvolvido com colegas e apresentado em sala de aula.",
    //   descricaoEnglish:
    //     "Classroom Scheduling System with CRUD (MVC model and Facade) and a timetable. Used React, Node.js, and SQL. Developed with colleagues and presented in class.",
    //   title: "Senai SA",
    //   github: "https://github.com/PedroHGaspar/Senai-S-A",
    //   website: "https://senai-sa.vercel.app/",
    // },
    {
      id: 4,
      imagem: movieTracker,
      descricao:
        "Como projeto paralelo, estou desenvolvento em React um sistema para busca de filmes, para ver suas informações e filmes similares. E posteriormente também será implementado banco de dados para login",
      descricaoEnglish:
        "As a side project, I am developing a movie search system in React to view movie information and similar films. A database for login will be implemented later.",
      title: "Movie Tracker",
      github: "https://github.com/AlexsanderMarchi/MovieTracker",
      website: "https://movie-tracker-rosy.vercel.app/",
    },
    {
      id: 5,
      imagem: globe3d,
      descricao:
        "Planeta Terra em 3D, desenvolvido usando Three.js, com APIs de geolocalização para identificar o país que for clicado. ",
      descricaoEnglish:
        "3D Planet Earth, developed using Three.js, with geolocation APIs to identify the country clicked on. ",
      title: "Globe 3D",
      github: "https://github.com/AlexsanderMarchi/Globo3D",
      website: "https://globo3-d-x18o.vercel.app/",
    },
    {
      id: 6,
      imagem: manicure,
      descricao:
        "Projeto acadêmico, indo desde apresentar a ideia para o cliente, até seu desenvolvimento e teste. Foi utilizado Java, Spring Boot, PostegreSQL e JavaScript ",
      descricaoEnglish:
        "Academic project, ranging from presenting the idea to the client to its development and testing. Java, Spring Boot, PostgreSQL, and JavaScript were used.",
      title: "Projeto Manicure",
      github: "https://github.com/AlexsanderMarchi/Manicure-ProjetoDeExtensao",
      website: "https://manicure-projeto-de-extensao.vercel.app/",
    },
  ];

  return (
    <div
      id="projetos"
      className={autoTheme ? "flex-items py-3 dark-theme" : "flex-items py-3"}
    >
      <div className="container flex-items">
        {!autoTranslation ? <h1>Projetos</h1> : <h1>Projects</h1>}
        <div className="underline"></div>
        <ul>
          {Object.values(projetosList)
            .reverse()
            .map((projeto) => (
              <li key={projeto.id}>
                <div className="projeto">
                  <img src={projeto.imagem} />
                  <div className="projeto-text">
                    <h2>{projeto.title}</h2>
                    {!autoTranslation ? (
                      <p>{projeto.descricao}</p>
                    ) : (
                      <p>{projeto.descricaoEnglish}</p>
                    )}
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
                </div>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
}

export default Projetos;
