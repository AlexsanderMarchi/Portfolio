import { Link } from "react-router-dom";
import "../styles/utilities.css";
import "../styles/header.css";

function Header() {
  return (
    <header id="header-container" className="flex-items py-1">
      <div className="container">
        <div id="navbar" className="flex-items">
          <Link to={`/`}>
            <a href="#">Home</a>
          </Link>
          {/* <Link to={`/Experiences`}>
            <a href="#">Experience</a>
          </Link> */}

          {/* <a href="#">Projetos</a> */}
        </div>
        <div id="showcase">
          <h1 className="title">&lt; Bem vindo(a) ao meu portfólio /&gt;</h1>
        </div>
      </div>
    </header>
  );
}

export default Header;
