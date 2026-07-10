import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import { projects } from "../../data/projects";
import { profile } from "../../styles/theme";

export default function Projects() {
  return (
    <section id="projects" className="projects section-shell">
      <div className="section-content">
        <p className="section-kicker">Projects</p>
        <h2 className="section-title">Selected full-stack work.</h2>
        <p className="section-lead">
          Selected academic and personal projects demonstrating backend
          development, REST API integration, databases, authentication, and
          frontend implementation.
        </p>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <motion.article
              className={`glass-card project-card ${
                project.featured ? "featured-project" : ""
              }`}
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.08, duration: 0.5 }}
              viewport={{ once: true }}
              whileHover={{
                y: -10,
              }}
            >
              <div className="project-topline">
                <span>{project.category}</span>
                {project.featured && <span>Featured</span>}
              </div>

              <h3>{project.title}</h3>
              <p>{project.description}</p>
              {project.note && <p className="project-note">{project.note}</p>}

              <div className="tech-stack">
                {project.tech.map((tech) => (
                  <span key={tech}>{tech}</span>
                ))}
              </div>

              <div className="project-actions">
                <a
                  className="small-button"
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub />
                  GitHub
                </a>

                {project.demo ? (
                  <a
                    className="small-button ghost"
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaExternalLinkAlt />
                    {project.demoLabel || "Live Demo"}
                  </a>
                ) : (
                  <span className="small-button muted-button">No Live Demo</span>
                )}
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div
          className="github-stats glass-card"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div>
            <p className="section-kicker">GitHub Stats</p>
            <h3>GitHub Activity and Project Work</h3>
            <p>
              Explore my GitHub profile for source code, project updates, and
              repositories connected with the portfolio work shown above.
            </p>
          </div>
          <div className="github-stats-actions">
            <a
              className="small-button"
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub />
              GitHub Profile
            </a>
            <a
              className="small-button ghost"
              href="https://github.com/tausifalam6879?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaExternalLinkAlt />
              View Repositories
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
