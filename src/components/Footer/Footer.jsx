import { Link } from "react-scroll";
import { FaArrowUp, FaGithub, FaLinkedin } from "react-icons/fa";
import { profile } from "../../styles/theme";

const Footer = () => {
  return (
    <footer className="footer">
      <div>
        <h2>{profile.name}</h2>
        <p>
          MCA student building practical web applications with Java, Spring
          Boot, React, and MySQL.
        </p>
      </div>

      <div className="footer-socials">
        <a
          href={profile.github}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
        >
          <FaGithub />
        </a>
        <a
          href={profile.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <FaLinkedin />
        </a>
        <Link to="home" smooth duration={500} className="back-to-top" aria-label="Back to top">
          <FaArrowUp />
        </Link>
      </div>

      <p className="copyright">
        Copyright {new Date().getFullYear()} {profile.name}. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
