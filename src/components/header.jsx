import React, { useEffect, useState } from "react";
import "../styles/utilities.css";
import "../styles/header.css";
import useTranslationStore from "../store/translationStore";
import useThemeStore from "../store/themeStore";
import { FaSun } from "react-icons/fa";
import { FaMoon } from "react-icons/fa6";

function Header() {
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [wordIndex, setWordIndex] = useState(0);
  const autoTranslation = useTranslationStore((state) => state.autoTranslation);
  const translationClicked = useTranslationStore(
    (state) => state.translationClicked
  );
  const autoTheme = useThemeStore((state) => state.autoTheme);
  const themeClicked = useThemeStore((state) => state.themeClicked);

  useEffect(() => {
    const words = autoTranslation
      ? [" my Projects.", " my Experiences."]
      : [" meus Projetos.", " minhas Experiências."];
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
    <header
      id="header-container"
      className={autoTheme ? "flex-items py-1 dark-theme" : "flex-items py-1"}
    >
      <div className="container">
        <div id="navbar" className="flex-items">
          {!autoTranslation ? (
            <>
              <a href="#" onClick={translationClicked}>
                Inglês
              </a>
              <a href="#" className="translationIndex">
                Português
              </a>
            </>
          ) : (
            <>
              <a href="#" className="translationIndex">
                English
              </a>
              <a href="#" onClick={translationClicked}>
                Portuguese
              </a>
            </>
          )}
          <div id="icons-theme-container">
            {!autoTheme ? (
              <>
                <span
                  className="icons-header-content icon-header-off"
                  onClick={themeClicked}
                >
                  <FaMoon />
                </span>
                <span className="icons-header-content icon-header-active">
                  <FaSun />
                </span>
              </>
            ) : (
              <>
                <span className="icons-header-content icon-header-active">
                  <FaMoon />
                </span>
                <span
                  className="icons-header-content icon-header-off"
                  onClick={themeClicked}
                >
                  <FaSun />
                </span>
              </>
            )}
          </div>
        </div>
        <div id="showcase">
          <div className="showcase-info">
            {!autoTranslation ? (
              <h1 className="title">
                &lt; Bem vindo(a) ao meu portfólio /&gt;
              </h1>
            ) : (
              <h1 className="title">&lt; Welcome to my portfolio /&gt;</h1>
            )}
            {!autoTranslation ? (
              <h2>
                Aqui você encontrará
                <span className="txt">{text}</span>
              </h2>
            ) : (
              <h2>
                Right Here you will find
                <span className="txt">{text}</span>
              </h2>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
