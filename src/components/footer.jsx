import { useState, useEffect, useRef } from "react";
import { Link, Element } from "react-scroll";
import "../styles/utilities.css";
import "../styles/footer.css";
import Lottie from "lottie-react";
import scrollAnimation from "../assets/scroll-white.json";
import devAnimation from "../assets/dev-animation.json";

function Footer() {
  return (
    <footer id="main-footer">
      <div class="footer-content container flex-items">
        <p>Copyright &copy; 2019. All Rights Reserved</p>
        <div class="social flex-items">
          <a href="">
            <i class="fab fa-twitter"></i>
          </a>
          <a href="">
            <i class="fab fa-facebook"></i>
          </a>
          <a href="">
            <i class="fab fa-instagram"></i>
          </a>
          <a href="">
            <i class="fab fa-linkedin"></i>
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

{
  /* <Lottie
          animationData={devAnimation}
          loop
          autoplay
          speed={5}
          className="animation"
        /> */
}
{
  /* <h1 className="title">&lt; Bem vindo(a) ao meu portfólio /&gt;</h1> */
}
{
  /* <a href="#">
                <Lottie animationData={scrollAnimation}
                    loop
                    autoplay
                    speed={5}
                    style={{ width: '200px', height: '100px' }} />
            </a> */
}
{
  /* <Link to="section1" spy={true} smooth={true} duration={500} offset={-80} delay={100}>
                <Lottie animationData={scrollAnimation}
                    loop
                    autoplay
                    speed={5}
                    style={{ width: '200px', height: '100px' }} />
            </Link> */
}
