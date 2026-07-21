import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { FaArrowRight, FaDownload, FaGithub, FaLinkedin } from "react-icons/fa";
import { Link } from "react-scroll";
import resumeFile from "../../assets/resume/Tausif_Alam_Resume.pdf";
import { profile } from "../../styles/theme";

const Hero = () => {
  return (
    <section id="home" className="hero section-shell">
      <motion.div
        className="hero-content"
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <p className="eyebrow">MCA Student at NIT Raipur</p>
        <h3 className="hero-greeting">Hello, It's Me</h3>

        <h1 className="hero-title">
          <span>{profile.name}</span>
        </h1>

        <TypeAnimation
          sequence={[
            "Java Developer",
            2000,
          ]}
          wrapper="div"
          speed={40}
          repeat={Infinity}
          style={{
            color: "#00f7ff",
            fontSize: "30px",
            marginBottom: "20px",
            minHeight: "45px",
            display: "block",
            fontWeight: "600",
          }}
        />

        <p className="hero-description">
          MCA student at NIT Raipur. I work with Java, Spring Boot, databases,
          REST APIs, and web development.
        </p>

        <div
          className="hero-actions"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "20px",
            flexWrap: "wrap",
          }}
        >
          <a
            className="social-button"
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub profile"
            title="GitHub"
          >
            <FaGithub />
          </a>

          <a
            className="social-button"
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn profile"
            title="LinkedIn"
          >
            <FaLinkedin />
          </a>

          <a className="primary-button" href={resumeFile} download>
            <FaDownload />
            Download Resume
          </a>

          <Link
            className="outline-button"
            to="contact"
            smooth
            duration={500}
            offset={-72}
          >
            Contact Me
            <FaArrowRight />
          </Link>
        </div>
      </motion.div>

    </section>
  );
};

export default Hero;
