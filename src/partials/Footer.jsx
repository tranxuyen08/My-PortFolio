import { AiFillGithub, AiFillLinkedin, AiFillFacebook } from "react-icons/ai";
import "./CSS/Footer.css";

function Footer() {
  return (
    <>
      <footer className="px-4">
        <div className="foot-left d-flex">
          <p>Muhammad Thoriq Ali Said &copy; 2023</p>
        </div>
        <div className="foot-right d-flex">
          <a
            href="https://github.com/tranxuyen08"
            target="_blank"
            rel="noreferrer"
          >
            <AiFillGithub className="foot-icon" />
            &nbsp;&nbsp;GitHub
          </a>
          <a href="" target="_blank" rel="noreferrer">
            <AiFillLinkedin className="foot-icon" />
            &nbsp;&nbsp;Linkedin
          </a>
          <a
            href="https://www.facebook.com/tranxuyen8698"
            target="_blank"
            rel="noreferrer"
          >
            <AiFillFacebook className="foot-icon" />
            &nbsp;&nbsp;Facebook
          </a>
        </div>
      </footer>
    </>
  );
}

export default Footer;
