import "../styles/utilities.css";
import "../styles/about.css";
import myself from "../assets/Myself.jpg";
import random from "../assets/Me.jpg";
import useTranslationStore from "../store/translationStore";

function About() {
  const autoTranslation = useTranslationStore((state) => state.autoTranslation);

  return (
    <div id="about" className="flex-items py-2">
      <div className="container flex-items">
        {!autoTranslation ? <h1>Sobre Mim</h1> : <h1>About Me</h1>}
        <div className="underline"></div>
        <div className="about-container">
          <img src={myself} alt="Myself" className="img1" />
          <div className="bio1">
            {!autoTranslation ? (
              <p>
                Olá, Me chamo Alexsander, 23 anos. Nerd, amante de cinema e
                música boa, atualmente, estou me graduando na instituição
                Estácio em Análise e Desenvolvimento de Sistemas. Ja desenvolvi
                em JavaScript, React, React Native, Three.js, C++, Node.js e
                SQL, e a cada dia aprendendo mais. Ja tendo concluído o curso
                Técnico em Desenvolvimento de Sistemas no Senai São José, estou
                cada dia lutando mais para conseguir me desenvolver
                profissionalmente e como pessoa. Eu busco constantemente
                desafios que me levem a aprender algo novo.
              </p>
            ) : (
              <p>
                Hello, my name is Alexsander. I'm 23 years old, nerd, an avid
                cinephile and lover of good music, I'm currently pursuing a
                degree in Systems Analysis and Development at Estácio. I have
                experience developing in JavaScript, React, React Native,
                Three.js, C++, Node.js e SQL, and I am learning more every day.
                Having already completed a technical course in Systems
                Development at Senai Sao Jose, now I'm fighting more day after
                day to develop myself as a professional and as a person. I
                constantly seek challenges that lead me to learn something new.
              </p>
            )}
          </div>
          {/* <div className="bio2">
            {!autoTranslation ? (
              <p>
                Ja tendo concluído o curso Técnico em Desenvolvimento de
                Sistemas no Senai São José, estou cada dia lutando mais para
                conseguir me desenvolver profissionalmente e como pessoa. Eu
                busco constantemente desafios que me levem a aprender algo novo.
              </p>
            ) : (
              <p>
                Having already completed a technical course in Systems
                Development at Senai Sao Jose, now I'm fighting more day after
                day to develop myself as a professional and as a person. I
                constantly seek challenges that lead me to learn something new.
              </p>
            )}
          </div> */}
          {/* <img src={random} alt="Myself" className="img2" /> */}
        </div>
      </div>
    </div>
  );
}

export default About;
