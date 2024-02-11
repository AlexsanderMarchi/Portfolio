import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../styles/utilities.css";
import "../styles/header.css";

function Header() {
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    const words = [" meus Projetos.", " minhas Experiências."];
    const wait = 3000;

    const type = () => {
      const currentWord = wordIndex % words.length;
      const fullTxt = words[currentWord];

      if (isDeleting) {
        setText((prevText) => prevText.slice(0, -1));
      } else {
        setText((prevText) => fullTxt.slice(0, prevText.length + 1));
      }

      if (!isDeleting && text === fullTxt) {
        setTimeout(() => setIsDeleting(true), wait);
      } else if (isDeleting && text === "") {
        setIsDeleting(false);
        setWordIndex((prevIndex) => prevIndex + 1);
      }
    };

    const timeout = setTimeout(type, isDeleting ? 150 : 300);

    return () => clearTimeout(timeout);
  }, [text, isDeleting, wordIndex]);

  return (
    <header id="header-container" className="flex-items py-1">
      <div className="container">
        <div id="navbar" className="flex-items">
          <Link to={`/`}>
            <a href="#">Home</a>
          </Link>
          {/* <Link to={`/Contact`}>
            <a href="#">Contatos</a>
          </Link> */}

          {/* <a href="#">Projetos</a> */}
        </div>
        <div id="showcase">
          <div className="showcase-info">
            <h1 className="title">&lt; Bem vindo(a) ao meu portfólio /&gt;</h1>
            <h2>
              Aqui você encontrará
              <span className="txt">{text}</span>
            </h2>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
