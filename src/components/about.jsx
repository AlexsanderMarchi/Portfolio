import "../styles/utilities.css";
import "../styles/about.css";
import myself from "../assets/Myself.jpg";
import random from "../assets/Me.jpg";

function About() {
  return (
    <div id="about" className="flex-items py-2">
      <div className="container flex-items">
        <h1>Sobre Mim</h1>
        <div className="underline"></div>
        <div className="about-container">
          <img src={myself} alt="Myself" className="img1" />
          <div className="bio1">
            <p>
              Olá, Me chamo Alexsander, 23 anos. Nerd, amante de cinema e música
              boa, atualmente, estou me graduando na instituição Estácio em
              Análise e Desenvolvimento de Sistemas. Ja desenvolvi em
              JavaScript, React, React Native, C++, Node.js e SQL, e a cada dia
              aprendendo mais.
            </p>
          </div>
          <div className="bio2">
            <p>
              Ja tendo concluído o curso Técnico em Desenvolvimento de Sistemas
              no Senai São José, estou cada dia lutando mais para conseguir me
              desenvolver profissionalmente e como pessoa. Eu busco
              constantemente desafios que me levem a aprender algo novo.
            </p>
          </div>
          <img src={random} alt="Myself" className="img2" />
        </div>
      </div>
    </div>
  );
}

export default About;
