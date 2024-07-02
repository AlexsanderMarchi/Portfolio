import "../styles/utilities.css";
import "../styles/projetos.css";
import petflix from "../assets/petflix.png";
import nativeMovies from "../assets/NativeMovies.png";
import pigGame from "../assets/PigGame.gif";
import snakeGame from "../assets/SnakeGame.gif";
import senaiSA from "../assets/senaiSA.png";
import postman from "../assets/postman.png";
import movieTracker from "../assets/movieTracker.png";
import globe3d from "../assets/globe3d.gif";
import useTranslationStore from "../store/translationStore";

function Projetos() {
  const autoTranslation = useTranslationStore((state) => state.autoTranslation);

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
      imagem: nativeMovies,
      descricao:
        "Foi criado aplicativos em React Native, com desenvolvimento de perfil e rede social utilizando Firebase para troca de mensagem em tempo real.",
      descricaoEnglish:
        "Created applications in React Native, developing profile and social network features using Firebase for real-time messaging.",
      title: "Expo e Rede Social",
      github: "https://github.com/AlexsanderMarchi/React-Native",
    },
    {
      id: 4,
      imagem: postman,
      descricao:
        "Desenvolvimento de APIs em sala de aula, utilizando Node.js e ElephantSQL para manipulação de dados e Postman para endpoints.",
      descricaoEnglish:
        "Developed APIs in class using Node.js and ElephantSQL for data manipulation, and Postman for testing endpoints.",
      title: "APIs",
      github: "https://github.com/AlexsanderMarchi/BackEnd-Node.js",
    },
    {
      id: 5,
      imagem: petflix,
      descricao:
        "Um Streaming voltado para Pets, sendo desenvolvido em dupla, usando Firebase para armazenamento de videos, React e Node.js na parte de API.",
      descricaoEnglish:
        "A streaming service focused on pets, developed in pairs, using Firebase for video storage, and React and Node.js for the API.",
      title: "Petflix",
      github: "https://github.com/AlexsanderMarchi/petFlix",
      website: "https://pet-flix-henna.vercel.app/",
    },
    {
      id: 6,
      imagem: senaiSA,
      descricao:
        "Sistema de Ensalamento, com CRUD(modelo MVC e Facade) e quadro de horários. Foi utilizado React, Node.js e SQL. Foi desenvolvido com colegas e apresentado em sala de aula.",
      descricaoEnglish:
        "Classroom Scheduling System with CRUD (MVC model and Facade) and a timetable. Used React, Node.js, and SQL. Developed with colleagues and presented in class.",
      title: "Senai SA",
      github: "https://github.com/PedroHGaspar/Senai-S-A",
      website: "https://senai-sa.vercel.app/",
    },
    {
      id: 7,
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
      id: 8,
      imagem: globe3d,
      descricao:
        "Planeta Terra em 3D, desenvolvido usando Three.js, com APIs de geolocalização e para identificar o país que for clicado. ",
      descricaoEnglish:
        "3D Planet Earth, developed using Three.js, with geolocation APIs to identify the country clicked on. ",
      title: "Globe 3D",
      github: "https://github.com/AlexsanderMarchi/Globo3D",
      website: "https://globo3-d-x18o.vercel.app/",
    },
  ];

  return (
    <div id="projetos" className="flex-items py-3">
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
