import { useEffect, useState } from "react";
import { Link } from "react-scroll";
import { motion } from "framer-motion";
import { FaBars, FaMoon, FaSun, FaTimes } from "react-icons/fa";
import { navLinks, profile } from "../../styles/theme";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [theme, setTheme] = useState(
    () => localStorage.getItem("portfolio-theme") || "dark"
  );

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 80);

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("portfolio-theme", theme);
  }, [theme]);

  const closeMenu = () => setIsOpen(false);
  const toggleTheme = () => setTheme(theme === "dark" ? "light" : "dark");

  return (
    <motion.header
      className={`navbar-shell ${isScrolled ? "scrolled" : ""}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <nav className="navbar">
        <Link to="home" smooth duration={500} className="nav-logo">
          {profile.name.split(" ")[0]}<span>.</span>
        </Link>

        <div className={`nav-links ${isOpen ? "open" : ""}`}>
          {navLinks.map((item) => (
            <Link
              key={item}
              to={item}
              smooth
              duration={500}
              offset={-72}
              spy
              activeClass="active"
              onClick={closeMenu}
              className="nav-link"
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </Link>
          ))}
        </div>

        <div className="nav-actions">
          <button
            className="icon-button"
            onClick={toggleTheme}
            type="button"
            aria-label="Toggle dark and light mode"
            title="Toggle theme"
          >
            {theme === "dark" ? <FaSun /> : <FaMoon />}
          </button>

          <button
            className="icon-button mobile-menu-button"
            onClick={() => setIsOpen((value) => !value)}
            type="button"
            aria-label="Toggle mobile menu"
            title="Menu"
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </nav>
    </motion.header>
  );
};

export default Navbar;
