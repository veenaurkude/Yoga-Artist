import React, { useEffect } from "react";
import styles from "./Contact.module.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { motion } from "framer-motion";
import { MdEmail, MdPhone, MdLocationOn } from "react-icons/md";
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaWhatsappSquare,
} from "react-icons/fa";

const Contact = () => {
  useEffect(() => {
    AOS.init({
      duration: 600,
      offset: 100,
      easing: "ease-in-out",
      delay: 0,
      once: true,
    });
  }, []);

  return (
    <>
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.5 }}
        transition={{ duration: 0.5 }}
      >
        <section className={styles.contactContainer}>
          <div className={styles.header} data-aos="fade-down">
            <h1>Contact Me</h1>
            <p>Let’s bring your vision to life — I’d love to hear from you.</p>
          </div>

          <div className={styles.contactContent}>
            {/* Contact Form */}
            <form
              className={styles.form}
              data-aos="zoom-in"
              onSubmit={(e) => e.preventDefault()}
            >
              <input type="text" placeholder="Your Name" required />
              <input type="email" placeholder="Your Email" required />
              <textarea placeholder="Your Message" rows="2" required></textarea>
              <button type="submit">Send Message</button>
            </form>

            {/* Contact Info */}

            <div className={styles.infoSection} data-aos="zoom-in">
              <div className={styles.info}>
                <div className={styles.infoItem}>
                  <MdEmail className={styles.icon} />
                  <a href="mailto:artist@example.com">artist@gmail.com</a>
                </div>
                <div className={styles.infoItem}>
                  <MdPhone className={styles.icon} />
                  <a href="tel:+91-1234567890">+91-1234567890</a>
                </div>
                <div className={styles.infoItem}>
                  <MdLocationOn className={styles.icon} />
                  <span>India</span>
                </div>

                <div className={styles.info}>
                  <h2 className={styles.heading}>Connect</h2>

                  <div className={styles.socialSection}>
                    <div
                      className={styles.socialIcons}
                      data-aos="fade-up"
                      data-aos-delay="100"
                    >
                      <a
                        href="https://www.facebook.com/artist.vijayan.raman"
                        target="_blank"
                        className={styles.icon}
                        aria-label="Facebook"
                      >
                        <FaFacebookSquare />
                      </a>

                      <a
                        href="#"
                        target="_blank"
                        className={styles.icon}
                        aria-label="Instagram"
                      >
                        <FaInstagramSquare />
                      </a>
                      <a
                        href="#"
                        target="_blank"
                        className={styles.icon}
                        aria-label="Whatsapp"
                      >
                        <FaWhatsappSquare />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </motion.div>
    </>
  );
};

export default Contact;
