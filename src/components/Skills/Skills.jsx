import { motion } from "framer-motion";
import { skillCategories } from "../../data/skills";

const Skills = () => {
  return (
    <section id="skills" className="skills section-shell section-alt">
      <div className="section-content">
        <p className="section-kicker">Skills</p>
        <h2 className="section-title">Technologies I use to build.</h2>
        <p className="section-lead">
          A focused, honest stack for Java full-stack development, frontend
          work, databases, tooling, and core computer science fundamentals.
        </p>

        <div className="skills-grid">
          {skillCategories.map((group, groupIndex) => (
            <motion.div
              className="glass-card skill-card"
              key={group.category}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: groupIndex * 0.08, duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h3>{group.category}</h3>
              <div className="skill-chip-list">
                {group.skills.map((skill) => (
                  <motion.span
                    className="skill-chip"
                    key={skill}
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    viewport={{ once: true }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
