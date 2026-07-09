import { motion } from "framer-motion";
import { FaEnvelope, FaGithub, FaLinkedin, FaMapMarkerAlt } from "react-icons/fa";
import { profile } from "../../styles/theme";

const Contact = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    event.currentTarget.reset();
  };

  return (
    <section id="contact" className="contact section-shell section-alt">
      <div className="section-content contact-layout">
        <motion.div
          initial={{ opacity: 0, x: -45 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="section-kicker">Contact</p>
          <h2 className="section-title">Let us build something useful.</h2>
          <p className="section-lead">
            I am open to Java Full Stack Developer roles, MCA placement
            opportunities, internships, and project collaborations.
          </p>

          <div className="contact-list">
            <a href={`mailto:${profile.email}`}>
              <FaEnvelope />
              {profile.email}
            </a>
            <a href={profile.github} target="_blank" rel="noreferrer">
              <FaGithub />
              GitHub
            </a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer">
              <FaLinkedin />
              LinkedIn
            </a>
            <span>
              <FaMapMarkerAlt />
              {profile.location}
            </span>
          </div>
        </motion.div>

        <motion.form
          className="glass-card contact-form"
          onSubmit={handleSubmit}
          initial={{ opacity: 0, x: 45 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <label htmlFor="name">Name</label>
          <input id="name" name="name" type="text" placeholder="Your name" required />

          <label htmlFor="email">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="your.email@example.com"
            required
          />

          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            rows="6"
            placeholder="Tell me about the opportunity or project"
            required
          />

          <button className="primary-button" type="submit">
            Submit Message
          </button>
        </motion.form>
      </div>
    </section>
  );
};

export default Contact;
