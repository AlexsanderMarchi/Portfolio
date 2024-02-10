import "../styles/utilities.css";
import "../styles/footer.css";
import {
  AiFillInstagram,
  AiFillGithub,
  AiTwotoneMail,
  AiFillLinkedin,
} from "react-icons/ai";

function Footer() {
  return (
    <footer id="main-footer">
      <div class="footer-content container flex-items">
        <p>Telefone/Whatsapp:&nbsp;&nbsp; +55 (48) 48 99678-8585</p>
        <div class="social flex-items">
          <a href="mailto:alexsandermarchi@gmail.com" target="_blank">
            <AiTwotoneMail className="contact" />
          </a>
          <a href="https://github.com/AlexsanderMarchi" target="_blank">
            <AiFillGithub className="contact" />
          </a>
          <a href="https://instagram.com/alex_marchz" target="_blank">
            <AiFillInstagram className="contact" />
          </a>
          <a
            href="https://www.linkedin.com/in/alexsander-marchi-zunino-226332170/"
            target="_blank"
          >
            <AiFillLinkedin className="contact" />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
