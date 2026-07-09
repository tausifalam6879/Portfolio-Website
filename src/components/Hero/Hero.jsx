import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { FaArrowRight, FaDownload, FaGithub, FaLinkedin } from "react-icons/fa";
import { Link } from "react-scroll";
import hero from "../../assets/images/hero.jpeg";
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
          <span>{profile.name.split(" ")[0]} </span>
          <span>{profile.name.split(" ")[1]}</span>
        </h1>

        <TypeAnimation
          sequence={[
            "Java Full Stack Developer",
            2000,
            "Spring Boot Developer",
            2000,
            "React Developer",
            2000,
            "Full Stack Project Builder",
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
          MCA student at NIT Raipur focused on Java, Spring Boot, React, REST
          APIs, MySQL, JWT authentication, and practical full-stack projects.
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
            rel="noreferrer"
            aria-label="GitHub profile"
            title="GitHub"
          >
            <FaGithub />
          </a>

          <a
            className="social-button"
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
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
            Hire Me
            <FaArrowRight />
          </Link>
        </div>
      </motion.div>

      <motion.div
        className="hero-visual"
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <motion.img
          className="hero-image"
          src={hero}
          alt="Tausif Alam"
          animate={{
            y: [0, -15, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </motion.div>
    </section>
  );
};

export default Hero;
