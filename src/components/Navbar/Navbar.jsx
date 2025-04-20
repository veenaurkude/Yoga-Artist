import React, { useEffect, useState } from "react";
import styles from "./Navbar.module.css";
import { Link } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import { MdClose } from "react-icons/md";
import AOS from "aos";
import "aos/dist/aos.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 500,
      offset: 100,
      easing: "ease-in-out",
      delay: 0,
      once: true,
    });
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => setIsOpen(false);

  return (
    <header className={styles.headerContainer}>
      <div className={styles.header}>
        <h1 className={styles.logoTitle} data-aos="fade-right" data-aos-delay="400">
          <Link to="/" onClick={closeMenu} className={styles.title}>
            The Art of Vijayan
          </Link>
        </h1>

        {/* Toggle Button (Mobile) */}
        <button
          className={styles.menuButton}
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isOpen ? (
            <MdClose className={styles.icon} />
          ) : (
            <RxHamburgerMenu className={styles.icon} />
          )}
        </button>

        {/* Navigation Links */}
        <nav className={`${styles.navLinks} ${isOpen ? styles.showMenu : ""}`}>
          <Link
            to="/"
            onClick={closeMenu}
            className={styles.navLink}
            data-aos="fade-down"
            data-aos-delay="200"
          >
            Home
          </Link>
          <Link
            to="/gallery"
            onClick={closeMenu}
            className={styles.navLink}
            data-aos="fade-down"
            data-aos-delay="400"
          >
            Gallery
          </Link>
          <Link
            to="/about"
            onClick={closeMenu}
            className={styles.navLink}
            data-aos="fade-down"
            data-aos-delay="600"
          >
            About
          </Link>
          <Link
            to="/contact"
            onClick={closeMenu}
            className={styles.navLink}
            data-aos="fade-down"
            data-aos-delay="800"
          >
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
