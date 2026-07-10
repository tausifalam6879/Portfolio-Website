import { motion } from "framer-motion";
import { FaCode, FaDownload, FaGraduationCap, FaTools } from "react-icons/fa";
import resumeFile from "../../assets/resume/Tausif_Alam_Resume.pdf";

const aboutCards = [
  {
    icon: <FaGraduationCap />,
    title: "Education",
    text: "MCA student at NIT Raipur with a current CPI of 7.72/10. B.Sc. Mathematics graduate with a CGPA of 9.29/10.",
  },
  {
    icon: <FaCode />,
    title: "Developer",
    text: "Working primarily with Java, Spring Boot, REST APIs, MySQL, and JPA/Hibernate while developing practical skills in React, Spring Security, and JWT authentication.",
  },
  {
    icon: <FaTools />,
    title: "Project Focus",
    text: "Building practical projects involving authentication, REST APIs, database integration, dashboards, forms, deployment workflows, and clean user-interface flows.",
  },
];

const About = () => {
  return (
    <section id="about" className="about section-shell">
      <motion.div
        className="section-content"
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <p className="section-kicker">About Me</p>
        <h2 className="section-title">
          Building practical software with a full-stack mindset.
        </h2>

        <p className="section-lead">
          I am Tausif Alam, an MCA student at NIT Raipur with a strong interest
          in Java and full-stack web development. I have hands-on experience
          with Java, Spring Boot, REST APIs, MySQL, and database-driven
          applications, along with basic experience in React, Spring Security,
          and JWT authentication. My projects include a flight-booking platform,
          a financial dashboard, a student portal, and this personal portfolio
          website.
        </p>

        <div className="about-grid">
          {aboutCards.map((card, index) => (
            <motion.article
              className="glass-card about-card"
              key={card.title}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.12, duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="card-icon">{card.icon}</div>
              <h3>{card.title}</h3>
              <p>{card.text}</p>
            </motion.article>
          ))}
        </div>

        <a className="primary-button about-resume" href={resumeFile} download>
          <FaDownload />
          Download Resume
        </a>
      </motion.div>
    </section>
  );
};

export default About;
