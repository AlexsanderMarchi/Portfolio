import "../styles/utilities.css";
import "../styles/about.css";
import myself from "../assets/Myself.jpg";
import random from "../assets/Me.jpg";
import useTranslationStore from "../store/translationStore";
import useThemeStore from "../store/themeStore";

function About() {
  const autoTranslation = useTranslationStore((state) => state.autoTranslation);
  const autoTheme = useThemeStore((state) => state.autoTheme);

  return (
    <div
      id="about"
      className={autoTheme ? "flex-items py-2 dark-theme" : "flex-items py-2"}
    >
      <div className="container flex-items">
        {!autoTranslation ? <h1>Sobre Mim</h1> : <h1>About Me</h1>}
        <div className="underline"></div>
        <div className="about-container">
          <img src={myself} alt="Myself" className="img1" />
          <div className="bio1">
            {!autoTranslation ? (
              <p>
                Olá, meu nome é Alexsander, tenho 23 anos. Sou nerd e amante de
                cinema e música boa. Atualmente, estou trabalhando na{" "}
                <span>Radar Saúde como Desenvolvedor Junior</span> e, ao mesmo
                tempo, como <span>freelancer na LeadMedia</span>, lidando com
                projetos que envolvem inteligência artificial. Até agora, já
                desenvolvi em JavaScript, React, React Native, Three.js, C++,
                Node.js e Java, além de trabalhar com bancos de dados como
                PostgreSQL, MySQL, Qdrant e Pinecone e a cada dia, estou
                aprendendo mais!
              </p>
            ) : (
              <p>
                Hello, my name is Alexsander. I'm 23 years old, nerd, an avid
                cinephile and lover of good music. I currently work at{" "}
                <span>Radar Saúde as Junior Developer </span>
                and also as <span>freelancer at LeadMedia</span>, working on
                projects involving artificial intelligence. So far, I have
                developed in JavaScript, React, React Native, Three.js, C++,
                Node.js, and Java, as well as worked with databases like
                PostgreSQL, MySQL, Qdrant, and Pinecone, and learning more every
                day!
              </p>
            )}
          </div>
          <div className="bio2">
            {!autoTranslation ? (
              <p>
                Além de trabalhar, eu também divido meu tempo com a{" "}
                <span>graduação</span> em Análise e Desenvolvimento de Sistemas
                na Estácio, onde estou no 2° semestre. Já concluí o{" "}
                <span>curso Técnico</span> em Desenvolvimento de Sistemas no
                Senai São José e, a cada dia, estou lutando mais para me
                desenvolver profissionalmente e como pessoa. Busco
                constantemente desafios que me façam aprender algo novo.
              </p>
            ) : (
              <p>
                In addition to working, I also dedicate my time to my studies,
                pursuing a <span>degree</span> in Systems Analysis and
                Development at Estácio, where I'm in my 2nd semester. I have
                already completed a <span>technical course</span> in Systems
                Development at Senai São José, and every day I'm striving to
                develop myself both professionally and personally. I constantly
                seek challenges that help me learn something new.
              </p>
            )}
          </div>
          <img src={random} alt="Myself" className="img2" />
        </div>
      </div>
    </div>
  );
}

export default About;
