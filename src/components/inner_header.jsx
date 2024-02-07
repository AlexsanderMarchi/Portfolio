import { useState, useEffect, useRef } from "react";
import { Element } from "react-scroll";
import { Link } from "react-router-dom";
import "../styles/utilities.css";
import "../styles/inner_header.css";
import {
  AiFillInstagram,
  AiFillGithub,
  AiTwotoneMail,
  AiFillLinkedin,
} from "react-icons/ai";

function InnerHeader() {
  return (
    <header id="inner-header" className="flex-items py-1">
      <div className="container">
        <div id="navbar" className="flex-items">
          <Link to={`/`}>
            <a href="#">Home</a>
          </Link>
          <Link to={`/Experiences`}>
            <a href="#">Experience</a>
          </Link>

          {/* <a href="#">Projetos</a> */}
        </div>
      </div>
    </header>
  );
}

export default InnerHeader;
