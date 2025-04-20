import React, { useEffect } from "react";
import styles from "./Contact.module.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { MdEmail, MdPhone, MdLocationOn } from "react-icons/md";

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
    <section className={styles.contactContainer}>
      <div className={styles.header} data-aos="fade-down">
        <h1>Contact Me</h1>
        <p>Let’s bring your vision to life — I’d love to hear from you.</p>
      </div>

      <div className={styles.contactContent}>
        

        {/* Contact Form */}
        <form
          className={styles.form}
          data-aos="fade-right"
          onSubmit={(e) => e.preventDefault()}
        >
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message" rows="5" required></textarea>
          <button type="submit">Send Message</button>
        </form>

        {/* Contact Info */}
        <div className={styles.infoSection} data-aos="fade-left">
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
        </div>
      </div>
    </section>
  );
};

export default Contact;
