import React, { useEffect } from "react";
import styles from "./Footer.module.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  useEffect(() => {
    AOS.init({
      duration: 500,
      offset: 100,
      easing: "ease-in-out",
      delay: 0,
      once: true,
    });
  }, []);

  return (
    <>
    <footer className={styles.footerContainer}>
      <div className={styles.footerContent}>
        {/* <h2 className={styles.logo} data-aos="fade-up"> The Art of Vijayan</h2> */}

        <p className={styles.copy} data-aos="fade-up" data-aos-delay="200">
          © {new Date().getFullYear()} The Art of Vijayan. All rights reserved.
        </p>

        <div className={styles.socialIcons} data-aos="fade-up" data-aos-delay="100">
          <a href="https://www.facebook.com/artist.vijayan.raman" target="_blank" className={styles.icon} aria-label="Facebook">
            <FaFacebookF />
          </a>
          <a href="#" target="_blank" className={styles.icon} aria-label="Instagram">
            <FaInstagram />
          </a>
          <a href="#" target="_blank" className={styles.icon} aria-label="Whatsapp">
            <FaWhatsapp  />
          </a>
        </div>

        
      </div>
    </footer>
    </>
  );
};

export default React.memo(Footer);
