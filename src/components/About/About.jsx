import { motion } from "framer-motion";
import { FaCode, FaDownload, FaGraduationCap, FaTools } from "react-icons/fa";
import resumeFile from "../../assets/resume/Tausif_Alam_Resume.pdf";

const aboutCards = [
  {
    icon: <FaGraduationCap />,
    title: "Education",
    text: "MCA student at NIT Raipur. Current CPI: 7.72/10. B.Sc. Mathematics graduate with CGPA 9.29/10.",
  },
  {
    icon: <FaCode />,
    title: "Developer",
    text: "Working with Java, Spring Boot, React, MySQL, REST APIs, JWT authentication, and JPA/Hibernate.",
  },
  {
    icon: <FaTools />,
    title: "Project Focus",
    text: "Building practical projects around authentication, dashboards, forms, database records, deployment, and clean UI flows.",
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
          I am Tausif Alam, an MCA student at NIT Raipur. My current focus is
          full-stack development with Java, Spring Boot, React, REST APIs, MySQL,
          and authentication-based web applications. I have built portfolio
          projects around loan verification, flight booking, student portals,
          dashboard UI, and frontend deployment workflows.
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
