import "../styles/utilities.css";
import "../styles/projetos.css";
import petflix from "../assets/petflix.png";
import nativeMovies from "../assets/NativeMovies.png";
import pigGame from "../assets/PigGame.png";
import snakeGame from "../assets/SnakeGame.png";
import senaiSA from "../assets/senaiSA.png";
import postman from "../assets/postman.png";
import movieTracker from "../assets/movieTracker.png";

function Projetos() {
  const projetosList = [
    {
      id: 1,
      imagem: snakeGame,
      descricao:
        "Desenvolvimento em JavaScript do famoso jogo da cobrinha. Clique Abaixo para testar o jogo",
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
      title: "Bomber Pig",
      github: "https://github.com/AlexRuan00/pig-bomb",
      website: "https://resilient-cheesecake-4e0caa.netlify.app/",
    },
    {
      id: 3,
      imagem: nativeMovies,
      descricao:
        "Foi criado aplicativos em React Native, com desenvolvimento de perfil e rede social utilizando Firebase para troca de mensagem em tempo real.",
      title: "Expo e Rede Social",
      github: "https://github.com/AlexsanderMarchi/React-Native",
    },
    {
      id: 4,
      imagem: postman,
      descricao:
        "Desenvolvimento de APIs em sala de aula, utilizando Node.js e ElephantSQL para manipulação de dados e Postman para endpoints.",
      title: "APIs",
      github: "https://github.com/AlexsanderMarchi/BackEnd-Node.js",
    },
    {
      id: 5,
      imagem: petflix,
      descricao:
        "Um Streaming voltado para Pets, sendo desenvolvido em dupla, usando Firebase para armazenamento de videos, React e Node.js na parte de API.",
      title: "Petflix",
      github: "https://github.com/AlexsanderMarchi/petFlix",
      website: "https://pet-flix-henna.vercel.app/",
    },
    {
      id: 6,
      imagem: senaiSA,
      descricao:
        "Sistema de Ensalamento, com CRUD(modelo MVC e Facade) e quadro de horários. Foi utilizado React, Node.js e SQL. Foi desenvolvido com colegas e apresentado em sala de aula.",
      title: "Senai SA",
      github: "https://github.com/PedroHGaspar/Senai-S-A",
      website: "https://senai-sa.vercel.app/",
    },
    {
      id: 7,
      imagem: movieTracker,
      descricao:
        "Como projeto paralelo, estou desenvolvento em React um sistema para busca de filmes, para ver suas informações e filmes similares. E posteriormente também será implementado banco de dados para login",
      title: "Movie Tracker",
      github: "https://github.com/AlexsanderMarchi/MovieTracker",
      website: "https://movie-tracker-rosy.vercel.app/",
    },
  ];

  return (
    <div id="projetos" className="flex-items py-3">
      <div className=" flex-items">
        <h1>Projetos</h1>
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
                    <p>{projeto.descricao}</p>
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
